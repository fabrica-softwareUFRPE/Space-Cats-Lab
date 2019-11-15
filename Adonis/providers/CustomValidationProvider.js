'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class CustomValidationProvider extends ServiceProvider {
  
   existsFn = async (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value) {
      /**
       * skip validation if value is not defined. `required` rule
       * should take care of it.
      */
      return
    }
  
    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()
  
    if (!row) {
      throw message
    }
  }  
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const Validator = use('Validator');

    Validator.extend('exists',this.existsFn.bind(this));
  }
}

module.exports = CustomValidationProvider
