import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/LoginTest';
import TabelaFuncionario from './pages/TabelaAdmFunc';
import Home from './pages/Home';
import ManageUsers from './pages/TableGerenciarUsersTest';
import TabelaAnestesicoPeq from './pages/TabelaAnestesicoPeq';
import TabelaAnestesicoGra from './pages/TabelaAnestesicoGra';
import TabelaAnestesicoSil from './pages/TabelaAnestesicoSil';
import TabelaConsultaPeq from './pages/TabelaPConsultaRetornoPeq';
import TabelaConsultaGra from './pages/TabelaPConsultaRetornoGra';
import TabelaConsultaSil from './pages/TabelaPConsultaRetornoSil';
import TabelaAnalisesLabBac from './pages/TabelaAnalisesLabBac';
import TabelaAnalisesLabPar from './pages/TabelaAnalisesLabPar';
import TabelaAnalisesLabPatCli from './pages/TabelaAnalisesLabPatCli';
import TabelaAnalisesLabPatVet from './pages/TabelaAnalisesLabPatVet'; 
import TabelaAnalisesLabRep from './pages/TabelaAnalisesLabRep';
import TabelaAtendiGra from './pages/TabelaPAtendiExtAGraAnimais';
import TabelaProcediDiagImagem from './pages/TabelaPProcediDiagImagem';
import TabelaNecropsias from './pages/TabelaPNecropsias';
import TabelaCirurgiaGrande from './pages/TabelaPProcedimentoCirurgicoGra';
import TabelaCirurgiaPequeno from './pages/TabelaPProcedimentoCirurgicoPeq';
import TabelaCirurgiaSilvestre from './pages/TabelaPProcedimentoCirurgicoSil';
import pdf from './pages/imprimirtabela';


export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = {Login} />
            <Route path = "/home" component = {Home} isPrivate />
            <Route path = "/table" component = {TabelaFuncionario} isPrivate />
            <Route path = "/tableusers" component = {ManageUsers} isPrivate />
            <Route path = "/tableAnestesicoPeq" component = {TabelaAnestesicoPeq} />
            <Route path = "/tableAnestesicoGra" component = {TabelaAnestesicoGra} />
            <Route path = "/tableAnestesicoSil" component = {TabelaAnestesicoSil} />             
            <Route path = "/tableAnalisesLabBac" component = {TabelaAnalisesLabBac} />
            <Route path = "/tableAnalisesLabPar" component = {TabelaAnalisesLabPar} />
            <Route path = "/tableAnalisesLabPatCli" component = {TabelaAnalisesLabPatCli} />   
            <Route path = "/tableAnalisesLabPatVet" component = {TabelaAnalisesLabPatVet} />
            <Route path = "/tableAnalisesLabRep" component = {TabelaAnalisesLabRep} />                 
            <Route path = "/tableConsultaPeq" component = {TabelaConsultaPeq}/>
            <Route path = "/tableConsultaGra" component = {TabelaConsultaGra}/>
            <Route path = "/tableConsultaSil" component = {TabelaConsultaSil}/>
            <Route path = "/tableAtendimentoExterno" component = {TabelaAtendiGra}/>
            <Route path = "/tableProcedimentoImagem" component = {TabelaProcediDiagImagem}/>
            <Route path = "/tableNecropsias" component ={TabelaNecropsias}/>
            <Route path = "/tableCirurgiaGrande" component = {TabelaCirurgiaGrande}/>
            <Route path = "/tableCirurgiaPequeno" component = {TabelaCirurgiaPequeno}/>
            <Route path = "/tableCirurgiaSilvestre" component = {TabelaCirurgiaSilvestre}/>
            <Route path = "/pdf" component = {pdf}/>
        </BrowserRouter>
    );
}