const express = require('express'); 
const bodyParser = require('body-parser')
const { pool } = require('./config')
const cors = require('cors')

// required routes
const studentRoutes = require('./routes/studentRoutes')
const classroomRoutes = require('./routes/classroomRoutes')
const indexRoutes = require('./routes/indexRoutes.js')

const app = express(); 
const path = require('path'); 
const PORT = process.env.PORT || 3000; 

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json()) 
  .use(cors())
  .use(indexRoutes)
  .use('/student', studentRoutes)
  .use('/classroom', classroomRoutes)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 