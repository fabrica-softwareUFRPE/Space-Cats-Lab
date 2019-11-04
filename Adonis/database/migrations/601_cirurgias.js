'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CirurgiasSchema extends Schema {
  up () {
    this.create('cirurgias', (table) => {
      table.increments() 
      table.date('data_proc').notNullable() // a data do procedimento
      table.string('animal_id', 11).notNullable() // id_animal será inserido pelo usuário. Não temos cadastro de pacientes
      table.string('nome', 80).notNullable() // nome do animal
      table.string('especie', 40).notNullable() // vários valores
      // procedimentos cicurgicos vai para tabela tipos_cirurgias pois é 1 x N
      table.string('quant_simples', 40).notNullable() // quantidade de procedimentos simples
      table.string('quant_cmplexos', 40).notNullable() // quantidade de procedimentos complexos
      
      table.string('tipo_animal', 20).notNullable() // recebe a string: grande, pequeno ou silvestre
      
      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
    })
  }

  down () {
    this.drop('cirurgias')
  }
}

module.exports = CirurgiasSchema
