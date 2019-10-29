'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposExamesSchema extends Schema {
  up () {
    this.create('tipos_exames', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.integer('tipo').unsigned().references('id').inTable('cirurgias')
    })
  }

  down () {
    this.drop('tipos_exames')
  }
}

module.exports = TiposExamesSchema
