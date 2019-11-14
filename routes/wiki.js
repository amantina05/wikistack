var express = require('express')
var app = express()
var router = express.Router()
const { addPage } = require('../views/addPage')

router.get('/', function (req, res, next) {
    res.send('got to GET /wiki/')
})

router.post('/', function (req, res, next) {
    res.send('got to POST /wiki/')
})

router.get('/add', function (req, res) {
    // res.send('got to ADD /wiki')
    res.send(addPage());
})

module.exports = router 