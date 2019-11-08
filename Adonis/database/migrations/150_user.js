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
      table.string('nivel').notNullable().defaultTo('basico') // administrador, supervisor, basico
      
      // o setor do usuário fica na tabela user_setores
      
      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
      
      table.string('status').defaultTo('ativo') // ativo, inativo...

    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
