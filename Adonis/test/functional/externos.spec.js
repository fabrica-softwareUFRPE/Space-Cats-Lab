'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Externos')
const Externo = use('App/Models/Externo')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

afterEach(async () => {
  await Externo.query().delete()
})

test('Deve criar planilha de atendimentos externos', async ({ client }) => {

  const user = await Factory
    .model('App/Models/User')
    .create()
    
    
  const { data_proc, animal_id, propriedade, dist_prop, tipo_atendimento } = await Factory
    .model('App/Models/Externo')
    .create()

const response = await client.post('/planilhas/externos').loginVia(user).send({
  data_proc,
  animal_id,
  propriedade,
  dist_prop,
  tipo_atendimento
}).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    data_proc,
    animal_id,
    propriedade,
    dist_prop,
    tipo_atendimento 
  })

})


test('Deve listar a planilha de atendimentos externos', async ({ client }) => {

  const user = await Factory
    .model('App/Models/User')
    .create()
    
    
  const { data_proc, animal_id, propriedade, dist_prop, tipo_atendimento } = await Factory
    .model('App/Models/Externo')
    .create()

  const planilha2 = await Externo.create({
    data_proc: "2018-11-10",
    animal_id: "10",
    propriedade: "outro lugar",
    dist_prop: "Acima de 500km",
    tipo_atendimento: "individual"
  })


  const response = await client.get('/planilhas/externos').loginVia(user).send({
    
    page: 1
    
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    data_proc,
    animal_id,
    propriedade,
    dist_prop,
    tipo_atendimento,
  }, {
    data_proc: "2018-11-10",
    animal_id: "10",
    propriedade: "outro lugar",
    dist_prop: "Acima de 500km",
    tipo_atendimento: "individual"
  }])

})

test('Deve atualizar uma planilha', async ({ client, assert }) => {

  const user = await Factory
    .model('App/Models/User')
    .create()
    
  const planilha1 = await Factory
    .model('App/Models/Externo')
    .create()

  const { id } = planilha1

  const response = await client.put(`/planilhas/externos/${id}`).loginVia(user).send({

    data_proc: "2017-10-09",
    animal_id: "3",
    propriedade: "outro lugar",
    dist_prop: "Acima de 500km",
    tipo_atendimento: "individual"

  }).end()

  const planilha = await Externo.find(id)

  response.assertStatus(204) // NO CONTENT
  assert.equal(planilha.data_proc, "2017-10-09")
  assert.equal(planilha.animal_id, "3")
  assert.equal(planilha.propriedade, "outro lugar")
  assert.equal(planilha.dist_prop, "Acima de 500km")
  assert.equal(planilha.tipo_atendimento, "individual")
})


test('Deve deletar uma linha de uma planilha', async ({ client, assert }) => {

  const user = await Factory
  .model('App/Models/User')
  .create()
  
  
  const { id } = await Factory
  .model('App/Models/Externo')
  .create()

  const response = await client.delete(`/planilhas/externos/${id}`).loginVia(user).send().end()

  const planilha = await Externo.find(id)

  response.assertStatus(204) // NO CONTENT
  assert.isNull(planilha)

})

test('Deve retornar uma linha de uma planilha', async ({ client, assert }) => {

  const user = await Factory
  .model('App/Models/User')
  .create()
  
  const { id, data_proc, animal_id, propriedade, dist_prop, tipo_atendimento } = await Factory
    .model('App/Models/Externo')
    .create()

  const response = await client.get(`/planilhas/externos/${id}`).loginVia(user).send().end()

  response.assertStatus(200) // NO CONTENT
  response.assertJSONSubset({
    data_proc,
    animal_id,
    propriedade,
    dist_prop,
    tipo_atendimento,
  })

})


