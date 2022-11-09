const express = require('express'); 
const classroomRouter = express.Router(); 
const db = require('./../models/index.js'); 
const Sequelize = require('sequelize'); 
const getStudentModel = require('./../models/student'); 
const getClassroomModel = require('./../models/classroom'); 


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


const getClassDetails2 = async (req, res, next) => {
    try {
        let { classname } = req.params
        let studentDataPromise = getStudentModel.findAll({
            where: {
                class_name: classname
            }
        })
        let classDataPromise = getClassroomModel.findOne({
            where: {
                class_name: classname
            }
        })
        let studentData = await studentDataPromise
        let classData = await classDataPromise
        res.render('pages/classroom', {students: studentData, classroom: classData})
    } catch(err) {
        next(err); 
    }
}
classroomRouter
    .route('/2/:classname')
    .get(getClassDetails2)

// PROMISSES WIP
const getClassDetails = async (req, res, next) => {
    try {
        let { classname } = req.params
        let studentDataPromise = db.any(
            'SELECT * FROM students where class_name = $1', [classname]
        )
        let classDataPromise = db.one(
            'SELECT * FROM classrooms where class_name = $1', [classname]
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