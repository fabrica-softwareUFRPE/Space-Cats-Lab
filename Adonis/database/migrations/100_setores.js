'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetoresSchema extends Schema {
  up () {
    this.create('setores', (table) => {
     // apenas esses dois atributos são necessários: id e nome.
     table.increments() 
     table.string('nome', 40).notNullable().unique()
    })
  }

  down () {
    this.drop('setores')
  }
}

module.exports = SetoresSchema
