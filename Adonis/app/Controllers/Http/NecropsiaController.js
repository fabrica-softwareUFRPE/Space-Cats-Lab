'use strict'

const Necropsia = use('App/Models/Necropsia')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with necropsias
 */
class NecropsiaController {
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
    
    try {
      const { page } = request.only(["page"]) 
  
      const planilha = await Database
      .table('necropsias')
      .orderBy('id', 'cresc')
      .forPage(page, 10) //! Buscando em grupos de 10
  
      return planilha

    } catch(erro) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }

  /**
   * Create/save a new necropsia.
   * POST necropsias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    try {
      //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
      const data = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 
  
      const planilha = await Necropsia.create({ criado_por: auth.user.id, ...data})
  
      return planilha

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
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

    try {
      const data = await Necropsia.findOrFail(params.id) //* capturando a planilha desejada
  
      return data

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }

  /**
   * Update necropsia details.
   * PUT or PATCH necropsias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {

    try {
      //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
      const data = request.except(["criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const planilha = await Necropsia.findOrFail(params.id) //* capturando a planilha desejada
  
      planilha.merge({ atualizado_por: auth.user.id, ...data}) //* Faz a modificação na planilha
      await planilha.save()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
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

    try {
      const planilha = await Necropsia.findOrFail(params.id)
  
      await planilha.delete()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }
}

module.exports = NecropsiaController
