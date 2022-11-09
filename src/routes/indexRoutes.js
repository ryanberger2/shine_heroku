const express = require('express'); 
const indexRouter = express.Router(); 
const importData = require("./../../data.json"); 

indexRouter
    .get('/', (req, res) => {
    res.render('pages/classroom', {
      students: importData
    })}
  )

module.exports = indexRouter; 