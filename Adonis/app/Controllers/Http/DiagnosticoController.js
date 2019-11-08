'use strict'

const Diagnostico = use('App/Models/Diagnostico')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with diagnosticos
 */
class DiagnosticoController {
  /**
   * Show a list of all diagnosticos.
   * GET diagnosticos
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
    .table('diagnosticos')
    .orderBy('id', 'cresc')
    .forPage(page, 10) //! Buscando em grupos de 10

    return planilha
  }

  /**
   * Render a form to be used for creating a new diagnostico.
   * GET diagnosticos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async store ({ request, response }) {

    //! estes campos não são preenchidos pelo usuário (criado_em, atualizado_por ...)
    const data = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 

    const planilha = await Diagnostico.create(data)

    return planilha
  }

  /**
   * Display a single diagnostico.
   * GET diagnosticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    const data = await Diagnostico.findOrFail(params.id) //* capturando a planilha desejada

    return data
  }

  /**
   * Render a form to update an existing diagnostico.
   * GET diagnosticos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 
  async update ({ params, request, response }) {

    //! estes campos não são atualizados pelo usuário (criado_em, atualizado_por ...)
    const data = request.except(["criado_por", "criado_em", "atualizado_por", "atualizado_em"])

    const planilha = await Diagnostico.findOrFail(params.id) //* capturando a planilha desejada

    planilha.merge(data) //* Faz a modificação na planilha
    await planilha.save()

    //return planilha
  }

  /**
   * Delete a diagnostico with id.
   * DELETE diagnosticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
    const planilha = await Diagnostico.findOrFail(params.id)

    await planilha.delete()
  }
}

module.exports = DiagnosticoController
