'use strict'
//*Validação do register
class StoreUser {
      
  get validateAll () {
    return true
  }
  
  get rules () {
    return {
      // validation rules
      id:'required|unique:users ',
      username:'required  ',
      email: 'required|email|unique:users ',
      password: 'required',
      setores:'required'
    }
  }

  get messages () {
    return {
      'id.required':'You must provide a id.',
      'id.unique':'This id is already registered.',
      'username.required':'You must provide a username.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'setores.required': 'You must provide a setor',
    }
  }
}

module.exports = StoreUser
