// student_index (for all students injected into index), 
// student_details, 
// student_create_get, 
// student_create_post, 
// student_update, 
// student_delete

const student_details = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM students WHERE student_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
      res.render('pages/student', {student: results.rows[0]}); 
    })
}