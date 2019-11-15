'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// relaciona uma string a uma coluna de tabela de setor

class PredefinicoesSchema extends Schema {
  up () {
    this.create('predefinicoes', (table) => {
      table.increments()
      table.string('palavra', 80).notNullable().unique()
      table.enu('setor', ['consultas', 'cirurgias', 'anestesias', 'diagnosticos', 'bacteriose', 'parasitas', 'patologia_clinica', 'patologia_veterinaria', 'reproduçao']).notNullable()
      //table.integer('coluna').notNullable()  
      //table.integer('tabela_id').unsigned().references('id').inTable('setores')
      //table.unique(['palavra', 'coluna', 'tabela_id']) // garante uma combinação única
    })
  }

  down () {
    this.drop('predefinicoes')
  }
}

module.exports = PredefinicoesSchema
