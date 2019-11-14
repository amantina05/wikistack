var express = require('express')
var app = express()
var router = express.Router()
const addPage = require('../views/addPage')

const client = require('../models')

router.get('/', async (req, res, next) => {
  try {
    //select all users
    const getUsers = await client.User.findAll()
    res.send(getUsers)
  } catch (error) {
    next (error)
  }
})

router.get('/users/:id', async (req, res, next) => {
  try {
    //select a particular user
    const getUsers = await client.User.findOne({
      where: {
        id = $id
      }
    })
    res.send(getUsers)
  } catch (error) {
    next (error)
  }
})

router.post('/users/', async (req, res, next) => {
  try {
    //create a new user
    const getUsers = await
    //adjust missing fields
    client.User.create({id = $id})
  } catch (error) {
    next (error)
  }
})

router.put('/users/:id', async (req, res, next) => {
  try {
    //update new user
    const getUsers = await client.User.update({

    })
  } catch (error) {
    next (error)
  }
})

router.delete('/users/:id', async (req, res, next) => {
  try {
    //delete new user
    const getUsers = await client.User.destroy({

    })
  } catch (error) {
    next (error)
  }
})
module.exports = router
