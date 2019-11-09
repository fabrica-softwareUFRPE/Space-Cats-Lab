'use strict'

const Consulta = use('App/Models/Consulta')
const Database = use('Database')

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
    const { page } = request.only(["page"]) 

    const planilha = await Database
    .table('consultas')
    .orderBy('id', 'cresc')
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

    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    const data = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 

    const planilha = await Consulta.create(data)

    return planilha
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

    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    const data = request.except(["criado_por", "criado_em", "atualizado_por", "atualizado_em"])

    const planilha = await Consulta.findOrFail(params.id) //* capturando a planilha desejada

    planilha.merge(data) //* Faz a modificação na planilha
    await planilha.save()
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
