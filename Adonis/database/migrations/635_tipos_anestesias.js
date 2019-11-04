'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposAnestesiasSchema extends Schema {
  up () {
    this.create('tipos_anestesias', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.integer('tipo').unsigned().references('id').inTable('anestesias')
    })
  }

  down () {
    this.drop('tipos_anestesias')
  }
}

module.exports = TiposAnestesiasSchema
