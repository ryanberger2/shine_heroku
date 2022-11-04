const express = require('express'); 
const studentRouter = express.Router(); 
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const db = require('../models/index.js'); 
const { pool } = require('../config')

const showStudentForm = (req, res, messages) => {
    pool.query('SELECT * FROM classrooms', (error, results) => {
        if (error) {
        throw error
        }
        //console.log(results.rows)
        res.render('pages/new-student-form', {classrooms: results.rows, messages: messages})
    })
}
  
studentRouter
    .route('/new')
    .get(showStudentForm)

studentRouter
    .post('/new', urlencodedParser, (req, res) => {
    console.log(req.body); 
    const {class_name, student_first_name, student_last_name, student_birth_date, student_number} = req.body; 
    pool.query(`INSERT INTO students 
              (class_name, student_first_name, student_last_name, student_birth_date, student_number) 
              VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
              [class_name, student_first_name, student_last_name, student_birth_date, student_number], 
        (err, result) => {
        if (err) {
            console.log(err)
            showStudentForm (req, res, err.detail)
        } else {
            res.render('pages/student-added', {data: req.body}); 
        }
        })
    })

const updateStudentState = async (req, res, next) => {
    try {
        let studentStatePromise = db.one(
            'SELECT student_state FROM students where student_id = $1', [req.params.id]
        )
        let studentState = await studentStatePromise; 
        let newState = studentState.student_state !== true;
        await db.none(
            `UPDATE students SET student_state = ${newState} WHERE student_id = ${req.params.id};`
        ); 
        await db.none(
            `INSERT INTO student_events (student_id, event_type, event_value) VALUES (${req.params.id}, 'focus_update', ${newState});`
        ); 
        res.status(200).json({
            message: "student state updated", 
            status: "success"
        })
    } catch (err) {
        next(err); 
    }
}

const getClassDetails = async (req, res, next) => {
    try {
        let studentDataPromise = db.any(
            'SELECT * FROM students where class_name = $1', [req.params.classname]
        )
        let classDataPromise = db.one(
            'SELECT * FROM classrooms where class_name = $1', [req.params.classname]
            )
        let studentData = await studentDataPromise
        let classData = await classDataPromise
        res.render('pages/classroom', {students: studentData, classroom: classData})
    } catch (err) {
        next(err); 
    }
}

studentRouter
    .route('/toggle-state/:id')
    .post(updateStudentState)


studentRouter
    .get('/edit/:id', (req, res) => {
        const id = req.params.id
        pool.query('SELECT * FROM students WHERE student_id = $1', [id], (error, results) => {
        if (error) {
            console.log(error); 
        }
        res.render('pages/edit-student-form', {student: results.rows[0]}); 
        })
    })

studentRouter
    .get('/:id', (req, res) => {
        const id = req.params.id
        pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        } 
        res.render('pages/student', {student: results.rows[0]}); 
        })
    })
  
studentRouter
    .post('/:id', (req, res) => {
        const id = req.params.id
        const {student_name, student_birth_date, student_number, student_points, student_state, student_emojis, robot_offset} = req.body; 
        console.log(req.body); 
        pool.query(
            'UPDATE students SET student_name = $2, student_birth_date = $3, student_number = $4, student_points = $5, student_state = $6, student_emojis = $7, robot_offset = $8 WHERE student_id = ' + id, 
            [id, student_name, student_birth_date, student_number, student_points, student_state, student_emojis, robot_offset], 
            (error, results) => {
        if (error) {
            throw error
        }
        res.status(200)
        res.json(results.rows)
        })
    })

  module.exports = studentRouter; 