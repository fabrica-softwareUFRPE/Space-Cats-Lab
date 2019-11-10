'use strict'

const Consulta = use('App/Models/Consulta')
const Database = use('Database')
const Predefinicao = use('App/Models/Predefinicao')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with consultas
 */
class ConsultaController {
    /**
   * Show a list of all necropsias.
   * GET necropsias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    //* Não vamos listar todas as linhas da planilha de uma vez só
    //* Para isto, vamos utilizar paginação
    //* O atributo page nos fornece a numeração da página atual (1, 2, 3 ...)
    const { page, tipo_animal } = request.only(["page", "tipo_animal"]) 

    const planilha = await Database
    .table('consultas')
    .orderBy('id', 'cresc')
    .where('tipo_animal', tipo_animal)
    .forPage(page, 10) //! Buscando em grupos de 10

    return planilha
  }

  /**
   * Create/save a new necropsia.
   * POST necropsias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const { area } = request.only(["area"])
    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    const data = request.except(['area','criado_em', 'atualizado_por', 'atualizado_em']) 

    const predefinicao = await Predefinicao.findBy('palavra', area)

    if ( await (predefinicao) === undefined || await (predefinicao) === null) {
      
      return response.status(400).send({ message: "Valor inválido" })

    } else if (await (predefinicao.setor) === 'consultas') {
      
      const planilha = await Consulta.create({ area: area, ...data })
      return planilha

    } else {
      return response.status(400).send({ message: "Valor inválido" })
    }

  }

  /**
   * Display a single necropsia.
   * GET necropsias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    const data = await Consulta.findOrFail(params.id) //* capturando a planilha desejada

    return data
  }

  /**
   * Update necropsia details.
   * PUT or PATCH necropsias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const { area } = request.only(["area"])
    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    const data = request.except(["tipo_animal", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])

    const predefinicao = await Predefinicao.findBy('palavra', area)
    const planilha = await Consulta.findOrFail(params.id) //* capturando a planilha desejada
    
    if ( await (predefinicao) === undefined || await (predefinicao) === null) {
      
      return response.status(400).send({ message: "Valor inválido" })

    } else if (await (predefinicao.setor) === 'consultas') {
      
      await (planilha).merge(data) //* Faz a modificação na planilha
      await planilha.save()

    } else {
      return response.status(400).send({ message: "Valor inválido" })
    }
    

  }

  /**
   * Delete a necropsia with id.
   * DELETE necropsias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const planilha = await Consulta.findOrFail(params.id)

    await planilha.delete()
  }
}

module.exports = ConsultaController
