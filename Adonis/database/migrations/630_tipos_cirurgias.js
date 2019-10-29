'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposCirurgiasSchema extends Schema {
  up () {
    this.create('tipos_cirurgias', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.integer('tipo').unsigned().references('id').inTable('cirurgias')
    })
  }

  down () {
    this.drop('tipos_cirurgias')
  }
}

module.exports = TiposCirurgiasSchema
