'use strict'

class Login {
      
  get validateAll () {
    return true
  }
  
  get rules () {
    return {
    // validation rules
     //email: 'required|email|exists:user,email',
     email: 'required|email',
      password: 'required',
    }
  }
  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.exists': 'This email does not.',
      'password.required': 'You must provide a password'
    }
  }
}

module.exports = Login
