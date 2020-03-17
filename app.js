const path = require('path');
const express = require('express');
const ejs = require('ejs');
const app = express();
const titles = require('./titles');
const moment = require("moment")

//TODO: comment everything, add current page indicator


app.set('view engine','ejs');

app.locals.moment = require("moment")

app.get('/',function(req, res) {  
  res.render('index',titles.index);
});

app.get('/gallery',function(req, res) {  
      res.render('gallery',titles.gallery);
});

app.get('/about',function(req, res) {  
  res.render('about',titles.about);
});

app.get('/contact',function(req, res) {  
  res.render('contact',titles.contact);
});

//code below from in class
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});