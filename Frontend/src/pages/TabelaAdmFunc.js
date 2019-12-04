import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';
import api from "../services/api";


export default function TabelaFuncionario({ history }) {
  function exitFunction(e) {
    history.push('/');
  }

  function tabelaUsers(e) {

    history.push('/tableUsers')
  }


  function consultaGrande(e) {
    history.push('/tableConsultaGra')
  }

  function consultaSilvestre(e) {
    history.push('/tableConsultaSil');
  }

  function consultaPequeno(e) {

    history.push('/tableConsultaPeq');
  }

  function ProceImagem(e) {

    history.push('/tableProcedimentoImagem');
  }

  function cirurgiaGrande(e) {

    history.push('/tableCirurgiaGrande');
  }

  function cirurgiaPequeno(e) {

    history.push('/tableCirurgiaPequeno');
  }

  function cirurgiaSilvestre(e) {

    history.push('/tableCirurgiaSilvestre');
  }

  function anestesiaPequeno(e) {
    history.push('/tableAnestesicoPeq')
  }
  function anestesiaGrande(e) {
    history.push('/tableAnestesicoGra')
  }
  function anestesiaSilvestre(e) {
    history.push('/tableAnestesicoSil')
  }

  function necropsias(e) {
    history.push('/tableNecropsias')
  }

  function analisesLabBac(e) {
    history.push('/tableAnalisesLabBac')
  }

  function analisesLabPar(e) {
    history.push('/tableAnalisesLabPar')
  }

  function analisesLabPatCli(e) {
    history.push('/tableAnalisesLabPatCli')
  }

  function analisesLabPatVet(e) {
    history.push('/tableAnalisesLabPatVet')
  }

  function analisesLabRep(e) {
    history.push('/tableAnalisesLabRep')
  }

  function atendimentoExt(e) {
    history.push('/tableAtendimentoExterno')
  }



  async function lerTabela(data) {
    try {
      const response = await api.get("/users/register",
        console.log(response)
      )
    } catch (error) {
      console.log('Erro:', error);
    }

  }


  async function newUser(data) {

    var nivel;

    if (data.funcao === '1') {
      nivel = "Administrador";
    } else if (data.funcao === '2') {
      nivel = "Supervisor";
    } else {
      nivel = "Básico";
    }

    try {
      await api.post("/users/register",
        {
          "id": data.id,
          "username": data.nome,
          "email": data.email,
          "password": data.senha,
          "setores": [data.setor],
          "nivel": nivel,
        });
    } catch (err) {
      console.log(err);
    }
  }

  const [state, setState] = React.useState({
    columns: [
      { tile: 'Id', field: 'id' },
      { title: 'Nome', field: 'nome' },
      { title: 'CPF', field: 'cpf' },
      { title: 'Email', field: 'email' },
      { title: 'Senha', field: 'senha' },
      { title: 'Setor', field: 'setor' },
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
      { id: '12', nome: 'Eduardo 0', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas P', funcao: 1, estado: 1 },
      { id: '14', nome: 'Eduardo 1', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas G', funcao: 1, estado: 1 },
      { id: '15', nome: 'Eduardo 2', cpf: '12345678910', email: 'Eduardogomes42@hotmail.com', senha: 123456789, setor: 'Consultas S', funcao: 1, estado: 1 },
    ],
  });


  return (

    <div className='tela-adm'  >


      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="sideBar">
        <div className="headDiv">
          <center><p>SAC-FORDHOV<br />Hospital Veterinário UFRPE</p></center>
          <p>USERNAME</p>
        </div>
        <div className="naviDiv">
          <ul>
            <li><div className="naviLine" /></li>
            <li><button className="naviButton" id="naviButton1" onClick={tabelaUsers}>Gerenciar Usuários</button></li>
            <li><div className="naviLine" /></li>
            <div className="dropDown">
              <li><button className="naviButton" id="naviButton2">Consultas e Retornos</button>
                <ul>
                  <li><button className="naviButtonCascade" onClick={consultaPequeno} >para Pequenos Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={consultaGrande} >para Grandes Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={consultaSilvestre} >para Animais Silvestres</button></li>
                </ul>
              </li>
            </div>
            <li><div className="naviLine" /></li>
            <li><button className="naviButton" id="naviButton3">Diagnóstico por Imagem</button></li>
            <li><div className="naviLine" /></li>
            <div className="dropDown">
              <li><button className="naviButton" id="naviButton4">Procedimentos Cirúrgicos</button>
                <ul>
                  <li><button className="naviButtonCascade" onClick={cirurgiaPequeno}>em Pequenos Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={cirurgiaGrande}>em Grandes Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={cirurgiaSilvestre}>em Animais Silvestres</button></li>
                </ul>
              </li>
            </div>
            <li><div className="naviLine" /></li>
            <div className="dropDown">
              <li><button className="naviButton" id="naviButton5">Procedimentos Anestésicos</button>
                <ul>
                  <li><button className="naviButtonCascade" onClick={anestesiaPequeno}>em Pequenos Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={anestesiaGrande}>em Grandes Animais</button></li>
                  <li><button className="naviButtonCascade" onClick={anestesiaSilvestre}>em Animais Silvestres</button></li>
                </ul>
              </li>
            </div>
            <li><div className="naviLine" /></li>
            <div className="dropDown">
              <li><button className="naviButton" id="naviButton6">Análises Laboratoriais</button>
                <ul>
                  <li><button className="naviButtonCascade" onClick={analisesLabBac}>Bacteriose/Virose/Micológico</button></li>
                  <li><button className="naviButtonCascade" onClick={analisesLabPar}>Parasitas</button></li>
                  <li><button className="naviButtonCascade" onClick={analisesLabPatCli}>Patologia Clínica</button></li>
                  <li><button className="naviButtonCascade" onClick={analisesLabPatVet}>Patologia Veterinária</button></li>
                  <li><button className="naviButtonCascade" onClick={analisesLabRep}>Reprodução</button></li>
                </ul>
              </li>
            </div>
            <li><div className="naviLine" /></li>
            <li><button className="naviButton" id="naviButton7" onClick={necropsias}>Necropsias</button></li>
            <li><div className="naviLine" /></li>
            <li><button className="naviButton" id="naviButton8" onClick={atendimentoExt}>Atendimentos Externos <br></br>a Grandes Animais</button></li>
            <li><div className="naviLine" /></li>
            <li><button className="naviButton" id="naviButton9">Imprimir Relatório Mensal</button></li>
            <li><div className="naviLine" /></li>
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
                width: 1,
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
                })
            }}

          />
        </div>
      </div>

    </div>
  );
}