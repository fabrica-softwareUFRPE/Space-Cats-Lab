'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ValidarCpfProvider extends ServiceProvider {

  async validarCpfFn(data, field, message, args, get) {

    const value = get(data, field)
    const validarCpf = require('validar-cpf');
    if (!validarCpf(value)) throw message;
  }

  boot() {
    const Validator = use('Validator');

    Validator.extend('validarCpf', this.validarCpfFn.bind(this));
  }

}

module.exports = ValidarCpfProvider
