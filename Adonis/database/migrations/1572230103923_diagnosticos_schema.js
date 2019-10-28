'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiagnosticosSchema extends Schema {
  up () {
    this.create('diagnosticos', (table) => {
      table.increments()
      table.string('data').notNullabe()
      table.string('ficha',11).notNullabe()
      table.string('nome',80).notNullabe()
      table.string('especie',80).notNullabe()
      table.string('exame').notNullabe()
      table.string('quantSimples').notNullabe()
      table.string('quantComplexo').notNullabe()
      table
        .integer('setor_id')
        .notNullabe()
        .unique()
    })
  }

  down () {
    this.drop('diagnosticos')
  }
}

module.exports = DiagnosticosSchema
