'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {

    static get traits () {
      return [
        '@provider:Adonis/Acl/HasRole',
        '@provider:Adonis/Acl/HasPermission'
      ]
    }

    static get primaryKey () {
      return 'id'
    }

    static get incrementing () {
      return false
    }

    static get createdAtColumn () {
      return 'criado_em'
    }

    static get updatedAtColumn () {
      return 'atualizado_em'
    }

    static verificaCriador(user_logado, user_alvo, nivel) {

      if (user_logado.nivel === 'administrador') {
        return true

      } else if ( (user_logado.id === user_alvo.criado_por) && (user_logado.nivel === 'supervisor') && (nivel === 'basico') && (user_alvo.nivel === 'basico') ) {
        return true

      } else {
        return false
      }

    }

    setores() {
      return this
      .belongsToMany(
        'App/Models/Setor',
        'user_id',
        'setor_id')
      .pivotTable('user_setores')
  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
