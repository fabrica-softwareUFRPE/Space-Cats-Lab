/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Home.css';

export default function Home( { history }) {
    function exitFunction (e) {
        history.push('/');
    }

    return(
        <div className="pageHome">
            <div className="sideBar">
                <div className="headDiv">
                    <p><center>SAC-FORDHOV<br/>Hospital Veterinário UFRPE</center></p>
                    <p>USERNAME</p>
                </div>
                <div className="naviDiv">
                    <ul>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton1">Gerenciar Usuários</button></li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton2">Consultas e Retornos</button>
                            <ul>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">para Pequenos Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">para Grandes Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">para Animais Silvestres</button></li>
                                <li><div className="naviLine"/></li>
                            </ul>
                        </li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton3">Diagnóstico por Imagem</button></li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton4">Procedimentos Cirúrgicos</button>
                            <ul>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                                <li><div className="naviLine"/></li>
                            </ul>
                        </li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton5">Procedimentos Anestésicos</button>
                            <ul>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                                <li><div className="naviLine"/></li>
                            </ul>
                        </li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton6">Análises Laboratoriais</button>
                            <ul>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">Bacteriose/Virose/Micológico</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">Parasitas</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">Patologia Clínica</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">Patologia Veterinária</button></li>
                                <li><div className="naviLine"/></li>
                                <li><button className="naviButtonCascade">Reprodução</button></li>
                                <li><div className="naviLine"/></li>
                            </ul>
                        </li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton7">Necropsias</button></li>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton8">Atendimentos Externos <br></br>a Grandes Animais</button></li>
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