const models = require('./../src/models'); 
const Classroom = models.Classroom; 
const Student = models.Student; 
const ClassEvent = models.ClassEvent; 
const StudentEvent = models.StudentEvent; 

Classroom.create({
    class_name: "Shine test class", 
    teacher_first_name: "John", 
    teacher_last_name: "Doe"
})
.then((newClassroom) => {
    console.log(newClassroom.get())
})
.catch((err) => {
    console.log("Error while creating class: ", err)
})

Student.bulkCreate([
    {class_name: 'Shine test class', student_name: "Suzie Q"}, 
    {class_name: 'Shine test class', student_name: "Ralph W"}, 
    {class_name: 'Shine test class', student_name: "Lisa S"}
])
.then((newStudents) => {
    console.log(newStudents)
})
.catch((err) => {
    console.log("Error while creating student: ", err)
})

