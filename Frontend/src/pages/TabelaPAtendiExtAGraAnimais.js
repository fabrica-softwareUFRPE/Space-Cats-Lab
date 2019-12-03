import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';



export default function TabelaAtendiGra({ history }) {
  function exitFunction (e) {
    history.push('/');
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
async function newAtendExtgra  ( data ) {

  var nivel;
  var aux;
  if(data.funcao === '1') {
    nivel = "Rebanho";
  } else if (data.funcao === '2') {
    nivel = "Individual";
  }

  if(data.funcao === '1') {
    nivel = "Até 100Km";
  } else if (data.funcao === '2') {
    nivel = "101 a 500Km";
  }else{
    nivel = "+500Km";
  }
  try {
    await api.post("/Planilhas/Externo", 
    {
      "data_proc": data.n,
      "animal_id": data.ID,
      "propriedade": data.propriedade,
      "dist_prop": data.nivel,
      "tipo_atendimento": data.aux,
    });
  } catch (err) {
    console.log(err);
  }
}


  const [state, setState] = React.useState({
    columns: [
      { title: 'N°', field: 'n' },
      { title: 'Data', field: 'data', type: "date" },
      { title: 'Idetificação', field: 'idetificacao'},
      { title: 'Propriedade', field: 'propriedade' },
      { title: 'Distância da Propriedade',
        field: 'distancia',
        lookup: { 1: 'Até 100Km', 2: '101 a 500Km', 3:'Acima de 500Km'},
      },
      { title: 'Tipo do Atendimento',
        field: 'tipo',
        lookup: { 1: 'Rebanho', 2: 'Individual'},
      },
    ],
    data: [
      { n: '0', data: '21/09/2019', idetificacao: '0', propriedade: 'paciente 0', 
      distancia:1, tipo: 2},
      
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


      <div className="page-content" >
        <div className="table-wrapper" >
          <MaterialTable 
            title="Planilha de Atendimentos externos a animais de grande porte"
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
                      newAtendExtgra(newData);
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
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
                onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
            }}

            
          />
        </div>
      </div>
      
    </div>
  );
}

      