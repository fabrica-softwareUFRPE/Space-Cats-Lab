import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Login from './LoginTest';
import TabelaFuncionario from './TabelaAdmFunc';
import Home from './Home';
import ManageUsers from './TableGerenciarUsersTest';
import TabelaAnestesicoPeq from './TabelaAnestesicoPeq';
import TabelaAnestesicoGra from './TabelaAnestesicoGra';
import TabelaAnestesicoSil from './TabelaAnestesicoSil';
import TabelaConsultaPeq from './TabelaPConsultaRetornoPeq';
import TabelaConsultaGra from './TabelaPConsultaRetornoGra';
import TabelaConsultaSil from './TabelaPConsultaRetornoSil';
import TabelaAnalisesLabBac from './TabelaAnalisesLabBac';
import TabelaAnalisesLabPar from './TabelaAnalisesLabPar';
import TabelaAnalisesLabPatCli from './TabelaAnalisesLabPatCli';
import TabelaAnalisesLabPatVet from './TabelaAnalisesLabPatVet'; 
import TabelaAnalisesLabRep from './TabelaAnalisesLabRep';
import TabelaAtendiGra from './TabelaPAtendiExtAGraAnimais';
import TabelaProcediDiagImagem from './TabelaPProcediDiagImagem';
import TabelaNecropsias from './TabelaPNecropsias';
import TabelaCirurgiaGrande from './TabelaPProcedimentoCirurgicoGra';
import TabelaCirurgiaPequeno from './TabelaPProcedimentoCirurgicoPeq';
import TabelaCirurgiaSilvestre from './TabelaPProcedimentoCirurgicoSil';
import pdf from './imprimirtabela';


export default function Routes(){
    return (
      
            <Routess path = "/" exact component = {Login} isPrivate />
            <Route path = "/home" exact component = {Home} isPrivate />
            <Route path = "/table" exact component = {TabelaFuncionario} isPrivate />
            <Route path = "/tableusers" exact component = {ManageUsers} isPrivate />
            <Route path = "/tableAnestesicoPeq" exact component = {TabelaAnestesicoPeq} />
            <Route path = "/tableAnestesicoGra" exact component = {TabelaAnestesicoGra} />
            <Route path = "/tableAnestesicoSil" exact component = {TabelaAnestesicoSil} />             
            <Route path = "/tableAnalisesLabBac" exact component = {TabelaAnalisesLabBac} />
            <Route path = "/tableAnalisesLabPar"exact component = {TabelaAnalisesLabPar} />
            <Route path = "/tableAnalisesLabPatCli" exact component = {TabelaAnalisesLabPatCli} />   
            <Route path = "/tableAnalisesLabPatVet" exact component = {TabelaAnalisesLabPatVet} />
            <Route path = "/tableAnalisesLabRep"  exact component = {TabelaAnalisesLabRep} />                 
            <Route path = "/tableConsultaPeq" exact component = {TabelaConsultaPeq}/>
            <Route path = "/tableConsultaGra" exact component = {TabelaConsultaGra}/>
            <Route path = "/tableConsultaSil" exact component = {TabelaConsultaSil}/>
            <Route path = "/tableAtendimentoExterno" exact component = {TabelaAtendiGra}/>
            <Route path = "/tableProcedimentoImagem" exact component = {TabelaProcediDiagImagem}/>
            <Route path = "/tableNecropsias"exact component ={TabelaNecropsias}/>
            <Route path = "/tableCirurgiaGrande" exact component = {TabelaCirurgiaGrande}/>
            <Route path = "/tableCirurgiaPequeno" exact component = {TabelaCirurgiaPequeno}/>
            <Route path = "/tableCirurgiaSilvestre" exact component = {TabelaCirurgiaSilvestre}/>
            <Route path = "/pdf" exact component = {pdf}/>
        
       
    );
}