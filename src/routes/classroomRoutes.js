const express = require('express'); 
const classroomRouter = express.Router(); 
const ClassroomController = require('./../controllers/classroomController')


classroomRouter
    .route('/2/:classname')
    .get((req, res, next) => {
        let classroomController = new ClassroomController();
        classroomController.getClassDetails2(req, res, next);
    })

classroomRouter
    .route('/:classname')
    .get((req, res, next) => {
        let classroomController = new ClassroomController();
        classroomController.getClassDetails(req, res, next);
    })

module.exports = classroomRouter; 