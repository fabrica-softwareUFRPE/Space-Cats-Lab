'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSetoresSchema extends Schema {
  up () {
    this.create('user_setores', (table) => { // relaciona os usuários com seus setores, relação 1 x N
      table.increments() // chave primária 'id'
      table
        .string('user_id', 11)
        .notNullable()
        .references('id')
        .inTable('users') 
      table
      .integer('setor_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('setores') // unsigned() é essencial
      table.timestamps()
    })
  }

  down () {
    this.drop('user_setores')
  }
}

module.exports = UserSetoresSchema
