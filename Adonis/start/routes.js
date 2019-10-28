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

Route.post('users/register', 'UserController.register')

Route.post('/login', 'SessionController.login')

Route.get('users', 'UserController.indexUsers')

Route.get('users/setores/:id', 'UserController.indexSectorsOfUser')

Route.get('users/:id', 'UserController.show')

Route.post('setores/register', 'SectorController.register')

Route.get('setores/index', 'SectorController.index')



