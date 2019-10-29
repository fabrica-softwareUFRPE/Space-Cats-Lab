'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnalisesSchema extends Schema {
  up () {
    this.create('analises', (table) => {
      table.increments()
      table.string('data').notNullable()
      table.string('ficha', 11).notNullable() // número identificador do animal
      table.string('nome', 80).notNullable()
      table.string('especie', 80).notNullable()
      table.string('procedimento', 80).notNullable() // procedimento laboratorial
      table.string('tipoProc', 80).notNullable() // procedimento simples ou complexo
      table.string('tipoAnalise', 80).notNullable() // Tipo da analise: Bacteriose, parasita ...
      table
        .integer('setor_id')
        .unique()
        .unsigned()
        .notNullable()
        //.references('id')
        //.inTable('setores')
    })
  }

  down () {
    this.drop('analises')
  }
}

module.exports = AnalisesSchema
