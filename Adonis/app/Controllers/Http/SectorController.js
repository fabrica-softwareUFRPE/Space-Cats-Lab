'use strict'

const Sector = use('App/Models/Sector')

class SectorController {
    async register({ request }) {
        const data = request.only(['name'])

        const sector = await Sector.create(data)

        return sector
    }

}

module.exports = SectorController
