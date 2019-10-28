'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExternosSchema extends Schema {
  up () {
    this.create('externos', (table) => {
      table.increments()
      table.string('data').notNullabe()
      table.string('ficha',11).notNullabe()
      table.string('propriedade').notNullabe()
      table.string('distProp').notNullabe()
      table.string('tipoAtend').notNullabe()
      table
        .integer('setor_id')
        .notNullabe()
        .unique()
    })
  }

  down () {
    this.drop('externos')
  }
}

module.exports = ExternosSchema
