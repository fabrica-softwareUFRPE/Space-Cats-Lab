'use strict'

const Externo = use('App/Models/Externo')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with externos
 */
class ExternoController {
  /**
   * Show a list of all externos.
   * GET externos
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
    .table('externos')
    .orderBy('id', 'cresc')
    .forPage(page, 10) //! Buscando em grupos de 10

    return planilha
  }

  /**
   * Create/save a new externo.
   * POST externos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    const data = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 

    const planilha = await Externo.create(data)

    return planilha
  }

  /**
   * Display a single externo.
   * GET externos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    const data = await Externo.findOrFail(params.id) //* capturando a planilha desejada

    return data
  }

  /**
   * Update externo details.
   * PUT or PATCH externos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    const data = request.except(["criado_por", "criado_em", "atualizado_por", "atualizado_em"])

    const planilha = await Externo.findOrFail(params.id) //* capturando a planilha desejada

    planilha.merge(data) //* Faz a modificação na planilha
    await planilha.save()
  }

  /**
   * Delete a externo with id.
   * DELETE externos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const planilha = await Externo.findOrFail(params.id)

    await planilha.delete()
  }
}

module.exports = ExternoController
