import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/LoginTest';
import TabelaFuncionario from './pages/TabelaAdmFunc';
import Home from './pages/Home';
import ManageUsers from './pages/TableGerenciarUsersTest';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = {Login} />
            <Route path = "/home" component = {Home} />
            <Route path = "/table" component = {TabelaFuncionario} />
            <Route path = "/tableusers" component = {ManageUsers} />
        </BrowserRouter>
    );
}