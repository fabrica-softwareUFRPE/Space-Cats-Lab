'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sector extends Model {
    
    users() {
        return this
        .belongsToMany(
            'App/Models/User',
            'sector_id',
            'user_id')
        .pivotTable('user_sectors')
    }
}

module.exports = Sector
