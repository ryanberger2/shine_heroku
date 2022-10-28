const express = require('express'); 
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express(); 
const PORT = process.env.PORT || 3000; 
const studentRoutes = require('./src/student/routes'); 
const path = require('path'); 
const importData = require("./data.json"); 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

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
const getStudentsByClassname = (req, res) => {
  const classname = req.params.classname
  pool.query('SELECT * FROM students WHERE class_name = $1', [classname], (error, results) => {
      if (error) {
        throw error
      }
      // res.status(200)
      // res.json(results.rows)
      res.render('pages/classroom', {students: results.rows})
  })
}

app
  .route('/classroom/:classname')
  // GET endpoint
  .get(getStudentsByClassname)


// Routes for a STUDENT
app.get('/student/new', (req, res) => {
  res.render('pages/studentform')
})

app.post('/student/new', urlencodedParser, (req, res) => {
  console.log(req.body); 
  const {class_name, student_first_name, student_last_name, student_birth_date, student_number} = req.body; 
  pool.query("INSERT INTO students (class_name, student_first_name, student_last_name, student_birth_date, student_number) VALUES ($1, $2, $3, $4, $5) RETURNING *", [class_name, student_first_name, student_last_name, student_birth_date, student_number])
  res.render('pages/student-added', {data: req.body}); 
})

app.get('/student/:id', (req, res) => {
  const id = req.params.id
  data = pool.query('SELECT * FROM students WHERE student_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200)
    res.json(results.rows)
  })
})

// const addStudent = (req, res) => {
//   const {class_name, student_first_name, student_last_name, student_birth_date, student_number} = req.body  
//   pool.query(
//     'INSERT INTO students (class_name, student_first_name, student_last_name, student_birth_date, student_number) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
//     [class_name, student_first_name, student_last_name, student_birth_date, student_number], 
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(201).send(`${res.rows[0].student_first_name} ${res.rows[0].student_last_name} added`)
//   })
// }

// app
//   .route('/student/new')
//   .get((req, res) => {
//     res.render('pages/studentform', {
//       students: importData
//     })}
//   )
//   .post(addStudent)
  


app.get("/students", (req, res) => {
  res.send(importData); 
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 