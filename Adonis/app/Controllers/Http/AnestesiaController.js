'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anestesia = use('App/Models/Anestesia')
const Database = use('Database')
const Predefinicao = use('App/Models/Predefinicao')

/**
 * Resourceful controller for interacting with anestesias
 */
class AnestesiaController {
  /**
   * Show a list of all anestesias.
   * GET anestesias
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
      .table('anestesias')
      .orderBy('id', 'cresc')
      .where('tipo_animal', tipo_animal)
      .forPage(page, 10) //! Buscando em grupos de 10
  
      return planilha

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }
  }

  /**
   * Create/save a new anestesia.
   * POST anestesias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {

    //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
    //TODO adicionar o campo criado_por  no request.except
    
    try {

      const { tecnicas, ...data } = request.except(["criado_por", 'criado_em', 'atualizado_por', 'atualizado_em']) 
      
      const bool = await Predefinicao.validaPredefinicoes(tecnicas, 'anestesias')
      
      if (await bool === true) {
        const tecnicas_string = tecnicas.join(", ")
        const planilha = await Anestesia.create({ tecnicas: tecnicas_string, criado_por: auth.user.id, ...data })
        return planilha
        
      } else {

        return response.status(400).send({ message: "Valores inválidos" })
      }
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }


  }

  /**
   * Display a single anestesia.
   * GET anestesias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

    try {

      const data = await Anestesia.findOrFail(params.id) //* capturando a planilha desejada
      return data

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }
  }
  /**
   * Update anestesia details.
   * PUT or PATCH anestesias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {

    //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
    //TODO retirar atualizado_por de request.except(...)
    
    try {
      
      const { tecnicas, ...data } = request.except(["atualizado_por", "tipo_animal", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const bool = await Predefinicao.validaPredefinicoes(tecnicas, 'anestesias')
      const planilha = await Anestesia.findOrFail(params.id) //* capturando a planilha desejada

      if (await bool === true) {
  
        const tecnicas_string = tecnicas.join(", ")
  
        planilha.merge({ tecnicas: tecnicas_string, atualizado_por: auth.user.id, ...data}) //* Faz a modificação na planilha
        await planilha.save()
      } else {
        return response.status(400).send({ message: "Valores inválidos" })
      }
        
    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos" })
    }

        
  }

  /**
   * Delete a anestesia with id.
   * DELETE anestesias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      
      const planilha = await Anestesia.findOrFail(params.id)
      await planilha.delete()

    } catch(error) {
      response.status(400).send({message: "valores inválidos"})
    }

  }

}

module.exports = AnestesiaController
