'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnestesiaSchema extends Schema {
  up () {
    this.create('anestesias', (table) => {
      table.increments()
      table.string('data').notNullable()
      table.string('ficha', 11).notNullable() // número identificador do animal
      table.string('nome', 80).notNullable()
      table.string('especie', 80).notNullable()
      table.string('tecnica', 80).notNullable() // técnica anestésica
      table.string('tipoProc', 80).notNullable() // procedimento simples ou composto
      table.string('tipoAnimal', 80).notNullable() 
      table
        .integer('setor_id')
        .notNullable()
        .unique()
    })
  }

  down () {
    this.drop('anestesias')
  }
}

module.exports = AnestesiaSchema
