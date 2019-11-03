/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Home.css';

export default function Home() {
    return(
        <div className="pageHome">
            <div className="sideBar">
                <div className="headDiv">
                    <p><center>Sistema FORDHOV<br/>Hospital Veterinário UFRPE</center></p>
                    <p>USERNAME</p>
                </div>
                <div className="naviDiv">
                    <p>Hello System FORDHOV</p>
                    <p>Hello System FORDHOV</p>
                    <p>Hello System FORDHOV</p>
                    <p>Hello System FORDHOV</p>
                    <p>Hello System FORDHOV</p>
                </div>
                <div className="exitDiv">
                    <button id="exitButton">Sair</button>
                </div>
            </div>
        </div>
    );
}