'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// São 5 setores de análises laboratoriais. Devido a terem uma estrutura semenhante, vão estar na mesma tabela
// uma chave estrangeira vai diferenciá-los.

class AnalisesSchema extends Schema {
  up () {
    this.create('analises', (table) => {
      table.increments()
      table.date('data_proc').notNullable() // a data do procedimento
      table.string('animal_id', 11).notNullable() // número identificador do animal
      table.string('nome', 80).notNullable()
      table.string('especie', 80).notNullable()
     // os procedimentos laboratoriais estão na tabela tipos_proc_lab por ser atributo multivalorado
      table.string('quant_simples', 40).notNullable() // quantidade de procedimentos simples
      table.string('quant_complexos', 40).notNullable() // quantidade de procedimentos complexos
      
      table.enu('tipo_animal', ['pequeno', 'grande', 'silvestre']).notNullable() // recebe a string: grande, pequeno ou silvestre

      table.integer('setor_id').unsigned().references('id').inTable('setores') // chave estrangeira identifica o setor: Bacteriose, parasita ...

      // para rastrear a autoria
      table.string('criado_por', 11).references('id').inTable('users') // chave estrangeira //cpf de quem fez a inserção
      table.date('criado_em').notNullable() // data da inserção
      table.string('atualizado_por').references('id').inTable('users') // data em que algum valor da linha foi alterado
      table.date('atualizado_em') // data em que algum valor da linha foi alterado // notNullable() não foi inserido de propósito
    })
  }

  down () {
    this.drop('analises')
  }
}

module.exports = AnalisesSchema
