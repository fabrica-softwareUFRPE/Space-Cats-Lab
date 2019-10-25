'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      
      table.increments()
      
      table.string('username', 80).notNullable().unique()
      
      table.string('email', 254).notNullable().unique()
      
      table.string('password', 60).notNullable()
      
      table.string('cpf', 11).notNullable().unique().primary() // adiciona o CPF - que é o ID do user - Chave primária.
      
      table.integer('nivel').notNullable().defaultTo(1) // O nível do usuário (1, 2 ou 3)
      
      // setor é chave estrangeira. 1000 provavelmente é muito.
      // referencia id (do setor) na tabela userSetor
      table.string('userSetor', 1000).references('id').inTable(userSetor).onUpdate("CASCADE"); 
      
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
