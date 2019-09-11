const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProjects,
  getProjectCategory,
  addProject,
  deleteProjects
}


function getProjects (category, db = connection) {
  return db('projects')
  .where('category', category)
}

function getProjectCategory(id, db = connection) {
  return db ('projects')
  .where('id', id).select('category').first()
}

function addProject (project, db = connection) {
  return db('projects').insert(project)
}

function deleteProjects (id, db = connection) {
  return db('projects').where('id', id).del().returning('id')
}
