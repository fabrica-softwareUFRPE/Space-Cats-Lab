'use strict'

class Externos {
  get rules () {
    return {
      data_proc:'required|date',
      animal_id: 'required|regex:^[0-9]+$', 
      propiedade:'required|alpha',
      dist_prop:'required|alpha',
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
      'propriedade.alpha':'6',
      'dist_prop.required':'7',
      'dist_prop.alpha':'8',
      'tipo_atendimento.required':'9',
      'tipo_atendimento.alpha':'10',
    
    }
  }
}


module.exports = Externos
