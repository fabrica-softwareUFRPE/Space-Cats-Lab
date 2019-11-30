'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(() => {
    Route.post('users/register', 'UserController.register').validator('StoreUser').middleware(['auth', 'is:!basico'])
    Route.put('/users/update/:id', 'UserController.update').middleware(['auth', 'is:!basico'])
    Route.get('users', 'UserController.indexUsers').middleware('auth')
})//.middleware('auth');


Route.post('/login', 'SessionController.login').validator('Login')

Route.patch('users/:id', 'UserController.destroy')

Route.get('users/setores/:id', 'UserController.indexSectorsOfUser')

Route.get('users/:id', 'UserController.show')

Route.post('setores/register', 'SectorController.register')

Route.get('setores/index', 'SectorController.index')

Route.group(() => {
    //! Rotas das predefinições
    Route.resource('planilhas/predefinicoes', 'PredefinicaoController').apiOnly().middleware('auth')

    //* Rotas do setor de Análises laboratoriais
    Route.resource('planilhas/analises', 'AnaliseController').apiOnly().validator(new Map([
        [['planilhas/analises.store'], ['Analises']],
        [['planilhas/analises.update'], ['Analises']]
      ]))
      
    //* Rotas do setor de Procedimentos Cirúrgicos
    Route.resource('planilhas/cirurgias', 'CirurgiaController').apiOnly().validator(new Map([
      [['planilhas/cirurgias.store'], ['Cirurgias']],
      [['planilhas/cirurgias.update'], ['Cirurgias']]
    ]))
    //* Rotas do setor de Procedimentos Anestesicos
    Route.resource('planilhas/anestesias', 'AnestesiaController').apiOnly().validator(new Map([
      [['planilhas/anestesias.store'], ['Anestesia']],
      [['planilhas/anestesias.update'], ['Anestesia']]
    ]))

    //* Rotas do setor de Consultas/Retornos
    Route.resource('planilhas/consultas', 'ConsultaController').apiOnly().validator(new Map([
      [['planilhas/consultas.store'], ['Consultas']],
      [['planilhas/consultas.update'], ['Consultas']]
    ]))
    //* Rotas do setor de Atendimentos externos a grandes animais
    Route.resource('planilhas/externos', 'ExternoController').apiOnly().validator(new Map([
      [['planilhas/externos.store'], ['Externos']],
      [['planilhas/externos.update'], ['Externos']]
    ]))
    //* Rotas do setor de Necropsias
    Route.resource('planilhas/necropsias', 'NecropsiaController').apiOnly().validator(new Map([
        [['planilhas/necropsias.store'], ['Necropsias']],
        [['planilhas/necropsias.update'], ['Necropsias']]
      ]))
    //* Rotas do setor de Diagnostico por imagem
    Route.resource('planilhas/diagnosticos', 'DiagnosticoController').apiOnly().validator(new Map([
      [['planilhas/diagnosticos.store'], ['Diagnosticos']],
      [['planilhas/diagnosticos.update'], ['Diagnosticos']]
    ]))

}).middleware('auth')