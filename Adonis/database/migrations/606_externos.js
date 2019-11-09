'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExternosSchema extends Schema {
  up () {
    this.create('externos', (table) => {
      table.increments()
      table.date('data_proc').notNullable() // a data do procedimento
      table.string('animal_id', 11).notNullable()
      table.string('propriedade').notNullable()
      table.enu('dist_prop', ['Até 100km', '101 a 500km', 'Acima de 500km']).notNullable()
      table.enu('tipo_atendimento', ['rebanho', 'individual']).notNullable()

      table.enu('tipo_animal', ['pequeno', 'grande', 'silvestre']).notNullable() // recebe a string: grande, pequeno ou silvestre

      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
    })
  }

  down () {
    this.drop('externos')
  }
}

module.exports = ExternosSchema
