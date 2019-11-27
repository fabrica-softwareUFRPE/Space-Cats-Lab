'use strict'

const User = use('App/Models/User')
const Setor = use('App/Models/Setor')
//const Database = use('Database')

class UserController {

    async register({ request }) {
      const { setores } = request.all()

      const setores_ids = []
      
      for (let i = 0; i < setores.length; i++) {
        const set = await Setor.findBy('nome', setores[i]) // Pegando o setor no banco de dados
        setores_ids.push(set.id) // colocando o id do setor no array
      }
      
        const data = request.only(['username', 'email', 'password', 'id', 'nivel'])

        const user = await User.create(data)
        user.setores().attach(setores_ids)

        return user
    }

    async indexUsers({ response }) {

      try {
        const users = await User.query().with('setores').fetch()
  
        return users

      } catch(error) {
        return response.status(400).send({ message: "Valores inválidos" })
      }
    }

    async indexSectorsOfUser({ params, response }) {
      const user = await User.findOrFail(params.id) // capturando usuário

      const setores = await user.setores().fetch() // capturando os setores do usuário

      return setores
    }

    async show({ params, response }) {

      try {
        const user = await User.findOrFail(params.id)
  
        await user.loadMany(['setores'])
  
        return user

      } catch(error) {
        return response.status(400).send({ message: "Valores inválidos" })
      }
      
    }

    async update({ params, request, auth, response }) {

      try {
        const user = await User.findOrFail(params.id)
  
        const { setores, ...data } = request.except(['criado_por', 'criado_em', 'atualizado_em', 'atualizado_por'])
  
        const setores_ids = []
        
        for (let i = 0; i < setores.length; i++) {
          const set = await Setor.findBy('nome', setores[i]) // Pegando o setor no banco de dados
          setores_ids.push(set.id) // colocando o id do setor no array
        }
  
        user.merge({ atualizado_por: auth.user.id, ...data }) //* Faz a modificação na planilha
  
        await user.setores().detach()
        await user.setores().attach(setores_ids)
  
        
        // await user.setores().saveMany(setores_ids)
        
        await user.save()

      } catch(error) {
        return response.status(400).send({ message: "Valores inválidos" })
      }

    }
    async destroy({ params, response }) {

      try {
        const user = await User.findOrFail(params.id)
  
        user.merge({ status: 'inativo'})
  
        await user.save()

      } catch(error) {
        return response.status(400).send({ message: "Valores inválidos" })
      }

    }

}

module.exports = UserController
