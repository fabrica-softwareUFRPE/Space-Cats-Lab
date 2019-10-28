'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.string('id', 11).primary() // será o cpf 
      table.string('username', 80).notNullable() // nome completo do usuário.
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('nivel').notNullable().defaultTo(1) // O nível do usuário (1, 2 ou 3), Nível 1 por padrão
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
