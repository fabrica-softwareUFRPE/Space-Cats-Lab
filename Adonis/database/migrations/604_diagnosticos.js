'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiagnosticosSchema extends Schema {
  up () {
    this.create('diagnosticos', (table) => {
      table.increments()
      table.date('data_proc').notNullable() // a data do procedimento
      table.string('animal_id',11).notNullable()
      table.string('nome',80).notNullable()
      table.string('especie',80).notNullable()
      table.string('exame',80).notNullable()
      table.string('quant_simples', 40).notNullable() // quantidade de procedimentos simples
      table.string('quant_complexos', 40).notNullable() // quantidade de procedimentos complexos

      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
    })
  }

  down () {
    this.drop('diagnosticos')
  }
}

module.exports = DiagnosticosSchema
