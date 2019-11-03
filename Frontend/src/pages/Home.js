/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Home.css';

export default function Home() {
    return(
        <div className="pageHome">
            <div className="sideBar">
                <div className="headDiv">
                    <p><center>SAC-FORDHOV<br/>Hospital Veterinário UFRPE</center></p>
                    <p>USERNAME</p>
                </div>
                <div className="naviDiv">
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Gerenciar Usuários</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Consultas e Retornos</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Diagnóstico por Imagem</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Procedimentos Cirúrgicos</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Procedimentos Anestésicos</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Análises Laboratoriais</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Necropsias</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Atendimentos Externos</button>
                    <div className="naviLine"/>
                    <button className="naviButton" id="naviButton1">Imprimir Relatório Mensal</button>
                    <div className="naviLine"/>
                </div>
                <div className="exitDiv">
                    <button id="exitButton">Sair</button>
                </div>
            </div>
        </div>
    );
}