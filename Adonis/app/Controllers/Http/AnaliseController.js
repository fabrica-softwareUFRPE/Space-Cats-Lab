'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Analise = use('App/Models/Analise')
const Database = use('Database')
const Predefinicao = use('App/Models/Predefinicao')

/**
 * Resourceful controller for interacting with analises
 */
class AnaliseController {
  /**
   * Show a list of all analises.
   * GET analises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    //* Não vamos listar todas as linhas da planilha de uma só vez
    //* Para isto, vamos utilizar paginação
    //* O atributo page nos fornece a numeração da página atual (1, 2, 3 ...)

    try {
      
      const { page, analise_tipo } = request.only(["page", "analise_tipo"]) 
  
      const planilha = await Database
      .table('analises')
      .orderBy('id', 'cresc')
      .where('analise_tipo', analise_tipo)
      .forPage(page, 10) //! Buscando em grupos de 10
  
      return planilha

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos1" })
    }

  }
  /**
   * Create/save a new analise.
   * POST analises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    //TODO adicionar o campo criado_por  no request.except
    try {

      const { procedimentos, ...data } = request.except(['criado_por', 'criado_em', 'atualizado_por', 'atualizado_em']) 
      
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, data.analise_tipo)
      
      if (await bool === true) {
        const procedimentos_string = procedimentos.join(", ")
        const planilha = await Analise.create({ procedimentos: procedimentos_string, criado_por: auth.user.id, ...data })
        return planilha
        
      } else {

        return response.status(400).send({ message: "Valores inválidos2" })
      }
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos3" })
    }

  }

  /**
   * Display a single analise.
   * GET analises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    try {

      const data = await Analise.findOrFail(params.id) //* capturando a planilha desejada
      return data

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos4" })
    }

  }
  /**
   * Update analise details.
   * PUT or PATCH analises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {

    //TODO retirar atualizado_por de request.except(...)
    try {
      
      const { procedimentos, analise_tipo, ...data } = request.except(["atualizado_por", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, analise_tipo)
      const planilha = await Analise.findOrFail(params.id) //* capturando a planilha desejada

      if (await bool === true) {
  
        const procedimentos_string = procedimentos.join(", ")
  
        planilha.merge({ procedimentos: procedimentos_string,atualizado_por: auth.user.id , ...data}) //* Faz a modificação na planilha
        await planilha.save()
      } else {
        return response.status(400).send({ message: "Valores inválidos5" })
      }
        
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos6" })
    }

  }

  /**
   * Delete a analise with id.
   * DELETE analises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      
      const planilha = await Analise.findOrFail(params.id)
      await planilha.delete()

    } catch(error) {
      response.status(400).send({message: "valores inválidos7"})
    }

  }
}

module.exports = AnaliseController
