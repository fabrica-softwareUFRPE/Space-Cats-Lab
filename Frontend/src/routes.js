import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/LoginTest';
import TabelaFuncionario from './pages/TabelaAdmFunc';



export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/Login" exact component = {Login} />
            <Route path = "/" component = {TabelaFuncionario} />
        </BrowserRouter>
    );
}