'use strict'

const Setor = use('App/Models/Setor')
const Database = use('Database')

class SectorController {
    async register({ request }) {
        const data = request.only(['nome'])

        const setor = await Setor.create(data)

        return setor
    }

    async index() {
        const setores = await Database.from('setores').pluck('nome') // retorna um array com a coluna 'nome' da tabela 'setores'

        return setores
    }

}

module.exports = SectorController
