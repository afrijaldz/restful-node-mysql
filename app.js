const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./src/routes')
const conn = require('./src/config/db')
 
// parse application/json
app.use(bodyParser.json())
 
app.use('/api', routes)

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
  app.listen(3000, () => {
    console.log('Server started on port 3000...')
  })
});