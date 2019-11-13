'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')
const Setor = use('App/Models/Setor')

trait('Test/ApiClient')

test('Create user', async ({ client }) => {


  const necropsias = await Setor.create({
    nome: "setor1"
  })
  
  const analises = await Setor.create({
    nome: "setor2"
  })

  const response = await client.post('/users/register').send({
    id: '1',
    username: 'Matheus Mosca',
    email: "mosca@gmail.com",
    password: "12345",
    setores: ["setor1", "setor2"]
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    id: '1',
    username: 'Matheus Mosca',
    email: "mosca@gmail.com"
  })
})
