'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NecropsiasSchema extends Schema {
  up () {
    this.create('necropsias', (table) => {
      table.increments()
      table.string('data').notNullable()
      table.string('ficha', 11).notNullable() // número identificador do animal
      table.string('nome', 80).notNullable()
      table.string('especie', 80).notNullable()
      table.string('peso').notNullable() // peso até 100kg?
      table
        .integer('setor_id')
        .unique()
        .unsigned()
        .notNullable()
       // .references('id')
       // .inTable('setores')
    })
  }

  down () {
    this.drop('necropsias')
  }
}

module.exports = NecropsiasSchema
