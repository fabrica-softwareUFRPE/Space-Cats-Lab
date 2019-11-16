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
  data_proc: data_proc,
  animal_id: animal_id,
  propriedade: propriedade,
  dist_prop: dist_prop,
  tipo_atendimento: tipo_atendimento
}).end()

  // console.log(planilha)
  // console.log("planilha")
  // console.log("planilha")
  // console.log("planilha")
  // console.log("planilha")
  // console.log(response)


  response.assertStatus(200)
  response.assertJSONSubset({
    data_proc,
    animal_id,
    propriedade,
    dist_prop,
    tipo_atendimento 
  })

  console.log(user)

})


test('Deve listar a planilha de atendimentos externos', async ({ client }) => {

  const planilha1 = await Externo.create({
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  })
  
  const planilha2 = await Externo.create({
    data_proc: "2018-11-10",
    animal_id: "10",
    propriedade: "outro lugar",
    dist_prop: "Acima de 500km",
    tipo_atendimento: "individual",
    criado_por: "2"
  })


  const response = await client.get('/planilhas/externos').send({
    
    page: 1
    
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  }, {
    data_proc: "2018-11-10",
    animal_id: "10",
    propriedade: "outro lugar",
    dist_prop: "Acima de 500km",
    tipo_atendimento: "individual",
    criado_por: "2"
  }])

})

test('Deve atualizar uma planilha', async ({ client, assert }) => {

  const planilha1 = await Externo.create({
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  })

  const { id } = planilha1

  // console.log(planilha1)

  const response = await client.put(`/planilhas/externos/${id}`).send({

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
  assert.equal(planilha.criado_por, "1")

})


test('Deve deletar uma linha de uma planilha', async ({ client, assert }) => {

  const planilha1 = await Externo.create({
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  })

  const { id } = planilha1

  const response = await client.delete(`/planilhas/externos/${id}`).send().end()

  const planilha = await Externo.find(id)

  response.assertStatus(204) // NO CONTENT
  assert.isNull(planilha)

})

test('Deve retornar uma linha de uma planilha', async ({ client, assert }) => {

  const planilha1 = await Externo.create({
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  })

  const { id } = planilha1

  const response = await client.get(`/planilhas/externos/${id}`).send().end()

  // const planilha = await Externo.find(id)

  response.assertStatus(200) // NO CONTENT
  response.assertJSONSubset({
    data_proc: "2019-11-10",
    animal_id: "2",
    propriedade: "algum lugar",
    dist_prop: "Até 100km",
    tipo_atendimento: "rebanho",
    criado_por: "1"
  })

})


