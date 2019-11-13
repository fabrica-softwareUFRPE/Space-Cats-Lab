import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';
import Button from '@material-ui/core/Button';



export default function TabelaFuncionario() {
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
    ],
    data: [
      { nome: 'Eduardo 0', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 1', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 2', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 3', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 4', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 5', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 6', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 7', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 8', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      { nome: 'Eduardo 9', login: 'PCEdu42', senha: 123456789, email: 'Eduardogomes42@hotmail.com', funcao: 1 },
      
           
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
                })}}

            
          />
        </div>
      </div>
      
    </div>
  );
}

      