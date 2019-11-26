import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';



export default function TabelaCirurgiaGrande() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'N°', field: 'n' },
      { title: 'Data', field: 'data', type: "date" },
      { title: 'Idetificação', field: 'idetificacao'},
      { title: 'Nome', field: 'nome' },
      { title: 'Espécie', field: 'especie'},
      { title: 'Procedimento cirúrgico', field: 'cirurgico'},
      { title: 'Número de estudos',
        field: 'estudo',
        lookup: { 1: 'Simples', 2: 'Complexo'},
      },
     
    ],
    data: [
      { n: '0', data: '21/09/2019', idetificacao: '0', nome: 'paciente 0', 
      especie: 'gato', cirurgico: 'OSH' , estudo:1},
      
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
            title="Planilha de Procedimentos Cirúrgico de animais de grande porte"
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

      