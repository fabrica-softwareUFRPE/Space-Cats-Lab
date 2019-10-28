'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SectorSchema extends Schema {
  up () {
    this.create('sectors', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('sectors')
  }
}

module.exports = SectorSchema
