const express = require('express'); 
const classroomRouter = express.Router(); 
const bodyParser = require('body-parser')
const { pool } = require('./../../config');
// const { Client } = require('pg-promise/typescript/pg-subset');
const db = require('./../models/index.js'); 
const { promiseImpl } = require('ejs');
const Sequilize = require('sequelize'); 

// SHOW THE TEACHER'S NAME IN THE PAGE 
// TRY WITH COMBINING PROMISES AND ASYNC/AWAIT

// const getClassDetails = (req, res) => {
//     const classname = req.params.classname
//     pool.query('SELECT * FROM students WHERE class_name = $1', [classname], (error, results) => {
//         if (error) {
//           throw error
//         }
//         console.log(results.rows); 
//         res.render('pages/classroom', {students: results.rows})
//     })
// }


// PROMISSES WIP
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
  
classroomRouter
    .route('/:classname')
    .get(getClassDetails)

module.exports = classroomRouter; 