const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
// cosnt static = require('static')
const layout = require("./views/layout");
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


const app = express()

const port = 3000
app.use(express.urlencoded ({extended: false}))
app.use(express.static(__dirname + 'public'))
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);


// app.get('/', (req, res, next) => {
//   res.redirect('/wiki')
// })

app.get('/', function (req, res) {
  res.send(layout(' <h1>tina</h1> '))
})

const init = async () => {
  await db.sync()
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}
init()

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })
