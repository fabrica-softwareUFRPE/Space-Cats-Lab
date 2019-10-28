'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultasSchema extends Schema {
  up () {
    this.create('consultas', (table) => {
      table.integer('setor_id').unsigned().references('id').inTable('setores') 
      table.date("data").notNullable()
      table.string('idAnimal', 11).notNullable() // será inserido pelo usuário. Não temos cadastro de pacientes
      table.string('nome', 80).notNullable() // nome do animal
      table.string('especie', 40).notNullable() // vários valores
      table.string('area', 40).notNullable() // vários valores
      table.boolean('retorno', 20).notNullable() // recebe a string: sim/não
      table.string('tipoProc', 20).notNullable() // simples ou complexo
      table.string('tipoAnimal', 20).notNullable() // recebe a string: grande, pequeno ou silvestre
    })
  }

  down () {
    this.drop('consultas')
  }
}

module.exports = ConsultasSchema
