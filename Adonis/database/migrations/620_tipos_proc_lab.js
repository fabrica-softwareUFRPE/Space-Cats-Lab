'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposProcLabSchema extends Schema {
  up () {
    this.create('tipos_proc_labs', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.integer('tipo').unsigned().references('id').inTable('analises')
    })
  }

  down () {
    this.drop('tipos_proc_labs')
  }
}

module.exports = TiposProcLabSchema
