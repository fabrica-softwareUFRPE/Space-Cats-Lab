'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cirurgia = use('App/Models/Cirurgia')
const Database = use('Database')
const Predefinicao = use('App/Models/Predefinicao')

/**
 * Resourceful controller for interacting with cirurgias
 */
class CirurgiaController {
  /**
   * Show a list of all cirurgias.
   * GET cirurgias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    try {
      const { tipo_animal } = request.only(["tipo_animal"]) 
  
      const planilha = await Database
      .table('cirurgias')
      .orderBy('id', 'cresc')
      .where('tipo_animal', tipo_animal)
  
      return planilha

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }

  }
  /**
   * Create/save a new cirurgia.
   * POST cirurgias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    //TODO adicionar o campo criado_por  no request.except
    
    try {

      const { procedimentos, ...data } = request.except(["criado_por", 'criado_em', 'atualizado_por', 'atualizado_em']) 
      
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, 'cirurgias')
      
      if (await bool === true) {
        const procedimentos_string = procedimentos.join(", ")
        const planilha = await Cirurgia.create({ procedimentos: procedimentos_string, criado_por: auth.user.id, ...data })
        return planilha
        
      } else {

        return response.status(400).send({ message: "Valores inválido" })
      }
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }

  }

  /**
   * Display a single cirurgia.
   * GET cirurgias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    try {

      const data = await Cirurgia.findOrFail(params.id) //* capturando a planilha desejada
      return data

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }

  }
  /**
   * Update cirurgia details.
   * PUT or PATCH cirurgias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {

    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    //TODO retirar atualizado_por de request.except(...)
    
    try {
      
      const { procedimentos, ...data } = request.except(["atualizado_por", "tipo_animal", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, 'cirurgias')
      const planilha = await Cirurgia.findOrFail(params.id) //* capturando a planilha desejada

      if (await bool === true) {
  
        const procedimentos_string = procedimentos.join(", ")
  
        planilha.merge({ procedimentos: procedimentos_string, atualizado_por: auth.user.id, ...data}) //* Faz a modificação na planilha
        await planilha.save()
      } else {
        return response.status(400).send({ message: "Valores inválidos" })
      }
        
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }


  }

  /**
   * Delete a cirurgia with id.
   * DELETE cirurgias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      
      const planilha = await Cirurgia.findOrFail(params.id)
      await planilha.delete()

    } catch(error) {
      response.status(400).send({message: "valores inválidos"})
    }

  }

}

module.exports = CirurgiaController
