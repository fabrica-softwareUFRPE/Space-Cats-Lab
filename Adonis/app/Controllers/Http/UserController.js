'use strict'

const User = use('App/Models/User')
const Sector = use('App/Models/Sector')
//const Database = use('Database')

class UserController {

    async register({ request }) {
      const { sectors } = request.all()

      const sectors_ids = []
      
      for (let i = 0; i < sectors.length; i++) {
        const sec = await Sector.findBy('name', sectors[i]) // Pegando o setor no banco de dados
        sectors_ids.push(sec.id) // colocando o id do setor no array
      }
      
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)
        user.sectors().attach(sectors_ids)

        return user
    }

    async indexUsers() {
      const users = await User.query().with('sectors').fetch()

      return users
    }

    async indexSectorsOfUser({ params }) {
      const user = await User.findOrFail(params.id) // capturando usuário

      const sectors = await user.sectors().fetch() // capturando os setores do usuário

      return sectors
    }

    async show({ params }) {
      const user = await User.findOrFail(params.id)

      await user.loadMany(['sectors'])

      return user
    }

}

module.exports = UserController
