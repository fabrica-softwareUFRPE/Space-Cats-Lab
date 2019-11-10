'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Predefinicao extends Model {

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
    static async validaUmaPredefinicao (palavra, setor_pred) {
        
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
    
    static async validaPredefinicoes (array_de_palavras, setor_pred) {

        const valor_repetido = [... new Set(array_de_palavras)] //! eXtreme Go Horse ATIVADO

        //! eXtreme Go Horse ATIVADO
        if (array_de_palavras.length !== valor_repetido.length) {
            return false
        }

        //! eXtreme Go Horse ATIVADO
        if (array_de_palavras.length === 0) {
            return false
        }

        let booleano = true
        //* Necessário entendimento de PROMISES
        const map = await Promise.all(array_de_palavras.map(async (palavra) => {
            let pred = await Predefinicao.findBy('palavra', palavra) //* capturando predefinição

            if (await (pred) === undefined || await (pred) === null || await (pred.setor) !== setor_pred) {

                //* Predefinição inexistente ou setor incorreto
                booleano = false
            }
            return pred
        }))

        return booleano

    }

}

module.exports = Predefinicao
