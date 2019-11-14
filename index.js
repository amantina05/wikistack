const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
// cosnt static = require('static')
const layout = require("./views/layout");
const { db } = require('./models');

const app = express()

const port = 3000

app.use(express.static(__dirname + 'public'))

app.get('/', function (req, res) {
  res.send(layout(' '))
})

const init = async () => {
  await db.sync()
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}
init()

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
