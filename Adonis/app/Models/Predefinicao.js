'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Predefinicao extends Model {

    constructor() {
        super()
    }

    static get table () {
        return 'predefinicoes'
      }

    static get createdAtColumn () {
        return false
    }
  
    static get updatedAtColumn () {
        return false
    }

    //* verifica se a predefinição (palavra) está cadastrada no setor (setor_pred)
    //* Retorna um booleano
    static async validaPredefinicao (palavra, setor_pred) {
        
        const predefinicao =  await Predefinicao.findBy('palavra', palavra) //* captura a predefinição

        //* A predefinição existe?
        if ( await (predefinicao) === undefined || await (predefinicao) === null) { 
      
            return false

            //* O setor desta predefinição corresponde com o desejado (setor_pred) ?
          } else if ( await (predefinicao.setor) === setor_pred) {
            
            return true

            //* A predefinição existe, mas o seu setor não é o desejado
          } else {

            return false
          }
    }
}

module.exports = Predefinicao
