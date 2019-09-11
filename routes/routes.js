const express = require('express')
const db = require('../db')
require('dotenv').config()

const router = express.Router()

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')


var s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    subregion: 'ap-southeast-2', //sydney
})

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'views-portfolio', //configure this in aws
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

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

router.post('/', upload.single('my-upload-field'),(req, res) => {
console.log(req.file)
console.log(req.file.size)
  var project = {
    title: req.body.projectName,
    description: req.body.projectDescription,
    category: req.body.category,
    image: req.file.location,
    size: req.file.size
  }
  console.log(project)
  db.addProject(project)
  .then (project => {
    res.redirect('/')
  })
})

router.post('/deleteProject/:id', (req, res) => {
  db.getProjectCategory(req.params.id)
  .then((result) => {
    db.deleteProjects(req.params.id)
    .then(() => {
    console.log(result)
    res.redirect('/category/'+ result.category)
    })
  })
})



module.exports = router
