const express = require('express'); 
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express(); 
const PORT = process.env.PORT || 3000; 
const studentRoutes = require('./src/student/routes'); 
const path = require('path'); 
const importData = require("./data.json"); 

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json()) 
  .use(cors())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.render('pages/index')}
    )
  .get('/classroom', (req, res) => {
    res.render('pages/classroom', {
      students: importData
    })}
    )


// Routes for a CLASSROOM
const getStudents = (req, res) => {
  pool.query('SELECT * FROM students WHERE class_id = 1', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows) 
  })
}

app
  .route('/classroom/:id')
  // GET endpoint
  .get(getStudents)


// Routes for a STUDENT
const addStudent = (req, res) => {
  const {class_id, student_number, student_first_name, student_last_name, student_birth_date} = request.body  
  pool.query(
    'INSERT INTO students (class_id, student_number, student_first_name, student_last_name, student_birth_date) VALUES ($1, $2, $3, $4, $5)', 
    [class_id, student_number, student_first_name, student_last_name, student_birth_date], 
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).json({ status: 'success', message: 'Student added.'})
  })
}

app
  .route('/student/new')
  .get((req, res) => {
    res.render('pages/studentform', {
      students: importData
    })}
  )
  .post((req, res) => {
    console.log(req.body); 
    // addStudent
   })
  


app.get("/students", (req, res) => {
  res.send(importData); 
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 