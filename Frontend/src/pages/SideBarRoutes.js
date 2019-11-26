import React from 'react';

const SideBar =  ( {history} ) => { 

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

    function cirurguaSilvestre (e) {

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
        history.push('//tableNecropsias')
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
}
export { SideBar }
