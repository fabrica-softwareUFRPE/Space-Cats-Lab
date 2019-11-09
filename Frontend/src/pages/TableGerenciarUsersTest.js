/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import MaterialTable from 'material-table';
import './TableGerenciarUsersTest.css';

export default function ManageUsers( { history }) {
    function exitFunction (e) {
        history.push('/');
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
          { nome: 'Eduardo', login: 'PCEdu42', senha: '123456789', email: 'Eduardogomes42@hotmail.com', funcao: 1, estado: 1 },
          { nome: 'Geraldo', login: 'bbbbb', senha: '111111111', email: 'placeholder@hotmail.com', funcao: 1, estado: 2 },
          { nome: 'Rodrigo', login: 'ccccc', senha: '222222222', email: 'placeholder2@hotmail.com', funcao: 1, estado: 1 },
        ],
      });

    return(
        <div className="pageGerenciarUsers">
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
                        <div class="dropDown">
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
                        <div class="dropDown">
                            <li><button className="naviButton" id="naviButton4">Procedimentos Cirúrgicos</button>
                                <ul>
                                    <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                    <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                    <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                                </ul>
                            </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div class="dropDown">
                        <li><button className="naviButton" id="naviButton5">Procedimentos Anestésicos</button>
                            <ul>
                                <li><button className="naviButtonCascade">em Pequenos Animais</button></li>
                                <li><button className="naviButtonCascade">em Grandes Animais</button></li>
                                <li><button className="naviButtonCascade">em Animais Silvestres</button></li>
                            </ul>
                        </li>
                        </div>
                        <li><div className="naviLine"/></li>
                        <div class="dropDown">
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

            <div className="tableContainer">
                <MaterialTable 
                    title="Funcionarios"
                    options={{
                    rowStyle: {
                        height: 10,
                        width:  1,
                        //backgroundColor: '#fff',
                    }
                    }}
                    columns={state.columns}
                    data={state.data}
                    onRowClick={((e, selectedRow) => setRowState({ selectedRow }))}
                    options={{
                        rowStyle: rowData => ({
                          backgroundColor: (rowState.selectedRow && rowState.selectedRow.tableData.id === rowData.tableData.id) ? '#DDD' : '#FFF'
                        })
                    }}
                />
            </div>
        </div>
    );
}