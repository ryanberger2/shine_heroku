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