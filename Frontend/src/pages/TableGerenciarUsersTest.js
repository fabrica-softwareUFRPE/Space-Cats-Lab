/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import MaterialTable from 'material-table';
import './TableGerenciarUsersTest.css';
import { TextField } from '@material-ui/core';

export default function ManageUsers( { history }) {
    function exitFunction (e) {
        console.log(rowState.selectedRow)
        //history.push('/');
    }

    function handleClick (e, selectedRow) {
        rowState.selectedRow = selectedRow;

        document.getElementById("nomeText").value = `${rowState.selectedRow.nome}`;
        document.getElementById("loginText").value = `${rowState.selectedRow.login}`;
        document.getElementById("senhaText").value = `${rowState.selectedRow.senha}`;
        document.getElementById("emailText").value = `${rowState.selectedRow.email}`;

        if(rowState.selectedRow.funcao === 1){
            document.getElementById("funcaoText").value = "Adminstrador"
        } else if (rowState.selectedRow.funcao === 2) {
            document.getElementById("funcaoText").value = "Professor"
        } else {
            document.getElementById("funcaoText").value = "Residente"
        }
        if(rowState.selectedRow.estado === 1){
            document.getElementById("estadoText").value = "Ativo"
        } else {
            document.getElementById("estadoText").value = "Inativo"
        }
    }

    const [rowState, setRowState] = React.useState({
        selectedRow: null,
    });

    const [state, setState] = React.useState({
        columns: [
          { title: 'Nome', field: 'nome' },
          { title: 'Login', field: 'login'},
          { title: 'Senha', field: 'senha'},
          { title: 'Email', field: 'email'},
          {
            title: 'Função',
            field: 'funcao',
            lookup: { 1: 'Administrador(a)', 2: 'Professor', 3:"Residente" },
          },
          {
            title: 'Estado',
            field: 'estado',
            lookup: { 1: 'Ativo', 2: 'Inativo' },
          },
        ],
        data: [
          { nome: 'Eduardo', login: 'aaaaa', senha: '123456789', email: 'placeholder3@hotmail.com', funcao: 1, estado: 1 },
          { nome: 'Geraldo', login: 'bbbbb', senha: '111111111', email: 'placeholder@hotmail.com', funcao: 2, estado: 2 },
          { nome: 'Rodrigo', login: 'ccccc', senha: '222222222', email: 'placeholder2@hotmail.com', funcao: 3, estado: 1 },
          { nome: 'Fulano', login: 'biscoito', senha: '2345meia78', email: 'fulanodasilva23@gmail.com', funcao: 3, estado: 1 },
        ],
      });

    return(
        <div className="pageGerenciarUsers">
            <div className="sideBar">
                <div className="headDiv">
                <center><p>SAC-FORDHOV<br/>Hospital Veterinário UFRPE</p></center>
                    <p>USERNAME</p>
                </div>
                <div className="naviDiv">
                    <ul>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton1">Gerenciar Usuários</button></li>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                            <li><button className="naviButton" id="naviButton2">Consultas e Retornos</button>
                                <ul>
                                    <li><button className="naviButtonCascade">para Pequenos Animais</button></li>
                                    <li><button className="naviButtonCascade">para Grandes Animais</button></li>
                                    <li><button className="naviButtonCascade">para Animais Silvestres</button></li>
                                </ul>
                            </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <li><button className="naviButton" id="naviButton3">Diagnóstico por Imagem</button></li>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                            <li><button className="naviButton" id="naviButton4">Procedimentos Cirúrgicos</button>
                                <ul>
                                    <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                    <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                    <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                                </ul>
                            </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                        <li><button className="naviButton" id="naviButton5">Procedimentos Anestésicos</button>
                            <ul>
                                <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                            </ul>
                        </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div className="dropDown">
                        <li><button className="naviButton" id="naviButton6">Análises Laboratoriais</button>
                            <ul>
                                <li><button className="naviButtonCascade">Bacteriose/Virose/Micológico</button></li>
                                <li><button className="naviButtonCascade">Parasitas</button></li>
                                <li><button className="naviButtonCascade">Patologia Clínica</button></li>
                                <li><button className="naviButtonCascade">Patologia Veterinária</button></li>
                                <li><button className="naviButtonCascade">Reprodução</button></li>
                            </ul>
                        </li>
                        </div>
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

            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            <div className="bigContainer">
                <div className="tableContainer">
                    <MaterialTable
                        title="Gerenciar Usuários"
                        columns={state.columns}
                        data={state.data}
                        onRowClick={(e, selectedRow) => handleClick(e, selectedRow)}
                        options={{
                            rowStyle: rowData => ({
                            backgroundColor: (rowData.tableData.id % 2) ? '#DEDF' : '#FFF'
                            })
                        }}
                    />
                </div>
                <div className="itemContainer1">
                    <input id="nomeText" type="text" placeholder="Nome" readOnly />
                    <input id="loginText" type="text" placeholder="Login" readOnly />
                    <input id="senhaText" type="text" placeholder="Senha" readOnly />
                    <input id="emailText" type="text" placeholder="Email" readOnly />
                </div>
                <div className="itemContainer2">
                    <input id="funcaoText" type="text" placeholder="Função" readOnly />
                    <input id="estadoText" type="text" placeholder="Estado" readOnly />
                </div>
                <div className="buttonsContainer">
                    <button>Adicionar</button>
                    <button>Editar</button>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    );
}