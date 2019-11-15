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

    const { setor } = request.only(['setor'])

    const predefinicoes = await Database
      .from('predefinicoes')
      .where('setor', setor)
      //.pluck('predefinicoes')

    return predefinicoes
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

    const data = request.only(['setor', 'palavra'])

    const predefinicao = await Predefinicao.create(data)

    return predefinicao
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

    const predefinicao = await Predefinicao.findOrFail(params.id)

    return predefinicao
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

    const data = request.only(['palavra', 'setor'])

    const predefinicao = await Predefinicao.findOrFail(params.id)

    predefinicao.merge(data)
    
    await predefinicao.save()
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

    const predefinicao = await Predefinicao.findOrFail(params.id)

    await predefinicao.delete()
  }
}

module.exports = PredefinicaoController
