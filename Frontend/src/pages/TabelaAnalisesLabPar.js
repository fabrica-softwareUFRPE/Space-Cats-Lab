import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker
} from '@material-ui/pickers'


export default function TabelaAnalisesLabPar() {
/*
  async function newAnaliseLab ( data ) {

    var nivel;

    if(data.funcao === '1') {
      nivel = "simples";
    } else if (data.funcao === '2') {
      nivel = "complexo";
    }
    try {
      await api.post("/users/register", 
      {
        "n": data.n,
        "data": data.data,
        "ID": data.ID,
        "Nome": data.Nome,
        "Especie": data.Especie,
        "Tecnicas": data.Tecnicas,
        "procedimento": [data.procedimento],
        "nivel": nivel,
      });
    } catch (err) {
      console.log(err);
    }
  }
*/
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'N', field: 'atendimento' },
      { title: 'Data', field: 'Data', type: 'date' },
      { title: 'Identificação/Ficha Paciente', field: 'ID'},
      { title: 'Nome', field: 'Nome'},
      { title: 'Espécie', field: 'Especie'},
      { title: 'Técnicas Anestésicas', field: 'Tecnicas'},
      
      {
	    title: 'Tipo do procedimento',
        field: 'procedimento',
        lookup: { 1: 'Simples', 2: 'Complexo'},
      },
    ],
    data: [
     {  atendimento: '01', Data: 111120 , ID: 123, Nome: 'nino', Tecnicas: 'abaco' ,procedimento: 1 },
     
           
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


      <div className="page-content" >
        <div className="table-wrapper" >
          <MaterialTable 
            title="Planilha Análises Laboratoriais Parasitas "
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

      