const mysql = require('mysql')
const config = require('../config/config.json')

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password
})

connection.connect(error =>{
  if(error) throw error;
  console.log("DB Connection Successful")
})

module.exports = connection