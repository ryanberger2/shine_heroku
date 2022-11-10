const Student = require('./../models/student'); 
const Classroom = require('./../models/classroom'); 
const db = require('./../models/index.js'); 
const { pool } = require('./../../config'); 
const Sequelize = require('sequelize'); 

class StudentController {
  constructor () {

  }
  
  async getClassDetails (req, res, next) {
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

  async showStudentForm (req, res, messages) {
    await pool.query('SELECT * FROM classrooms', (error, results) => {
        if (error) {
          throw error
        }
        //console.log(results.rows)
        res.render('pages/new-student-form', {classrooms: results.rows, messages: messages})
      })
  }

  async updateStudentState (req, res, next) {
    try {
        let studentStatePromise = db.one(
            'SELECT student_state FROM students where id = $1', [req.params.id]
        )
        let studentState = await studentStatePromise; 
        let newState = studentState.student_state !== true;
        await db.none(
            `UPDATE students SET student_state = ${newState} WHERE id = ${req.params.id};`
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

  async createStudent (req, res) {
    console.log(req.body); 
    let {class_name, student_name, student_birth_date, student_points, student_emojis, robot_offset} = req.body; 
    pool.query(`INSERT INTO students 
              (class_name, student_name, student_birth_date, student_points, student_emojis, robot_offset) 
              VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, 
              [class_name, student_name, student_birth_date, student_points, student_emojis, robot_offset], 
        (err, result) => {
        if (err) {
            console.log(err)
            showStudentForm (req, res, err.detail)
        } else {
            res.render('pages/student-added', {data: req.body}); 
        }
      })
  }

  async getEditStudent (req, res, next) {
    const id = req.params.id
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
        console.log(error); 
    }
    res.render('pages/edit-student-form', {student: results.rows[0]}); 
    })
  }

  async editStudent (req, res, next) {
    const id = req.params.id; 
    const {student_name, student_birth_date, student_points, student_state, student_emojis, robot_offset} = req.body; 
    console.log(req.body); 
    pool.query(
        'UPDATE students SET student_name = $2, student_birth_date = $3, student_points = $4, student_state = $5, student_emojis = $6, robot_offset = $7 WHERE id = $1',
        [id, student_name, student_birth_date, student_points, student_state, student_emojis, robot_offset], 
        (error, results) => {
    if (error) {
        throw error
    }
    res.render('pages/student-added', {data: req.body})
    })
  }

  async getStudent (req, res, next) {
    const id = req.params.id
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
        throw error
    } 
    res.render('pages/student', {student: results.rows[0]}); 
    })
  }

}

// student_index (for all students injected into index), 
// student_details, 
// student_create_get, 
// student_create_post, 
// student_update, 
// student_delete

const student_details = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
      res.render('pages/student', {student: results.rows[0]}); 
    })
}

module.exports = StudentController; 