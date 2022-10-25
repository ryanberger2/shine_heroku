const { Router } = require("express"); 
const controller = require('./controller'); 

const router = Router(); 

router.get("/", controller.getStudents); 
router.get("/:id", controller.getStudentById); 

module.exports = router; 

/* Here are the things I need the app to do: 

/ Classrooms: 
/ GET all classrooms 
/ GET a single classroom based on id and show the students 
/ POST a new classroom 
/ PUT a new classroom update 
/ DELETE a classroom

/ Students: 
/ GET a single student based on id and show their properties 
/ POST a new student 
/ PUT an update for a student 
/ DELETE a student (and their dependent info) 

/ Events: 
/ POST a new focus time event for a classroom when a timer starts, stops, pauses 
/ POST a new focus event for a student 
/ GET an aggregate of events for a classroom, given some dates 
/ 

*/