'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CirurgiasSchema extends Schema {
  up () {
    this.create('cirurgias', (table) => {
      table.timestamps() // identifica a data e hora da ultima alteração 
      table.date('data') // a data da realização da consulta
      table.string('animal_id', 11).notNullable() // id_animal será inserido pelo usuário. Não temos cadastro de pacientes
      table.string('nome', 80).notNullable() // nome do animal
      table.string('especie', 40).notNullable() // vários valores
      table.string('Procedimentos', 40).notNullable() // vários valores
      table.string('QuantSimples', 40).notNullable() // quantidade de procedimentos simples
      table.string('QuantComplexos', 40).notNullable() // quantidade de procedimentos complexos
      table.string('tipoAnimal', 20).notNullable() // recebe a string: grande, pequeno ou silvestre
      table.string('user_id').references('id').inTable('users') // chave estrangeira // identifica quem fez a inserção
    })
  }

  down () {
    this.drop('cirurgias')
  }
}

module.exports = CirurgiasSchema
