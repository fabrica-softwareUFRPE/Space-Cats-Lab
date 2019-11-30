'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Adonis/Acl/Role')

class RoleSeeder {
  async run () {

    const admin = new Role()
    admin.name = 'administrador'
    admin.slug = 'administrador'
    await admin.save()

    const supervisor = new Role()
    supervisor.name = 'supervisor'
    supervisor.slug = 'supervisor'
    await supervisor.save()
    
    const basico = new Role()
    basico.name = 'basico'
    basico.slug = 'basico'
    await basico.save()

  }
}

module.exports = RoleSeeder
