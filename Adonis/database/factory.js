'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    id: faker.cpf()
  }
})

Factory.blueprint('App/Models/Externo', (faker, i, data) => {
  return {
    data_proc: faker.date({ string: true }),
    animal_id: faker.string({ length: 11 }),
    propriedade: faker.city(),
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho"
  }
})

