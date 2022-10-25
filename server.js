const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const studentRoutes = require('./src/student/routes'); 
const path = require('path'); 
const importData = require("./data.json"); 

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json()) 
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.render('pages/index')}
    ); 

app.use('/api/v1/students', studentRoutes); 

app.get('/classroom', (req, res) => {
  res.render('pages/classroom', {
    students: importData
  })}
); 

app.post('/event', (req, res) => {
  const {event_name,student_id} = req.body
  res.render('submit', {}) 
})

app.get("/students", (req, res) => {
  res.send(importData); 
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 