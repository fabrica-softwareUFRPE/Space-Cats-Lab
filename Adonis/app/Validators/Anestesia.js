'use strict'

class Anestesia {
    
  get validateAll () {
    return true
  }

  get sanitizationRules () {
    return {
      data_proc:'trim',
      animal_id: 'trim',
      nome:'trim',
      especie:'trim',
      tecnicas:'trim',
      tipo_proc:'trim',
      tipo_animal:'trim'
    }
  }
  
  get rules () {
    return {
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      nome:'required|alpha',
      especie:'required|alpha',
      tecnicas:'required|alpha', //talvez array?
      tipo_proc:'required|alpha',
      tipo_animal:'required|alpha',
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
      'tecnicas.required':'9',
      'tecnicas.alpha':'10',
      'tipo_proc.required':'11',
      'tipo_proc.alpha':'12',
      'tipo_animal.required':'13',
      'tipo_animal.alpha':'14',
    }
  }
}

module.exports = Anestesia
