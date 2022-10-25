const express = require('express')
const app = express(); 
const path = require('path')
const importData = require("./data.json")
const PORT = process.env.PORT || 3000

// import 'tachyons';

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    return res.render('pages/index')}
    )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)); 

app.get("/students", (req, res) => {
  res.send(importData); 
})