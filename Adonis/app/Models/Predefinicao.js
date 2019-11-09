'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Predefinicao extends Model {

    static get table () {
        return 'predefinicoes'
      }

    static get createdAtColumn () {
        return false
    }
  
    static get updatedAtColumn () {
        return false
    }
}

module.exports = Predefinicao
