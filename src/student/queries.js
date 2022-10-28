const getStudents1 = "SELECT * FROM students WHERE student_first_name = 'Suzy'"; 
const getStudentById = "SELECT * FROM students WHERE id = $1"; 



module.exports = {
    getStudents1,
    getStudentById, 
}; 