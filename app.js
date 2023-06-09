const express = require('express')
 
const app = express();
const exphbs=require('express-handlebars')
 
app.use(express.urlencoded({ extended: true }));  
require('dotenv').config()  
const hbs= exphbs.create({
  defaultLayout:'main',  
  extname:'hbs'})  
 
app.engine('hbs', hbs.engine)
app.set('view engine', "hbs")   
 
 app.use(express.static('public'))
 app.use(express.static('images'))
//импортируем Роуты  
const router = require('./routes/reciperoutes')
app.use(router) 
 
app.listen(3000 );
 

