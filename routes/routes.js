const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('./index')
})

router.get('/category/:type', (req, res) => {
  db.getProjects(req.params.type)
  .then(projects => {
    res.render('./projects', {
      projects: projects

    })
  })
})

router.post('/deleteProject/:id', (req, res) => {
  console.log(req.params)
  db.deleteProjects(req.params.id)
  .then(() => {
    res.redirect('/projects')
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
