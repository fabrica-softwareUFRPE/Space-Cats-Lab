'use strict'

const Setor = use('App/Models/Setor')

class SectorController {
    async register({ request }) {
        const data = request.only(['nome'])

        const setor = await Setor.create(data)

        return setor
    }

}

module.exports = SectorController
