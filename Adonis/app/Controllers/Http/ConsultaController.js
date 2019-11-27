'use strict'

const Consulta = use('App/Models/Consulta')
const Database = use('Database')
const Predefinicao = use('App/Models/Predefinicao')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with consultas
 */
class ConsultaController {
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

    try {
      
      const { tipo_animal } = request.only(["tipo_animal"]) 
  
      const planilha = await Database
      .table('consultas')
      .orderBy('id', 'cresc')
      .where('tipo_animal', tipo_animal)
  
      return planilha

    } catch(error) {

      return response.status(400).send({ message: "Valores inválidos"})
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
      
      const { area } = request.only(["area"])
      //! estes campos não são preenchidos pelo usuário: criado_em, atualizado_por ...
      const data = request.except(["criado_por", 'area','criado_em', 'atualizado_por', 'atualizado_em']) 
  
      const bool = await Predefinicao.validaUmaPredefinicao(area, 'consultas')
      
      if (await bool === true) {
  
        const planilha = await Consulta.create({ area: area, criado_por: auth.user.id, ...data })
        return planilha
        
      } else {
        return response.status(400).send({ message: "Valores inválidos" })
      }

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
      
      const data = await Consulta.findOrFail(params.id) //* capturando a planilha desejada
  
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
      
      const { area } = request.only(["area"])
      //! estes campos não são atualizados pelo usuário: criado_em, atualizado_por ...
      const data = request.except(["atualizado_por", "tipo_animal", "criado_por", "criado_em", "atualizado_por", "atualizado_em"])
  
      const planilha = await Consulta.findOrFail(params.id) //* capturando a planilha desejada
    
      const bool = await Predefinicao.validaUmaPredefinicao(area, 'consultas')
  
      if (await bool === true) {
  
        await (planilha).merge({ atualizado_por: auth.user.id, ...data }) //* Faz a modificação na planilha
        await planilha.save()
        
      } else {
  
        return response.status(400).send({ message: "Valores inválidos" })
      }

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
      
      const planilha = await Consulta.findOrFail(params.id)
  
      await planilha.delete()

    } catch(error) {
      return response.status(400).send({ message: "Valores inválidos" })
    }
  }
}

module.exports = ConsultaController
