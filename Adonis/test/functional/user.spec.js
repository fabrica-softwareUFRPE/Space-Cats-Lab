 
'use strict'

const { test, trait, afterEach } = use('Test/Suite')('User')
const User = use('App/Models/User')
const Setor = use('App/Models/Setor')

trait('Test/ApiClient')
trait('Auth/Client')

afterEach(async () => {
  await Setor.query().delete()
  await User.query().delete()
})

test('Deve criar um usuário', async ({ client, auth }) => {

  const setor1 = await Setor.create({
    nome: "x"
  })
  
  const setor2 = await Setor.create({
    nome: "y"
  })

  const user1 = await User.create({
    id: "9",
    username: "maria",
    email: "maria@gmail.com",
    password: "123@@",
  })


  const response = await client.post('/users/register').loginVia(user1).send({

    id: "111",
    username: "matheus mosca",
    email: "matheus@gmail.com",
    password: "123@@",
    // criado_por: "123",
    setores: ["x", "y"]

  }).end()


  response.assertStatus(200)
  response.assertJSONSubset({
    id: "111",
    username: "matheus mosca",
    email: "matheus@gmail.com"
  })

  await Setor.query().delete()

})

test('Não deve criar usuário, pois não há permissão', async ({ client, auth }) => {

  const necropsias = await Setor.create({
    nome: "setor"
  })
  
  const response = await client.post('/users/register').send({
    id: '1',
    username: 'Matheus Mosca',
    email: "mosca@gmail.com",
    password: "12345",
    setores: ["setor"]
  }).end()

  response.assertStatus(401) // Não autorizado
  
})



test('Deve desativar um usuário', async ({ client, auth, assert }) => {

  const necropsias = await Setor.create({
    nome: "setor1"
  })

  const user1 = await User.create({
    id: "20",
    username: "matheus",
    email: "matheus@gmail.com",
    password: "123",
    criado_por: "1",
    status: "ativo"
  })
  
  const response = await client.patch('/users/20').send({
    // id: '20',
    // username: 'matheus',
    // email: "matheus@gmail.com",
    // password: "123",
    // setores: ["setor1"]
    status: "inativo"
  }).end()

  const user2 = await User.findBy('id', 20)
  response.assertStatus(204) // No content
  assert.equal(user2.status, 'inativo')
  // response.assertJSONSubset({
  //   id: "20",
  //   nome: "matheus",
  //   email: "matheus@gmail.com",
  //   password: "123",
  //   criado_por: "1",
  //   status: "inativo"
  // })

  
})