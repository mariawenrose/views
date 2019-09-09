const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getProjects: getProjects,
  addProject: addProject,
  deleteProjects: deleteProjects
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProjects (category, db = connection) {
  return db('projects')
  .where('category', category)
}

function addProject (project, db = connection) {
  return db('projects').insert(project)
}

function deleteProjects (id, db = connection) {
  return db('projects').where('id', id).del()
}
