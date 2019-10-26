'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSectorSchema extends Schema {
  up () {
    this.create('user_sectors', (table) => {
      table.increments()
      table
        .integer('user_id')
        .notNullable()
      table
        .integer('sector_id')
        .notNullable()  
      table.timestamps()
    })
  }

  down () {
    this.drop('user_sectors')
  }
}

module.exports = UserSectorSchema
