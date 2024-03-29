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

    //* Não vamos listar todas as linhas da planilha de uma só vez
    //* Para isto, vamos utilizar paginação
    //* O atributo page nos fornece a numeração da página atual (1, 2, 3 ...)

    try {
      
      const { page, tipo_animal } = request.only(["page", "tipo_animal"]) 
  
      const planilha = await Database
      .table('cirurgias')
      .orderBy('id', 'cresc')
      .where('tipo_animal', tipo_animal)
      .forPage(page, 10) //! Buscando em grupos de 10
  
      return planilha

    } catch(error) {

      return response.status(400).send({ message: "Valor inválido" })
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
  async store ({ request, response }) {

    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    //TODO adicionar o campo criado_por  no request.except
    
    try {

      const { procedimentos, ...data } = request.except(['criado_em', 'atualizado_por', 'atualizado_em']) 
      
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, 'cirurgias')
      
      if (await bool === true) {
        const procedimentos_string = procedimentos.join(", ")
        const planilha = await Cirurgia.create({ procedimentos: procedimentos_string, ...data })
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
  async update ({ params, request, response }) {

    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    //TODO retirar atualizado_por de request.except(...)
    
    try {
      
      const { procedimentos, ...data } = request.except(["tipo_animal", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const bool = await Predefinicao.validaPredefinicoes(procedimentos, 'cirurgias')
      const planilha = await Cirurgia.findOrFail(params.id) //* capturando a planilha desejada

      if (await bool === true) {
  
        const procedimentos_string = procedimentos.join(", ")
  
        planilha.merge({ procedimentos: procedimentos_string, ...data}) //* Faz a modificação na planilha
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
      response.status(400).send({message: "Dados inválidos"})
    }

  }

}

module.exports = CirurgiaController
