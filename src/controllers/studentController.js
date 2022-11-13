const Student = require('./../models/student'); 
const Classroom = require('./../models/classroom'); 
const StudentEvent = require('./../models/student_event'); 

class StudentController {
  constructor () {
  }

  async getNewStudent (req, res, next) {
    try {
      let classDataPromise = Classroom.findAll()
      let classData = await classDataPromise; 
      res.render('pages/new-student-form', {classrooms: classData})
    } catch(err) {
      next(err); 
    } 
  }

  async updateStudentState (req, res, next) {
    try {
      let { id } = req.params 
      let studentStatePromise = Student.findOne({
        where: {
          id: id
        }, 
        attributes: ['student_state'] 
      })
      let studentState = await studentStatePromise; 
      let newState = studentState.student_state !== true; 
      await Student.update({ 
          student_state: newState 
        }, 
        {
          where: {
            id: id
          }
        }); 
      await StudentEvent.create({
        student_id: id, 
        event_type: 'focus_update', 
        event_value: newState
      }); 
      res.status(200).json({
          message: "student state updated", 
          status: "success"
      })
    } catch (err) {
        next(err); 
    }
  }

  async createNewStudent (req, res, next) {
    try {
      const {class_name, student_name, student_birth_date, student_points, student_emojis, robot_offset} = req.body; 
      await Student.create({ 
        class_name: class_name, 
        student_name: student_name, 
        student_birth_date: student_birth_date, 
        student_points: student_points, 
        student_emojis: student_emojis, 
        robot_offset: robot_offset
      })
      res.render('pages/student-added', {data: req.body}); 
    } catch (err) {
      getNewStudent (req, res, err.datail)
      next(err); 
    }
  }

  async getEditStudent (req, res, next) {
    try {
      const { id } = req.params 
      const studentDataPromise = Student.findOne({
        where: {
          id: id
        }
      })
      const studentData = await studentDataPromise; 
      res.render('pages/edit-student-form', {student: studentData.dataValues}); 
    } catch (err) {
      next(err); 
    }
  }

  async editStudent (req, res, next) {
    try {
      const { id } = req.params; 
      const {student_name, student_birth_date, student_points, student_state, student_emojis, robot_offset} = req.body; 
      await Student.update({
        student_name: student_name, 
        student_birth_date: student_birth_date, 
        student_points: student_points, 
        student_state: student_state,
        student_emojis: student_emojis, 
        robot_offset: robot_offset
      }, {
        where: { id: id }
      })
      res.render('pages/student-added', {data: req.body})
    } catch (err) {
      next(err); 
    }
  }

  async getStudent (req, res, next) {
    try {
      const { id } = req.params
      const studentDataPromise = Student.findOne({
        where: {
          id: id
        }
      })
      const studentData = await studentDataPromise; 
      res.render('pages/student', {student: studentData.dataValues}); 
    } catch (err) {
      next(err); 
    }
  }
}

module.exports = StudentController; 