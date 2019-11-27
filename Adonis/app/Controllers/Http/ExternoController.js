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

    try {
      const planilha = await Database
      .table('externos')
      .orderBy('id', 'cresc')
  
      return planilha

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }

  /**
   * Create/save a new externo.
   * POST externos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    try {
      //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
      const data = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 
  
      const planilha = await Externo.create({ criado_por: auth.user.id, ...data })
  
      return planilha

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
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

    try {
      const data = await Externo.findOrFail(params.id) //* capturando a planilha desejada
  
      return data

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }

  /**
   * Update externo details.
   * PUT or PATCH externos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {

    try {
      //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
      const data = request.except(["criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const planilha = await Externo.findOrFail(params.id) //* capturando a planilha desejada
  
      planilha.merge({ atualizado_por: auth.user.id, ...data }) //* Faz a modificação na planilha
      await planilha.save()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
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

    try {
      const planilha = await Externo.findOrFail(params.id)
  
      await planilha.delete()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }
}

module.exports = ExternoController
