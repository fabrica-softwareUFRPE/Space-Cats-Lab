'use strict'

class Diagnosticos {
  get rules () {
    return {
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      nome:'required', 
      especie:'required',
      exames:'required|array',
      quant_simples:'required|regex:^[0-9]+$',
      quant_complexos:'required|regex:^[0-9]+$',
    }
  }
  get messages () {
    return {
      'data_proc.required':'1',
      'data_proc.date':'2',
      'animal_id.required':'3',
      'animal_id.regex':'4',
      'nome.required':'5',
      'nome.alpha':'6',
      'especie.required':'7',
      'especie.alpha':'8',
      'exames.required':'9',
      'exames.array':'10',
      'quant_simples.required':'11',
      'quant_simples.regex':'12',
      'quant_complexos.required':'13',
      'quant_complexos.regex':'14',
    }
  }
}

module.exports = Diagnosticos
