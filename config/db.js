 // подключение к PostgreSQL 
 const Pool = require('pg-pool') 
 const pool = new Pool({  
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD,
  port: 5432, // по умолчанию
 })
 
 module.exports = pool