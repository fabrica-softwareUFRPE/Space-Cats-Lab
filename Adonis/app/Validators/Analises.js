'use strict'

class Analises {
  get rules () {
    return {
      // validation rules
      data_proc:'required|date',
      animal_id:'required|integer',
      nome:'required|alpha',
      especie:'required|alpha',
      procedimentos:'required|alpha',
      quant_simples:'required|integer',
      quant_complexos:'required|integer',
      analise_tipo:'required|alpha',
      criado_por:'required',
    }
  }
  get messages () {
    return {
      'data_proc.required':'1',
      'data_proc.date':'2',
      'animal_id.required':'3',
      'animal_id.integer':'4',
      'nome.required':'5',
      'nome.alpha':'6',
      'especie.required':'7',
      'especie.alpha':'8',
      'procedimentos.required':'9',
      'procedimentos.alpha':'10',
      'quant_simples.required':'11',
      'quant_simples.integer':'12',
      'quant_complexos.required':'13',
      'quant_complexos.integer':'14',
      'analise_tipo.required':'15',
      'analise_tipo.alpha':'16',
      'criado_por.required':'17',

    }
  }
}

module.exports = Analises
