'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Setor extends Model {
    static get table () {
        return 'setores'
      }

      users() {
        return this
        .belongsToMany(
            'App/Models/User',
            'setor_id',
            'user_id')
        .pivotTable('user_setores')
    }
    
}

module.exports = Setor
