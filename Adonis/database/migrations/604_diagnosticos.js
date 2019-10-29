'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiagnosticosSchema extends Schema {
  up () {
    this.create('diagnosticos', (table) => {
      table.increments()
      table.string('data').notNullable()
      table.string('ficha',11).notNullable()
      table.string('nome',80).notNullable()
      table.string('especie',80).notNullable()
      table.string('exame').notNullable()
      table.string('quantSimples').notNullable()
      table.string('quantComplexo').notNullable()
      table
        .integer('setor_id')
        .unsigned()
        .notNullable()
        .unique()
        //.references('id')
        //.inTable('setores')
    })
  }

  down () {
    this.drop('diagnosticos')
  }
}

module.exports = DiagnosticosSchema
