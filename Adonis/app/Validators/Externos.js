'use strict'

class Externos {
      
  get validateAll () {
    return true
  }
  
  get sanitizationRules () {
    return {
      data_proc:'trim',
      animal_id: 'trim',
      propiedade:'trim',
      dist_prop:'trim',
      tipo_atendimento:'trim'  
    }
  }

  get rules () {
    return {
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      propriedade:'required',
      dist_prop:'required',
      tipo_atendimento:'required|alpha',
      
    }
  }

  get messages () {
    return {
      'data_proc.required':'1',
      'data_proc.date':'2',
      'animal_id.required':'3',
      'animal_id.regex':'4',
      'propriedade.required':'5',
      'dist_prop.required':'6',
      'tipo_atendimento.required':'7',
      'tipo_atendimento.alpha':'8',
    
    }
  }
}


module.exports = Externos
