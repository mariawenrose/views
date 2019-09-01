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
  res.render('./web-projects')
})

router.get('/design-projects', (req, res) => {
  db.getUsers()
  .then(users => {
    res.render('./design-projects', {
      users: users
    })
  })
})

router.post('/', (req, res) => {
  var project = req.body
  console.log(project)
  res.send(req.body)
})

module.exports = router
