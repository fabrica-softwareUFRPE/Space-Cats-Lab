'use strict'

class Necropsias {
      
  get validateAll () {
    return true
  }
  
  get sanitizationRules () {
    return {
      data_proc:'trim',
      animal_id: 'trim',
      nome:'trim',
      especie:'trim',
      peso:'trim'
    }
  }

  get rules () {
    return {
      // validation rules
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      nome:'required|alpha',
      especie:'required|alpha',
      peso:'required|alpha',
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
      'peso.required':'9',
      'peso.alpha':'10',

    }
  }
}

module.exports = Necropsias
