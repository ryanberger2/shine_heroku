const express = require('express'); 
const studentRouter = express.Router(); 
const StudentController = require('./../controllers/studentController'); 
  
studentRouter
    .route('/new')
    .get((req, res, next) => {
        let studentController = new StudentController();
        studentController.getNewStudent(req, res, next);
    })
    .post((req, res, next) => {
        let studentController = new StudentController(); 
        studentController.createNewStudent(req, res, next); 
    })


studentRouter
    .route('/toggle-state/:id')
    .post((req, res, next) => {
        let studentController = new StudentController(); 
        studentController.updateStudentState(req, res, next); 
    })


studentRouter
    .route('/edit/:id')
    .get((req, res, next) => {
        let studentController = new StudentController(); 
        studentController.getEditStudent(req, res, next); 
    })

studentRouter
    .route('/:id')
    .get((req, res, next) => {
        let studentController = new StudentController(); 
        studentController.getStudent(req, res, next);
    })
    .post((req, res, next) => {
        let studentController = new StudentController(); 
        studentController.editStudent(req, res, next);
    })



  module.exports = studentRouter; 