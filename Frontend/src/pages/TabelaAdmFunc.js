import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';
import api from "../services/api";


export default function TabelaFuncionario( { history } ) {
  function exitFunction (e) {
    history.push('/');
  }

  async function newUser ( data ) {

    var nivel;

    if(data.nivel === 1) {
      nivel = "Administrador";
    } else if (data.nivel === 2) {
      nivel = "Supervisor";
    } else {
      nivel = "Básico";
    }

    await api.post("/users/register", 
    {
      "id": data.id,
      "username": data.nome,
      "email": data.email,
      "password": data.senha,
      "setores": [data.setor],
      "nivel": nivel,
    });
  }

  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'nome'},
      { title: 'CPF', field: 'cpf'},
      { title: 'Email', field: 'email'},
      { title: 'Senha', field: 'senha'},
      { title: 'Setor', field: 'setor'},
      {
	      title: 'Função',
        field: 'funcao',
        lookup: { 1: 'Administrador(a)', 2: 'Supervisor', 3: 'Básico' },
      },
      {
        title: 'Estado',
        field: 'estado',
        lookup: { 1: 'Ativo', 2: 'Inativo' },
      },
    ],
    data: [
      { nome: 'Eduardo 0', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas P', funcao: 1, estado: 1 },
      { nome: 'Eduardo 1', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas G', funcao: 1, estado: 1 },
      { nome: 'Eduardo 2', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas S', funcao: 1, estado: 1 }, 
    ],
  });
  
  return (

    <div className = 'tela-adm'  >

      
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

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


      <div className="page-content" >
        <div className="table-wrapper" >
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
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      newUser(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState(prevState => {
                        const data = [...prevState.data];
                        //console.log(data.indexOf(oldData));
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                })}}

            
          />
        </div>
      </div>
      
    </div>
  );
}

      