exports.up = (knex, Promise) => {
    return knex.schema.createTable('projects', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('category')
      table.string('role')
      table.string('tools')
      table.string('image')

    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('projects')
  }
  