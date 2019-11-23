import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/LoginTest';
import TabelaFuncionario from './pages/TabelaAdmFunc';
import Home from './pages/Home';
import ManageUsers from './pages/TableGerenciarUsersTest';
import TabelaPlanilhaAdm from './pages/TabelaP.Anestésicos P. Porte';
import TabelaConsultaPeq from './pages/TabelaPConsultaRetornoPeq';
import TabelaConsultaGra from './pages/TabelaPConsultaRetornoGra';
import TabelaConsultaSil from './pages/TabelaPConsultaRetornoSil';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = {Login} />
            <Route path = "/home" component = {Home} />
            <Route path = "/table" component = {TabelaFuncionario} />
            <Route path = "/tableusers" component = {ManageUsers} />
            <Route path = "/tableplan" component = {TabelaPlanilhaAdm} />
            <Route path = "/tableConsultaPeq" component = {TabelaConsultaPeq}/>
            <Route path = "/tableConsultaGra" component = {TabelaConsultaGra}/>
            <Route path = "/tableConsultaSil" component = {TabelaConsultaSil}/>
        </BrowserRouter>
    );
}
