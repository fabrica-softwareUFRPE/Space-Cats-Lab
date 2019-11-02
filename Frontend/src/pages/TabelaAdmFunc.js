import React from 'react';
import MaterialTable from 'material-table';
import './TabelaAdmFunc.css';

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
    <MaterialTable
      title="Funcionarios"
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
          }),
      }}
    />
  );
}
