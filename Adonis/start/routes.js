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
    Route.post('users/register', 'UserController.register').validator('StoreUser')
}).middleware('auth');

Route.post('/login', 'SessionController.login').validator('Login')

Route.get('users', 'UserController.indexUsers')

Route.get('users/setores/:id', 'UserController.indexSectorsOfUser')

Route.get('users/:id', 'UserController.show')

Route.post('setores/register', 'SectorController.register')

Route.get('setores/index', 'SectorController.index')

//! Rotas das predefinições
Route.group(() => {
    Route.resource('planilhas/predefinicoes', 'PredefinicaoController').apiOnly()
})

//! Rotas do setor de Diagnostico por imagem
Route.group(() => {
    Route.resource('planilhas/diagnosticos', 'DiagnosticoController').apiOnly()
})

//! Rotas do setor de Necropsias
Route.group(() => {
    Route.resource('planilhas/necropsias', 'NecropsiaController').apiOnly()
})

//! Rotas do setor de Atendimentos externos a grandes animais
Route.group(() => {
    Route.resource('planilhas/externos', 'ExternoController').apiOnly()
})

//! Rotas do setor de Consultas/Retornos
Route.group(() => {
    Route.resource('planilhas/consultas', 'ConsultaController').apiOnly()
})

//! Rotas do setor de Procedimentos Anestesicos
Route.group(() => {
    Route.resource('planilhas/anestesias', 'AnestesiaController').apiOnly()
})
