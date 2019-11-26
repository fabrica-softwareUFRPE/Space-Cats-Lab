'use strict'

class Consultas {
      
  get validateAll () {
    return true
  }
  
  get sanitizationRules () {
    return {
      data_proc:'trim',
      animal_id:'trim',
      nome:'trim',
      especie:'trim',
      area:'trim',
      tipo_proc:'trim',
      caso_novo:'trim',
      retorno:'trim'
    }
  }

  get rules () {
    return {
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      nome:'required|alpha',
      especie:'required|alpha',
      area:'required', 
      tipo_proc:'required|alpha',
      caso_novo:'required',
      retorno:'required',
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
      'area.required':'9',
      'tipo_proc.required':'10',
      'tipo_proc.alpha':'11',
      'caso_novo.required':'12',
      'retorno.required':'13',
    }
  }
}

module.exports = Consultas
