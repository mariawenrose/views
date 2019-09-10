const express = require('express')

const db = require('../db')

const router = express.Router()

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
require('dotenv').config()

console.log(process.env.AWS_ACCESS_KEY_ID)
console.log(process.env.AWS_SECRET_ACCESS_KEY)

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

router.post('/deleteProject/:id', (req, res) => {
  console.log(req.params)
  db.deleteProjects(req.params.id)
  .then(() => {
    res.redirect('/projects')
  })
})

router.post('/', upload.single('my-upload-field'),(req, res) => {
console.log(req.file)
res.send('hi')
return 
  var project = {
    title: req.body.projectName,
    description: req.body.projectDescription,
    category: req.body.category
    // image:req.file.location
  }
  console.log(project)
  db.addProject(project)
  .then (project => {
    res.redirect('/')
  })
})




module.exports = router
