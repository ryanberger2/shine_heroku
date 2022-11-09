
const Student = require('./../models/student'); 
const Classroom = require('./../models/classroom'); 
const db = require('./../models/index.js'); 
const Sequelize = require('sequelize'); 

class ClassroomController {
    constructor () {

    }

    async getClassDetails2(req, res, next) {
        try {
            let { classname } = req.params
            let studentDataPromise = Student.findAll({
                where: {
                    class_name: classname
                }
            })
            let classDataPromise = Classroom.findOne({
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

    async getClassDetails(req, res, next) {
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
}

module.exports = ClassroomController;