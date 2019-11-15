'use strict'

const { test, trait } = use('Test/Suite')('Setor')
const Setor = use('App/Models/Setor')

trait('Test/ApiClient')

test('Deve criar um setor', async ({ client }) => {

  const response = await client.post('/setores/register').send({
    nome: "Necropsias"
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    nome: "Necropsias"
  })

})
