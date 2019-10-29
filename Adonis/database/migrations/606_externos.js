'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExternosSchema extends Schema {
  up () {
    this.create('externos', (table) => {
      table.increments()
      table.string('data').notNullable()
      table.string('ficha',11).notNullable()
      table.string('propriedade').notNullable()
      table.string('distProp').notNullable()
      table.string('tipoAtend').notNullable()
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
    this.drop('externos')
  }
}

module.exports = ExternosSchema
