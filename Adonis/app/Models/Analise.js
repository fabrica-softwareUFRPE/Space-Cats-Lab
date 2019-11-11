'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Analise extends Model {

    static get createdAtColumn () {
        return 'criado_em'
      }
  
    static get updatedAtColumn () {
      return 'atualizado_em'
    }
}

module.exports = Analise
