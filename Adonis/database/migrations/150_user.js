'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.string('id', 11).primary() // chave primária será o cpf 
      table.string('username', 80).notNullable() // nome completo do usuário.
      table.string('email', 254).notNullable().unique() 
      table.string('password', 60).notNullable()
      table.string('nivel').notNullable().defaultTo(1) // administrador, supervisor, basico
      table.date('criado_em').notNullable() // data do cadastro
      table.string('criado_por', 11) // cpf de quem criou
      table.date('atualizado_em') // data em que algum valor da linha foi alterado
      table.string('status') // ativo, inativo...
      // o setor do usuário fica na tabela user_setores*/
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
