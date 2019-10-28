'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultasSchema extends Schema {
  up () {
    this.create('consultas', (table) => { 
      table.timestamps() // identifica a data e hora da ultima alteração 
      table.date('data') // a data da realização da consulta
      table.string('animal_id', 11).notNullable() // id_animal será inserido pelo usuário. Não temos cadastro de pacientes
      table.string('nome', 80).notNullable() // nome do animal
      table.string('especie', 40).notNullable() // vários valores
      table.string('area', 40).notNullable() // vários valores
      table.boolean('retorno', 20).notNullable() // recebe a string: sim/não
      table.string('tipoProc', 20).notNullable() // simples ou complexo
      table.string('tipoAnimal', 20).notNullable() // recebe a string: grande, pequeno ou silvestre
      table.string('user_id').references('id').inTable('users') // chave estrangeira // identifica quem fez a inserção
    })
  }

  down () {
    this.drop('consultas')
  }
}

module.exports = ConsultasSchema
