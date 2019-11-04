'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnestesiaSchema extends Schema {
  up () {
    this.create('anestesias', (table) => {
      table.increments()
      table.date('data_proc').notNullable() // a data do procedimento
      table.string('animal_id', 11).notNullable() // id_animal será inserido pelo usuário. Não temos cadastro de pacientes
      table.string('nome', 80).notNullable() // nome do animal
      table.string('especie', 40).notNullable() // vários valores
      // as tecnicas anestésicas estão na tabela tipos_anestesias pois é atributo multivalorado
      table.string('tipo_proc', 80).notNullable() // procedimento simples ou complexo
      
      table.string('tipo_animal', 80).notNullable() // recebe a string: grande, pequeno ou silvestre
      
      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
    })
  }

  down () {
    this.drop('anestesias')
  }
}

module.exports = AnestesiaSchema
