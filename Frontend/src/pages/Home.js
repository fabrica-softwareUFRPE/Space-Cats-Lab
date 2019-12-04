/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Home.css';
import SideBar from './SideBarRoutes'

export default function Home( { history } ) {
    function exitFunction (e) {
        history.push('/');
    }

    function tabelaUsers(e){

        history.push('/tableUsers')
    }

    function consultaGrande(e){
        history.push('/tableConsultaGra')
    }

    function consultaSilvestre(e){
        history.push('/tableConsultaSil');
    }

    function consultaPequeno (e) {

        history.push('/tableConsultaPeq');    
    }

    function ProceImagem (e) {

        history.push('/tableProcedimentoImagem');
    }

    function cirurgiaGrande (e) {

        history.push('/tableCirurgiaGrande');
    }

    function cirurgiaPequeno (e) {

        history.push('/tableCirurgiaPequeno');
    }

    function cirurgiaSilvestre (e) {

        history.push('/tableCirurgiaSilvestre');
    }

    function anestesiaPequeno (e){
        history.push('/tableAnestesicoPeq')
    }
    function anestesiaGrande (e){
        history.push('/tableAnestesicoGra')
    }
    function anestesiaSilvestre (e){
        history.push('/tableAnestesicoSil')
    }

    function necropsias (e){
        history.push('/tableNecropsias')
    }

    function analisesLabBac(e){
        history.push('/tableAnalisesLabBac')
    }

    function analisesLabPar(e){
        history.push('/tableAnalisesLabPar')
    }

    function analisesLabPatCli(e){
        history.push('/tableAnalisesLabPatCli')
    }

    function analisesLabPatVet(e){
        history.push('/tableAnalisesLabPatVet')
    }

    function analisesLabRep(e){
        history.push('/tableAnalisesLabRep')
    }

    function atendimentoExt(e){
        history.push('/tableAtendimentoExterno')
    }

    return(
        <div className="pageHome">
            <div className="sideBar">
                <div className="headDiv">
                    <center><p>SAC-FORDHOV<br/>Hospital Veterinário UFRPE</p></center>
                    <p>USERNAME</p>
                </div>
                <div className="naviDiv">
                    <ul>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton1" onClick={tabelaUsers}>Gerenciar Usuários</button></li>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                            <li><button className="naviButton" id="naviButton2">Consultas e Retornos</button>
                                <ul>
                                    <li><button className="naviButtonCascade" onClick={consultaPequeno} >para Pequenos Animais</button></li>
                                    <li><button className="naviButtonCascade" onClick={consultaGrande} >para Grandes Animais</button></li>
                                    <li><button className="naviButtonCascade" onClick={consultaSilvestre} >para Animais Silvestres</button></li>
                                </ul>
                            </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton3">Diagnóstico por Imagem</button></li>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                            <li><button className="naviButton" id="naviButton4">Procedimentos Cirúrgicos</button>
                                <ul>
                                    <li><button className="naviButtonCascade"onClick={cirurgiaPequeno}>em Pequenos Animais</button></li>
                                    <li><button className="naviButtonCascade"onClick={cirurgiaGrande}>em Grandes Animais</button></li>
                                    <li><button className="naviButtonCascade"onClick={cirurgiaSilvestre}>em Animais Silvestres</button></li>
                                </ul>
                            </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                        <li><button className="naviButton" id="naviButton5">Procedimentos Anestésicos</button>
                            <ul>
                                <li><button className="naviButtonCascade"onClick={anestesiaPequeno}>em Pequenos Animais</button></li>
                                <li><button className="naviButtonCascade"onClick={anestesiaGrande}>em Grandes Animais</button></li>
                                <li><button className="naviButtonCascade"onClick={anestesiaSilvestre}>em Animais Silvestres</button></li>
                            </ul>
                        </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                        <li><button className="naviButton" id="naviButton6">Análises Laboratoriais</button>
                            <ul>
                                <li><button className="naviButtonCascade"onClick={analisesLabBac}>Bacteriose/Virose/Micológico</button></li>
                                <li><button className="naviButtonCascade"onClick={analisesLabPar}>Parasitas</button></li>
                                <li><button className="naviButtonCascade"onClick={analisesLabPatCli}>Patologia Clínica</button></li>
                                <li><button className="naviButtonCascade"onClick={analisesLabPatVet}>Patologia Veterinária</button></li>
                                <li><button className="naviButtonCascade"onClick={analisesLabRep}>Reprodução</button></li>
                            </ul>
                        </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton7" onClick={necropsias}>Necropsias</button></li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton8" onClick={atendimentoExt}>Atendimentos Externos <br></br>a Grandes Animais</button></li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton9">Imprimir Relatório Mensal</button></li>
                        <li><div className="naviLine"/></li>
                    </ul>
                </div>
                <div className="exitDiv">
                    <button id="exitButton" onClick={exitFunction}>Sair</button>
                </div>
            </div>
        </div>
    );
}