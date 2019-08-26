const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/web-projects', (req, res) => {
  res.send('this is the web projects page')
})

router.get('/design-projects', (req, res) => {
  res.send('this is the design page')
})

module.exports = router
