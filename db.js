const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getProjects: getProjects,
  addProject: addProject
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProjects (db = connection) {
  return db('projects')
  .where('category', 'design')
}

function addProject (project, db = connection) {
  return db('projects').insert(project)
}

// function deleteUser (project db = connection)
//