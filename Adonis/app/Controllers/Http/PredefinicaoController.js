'use strict'

const Predefinicao = use('App/Models/Predefinicao')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with predefinicaos
 */
class PredefinicaoController {
  /**
   * Show a list of all predefinicaos.
   * GET predefinicaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    try {
      const { setor } = request.only(['setor'])
  
      const predefinicoes = await Database
        .from('predefinicoes')
        .where('setor', setor)
        //.pluck('predefinicoes')
  
      return predefinicoes
      
    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos1" })
    }

  }

  /**
   * Create/save a new predefinicao.
   * POST predefinicaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    try {
      const data = request.only(['setor', 'palavra'])
  
      const predefinicao = await Predefinicao.create(data)
  
      return predefinicao

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos2" })
    }

  }

  /**
   * Display a single predefinicao.
   * GET predefinicaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    try {
      const predefinicao = await Predefinicao.findOrFail(params.id)
  
      return predefinicao

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos3" })
    }
  }

  /**
   * Update predefinicao details.
   * PUT or PATCH predefinicaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    try {
      const data = request.only(['palavra', 'setor'])
  
      const predefinicao = await Predefinicao.findOrFail(params.id)
  
      predefinicao.merge(data)
      
      await predefinicao.save()

    } catch(eror) {
      return response.status(400).send({ message: "Valores inválidos4" })
    }
  }

  /**
   * Delete a predefinicao with id.
   * DELETE predefinicaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      const predefinicao = await Predefinicao.findOrFail(params.id)
  
      await predefinicao.delete()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos5" })
    }

  }
}

module.exports = PredefinicaoController
