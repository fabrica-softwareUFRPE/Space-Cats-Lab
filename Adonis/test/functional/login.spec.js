'use strict'

const { test, trait } = use('Test/Suite')('Login')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('Deve gerar um token JWT', async ({ client, assert }) => {

  const user = await User.create({
    id: "3",
    username: "Matheus Mosca",
    email: "mosca@gmail.com",
    password: "1234@@dfdoaod69ee3"
  })

  const response = await client.post('/login').send({
    email: "mosca@gmail.com",
    password: "1234@@dfdoaod69ee3"
  }).end()

  response.assertStatus(200)
  assert.exists(response.body.token)
})
