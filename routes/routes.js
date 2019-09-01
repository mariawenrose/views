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
  db.getProjects()
  .then(projects => {
    console.log(projects)
    res.render('./design-projects', {
      projects: projects

    })
  })
})


router.post('/', (req, res) => {

  var project = {
    title: req.body.projectName,
    description: req.body.projectDescription,
    category: req.body.category
  }
  console.log(project)
  db.addProject(project)
  .then (project => {
    res.redirect('/')
  })
})

module.exports = router
