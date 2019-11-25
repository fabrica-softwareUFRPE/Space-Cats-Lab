import React, { useState } from 'react';
import './LoginTest.css';
import logo from '../assets/logo.png'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import api from "../services/api";
import { login } from "../services/auth";

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    async function handleSubmit (e) {
        e.preventDefault();

        if (!username || !password) {
            alert("Preencha as informações para fazer o login!");
        } else {
            try {
                const response = await api.post("/login", { "email": username, "password": password });
                login(response.data.token);
                history.push("/home");
            } catch (err) {
                console.log(err);
                alert("Usuário ou senha incorretos. Verifique suas informações!");
            }
        }
    }

    return (
        <div className="pageLogin">
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="inputs">
                        <Grid container id="grid1" spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircleOutlinedIcon id="icon1"/>
                            </Grid>
                            <Grid item>
                                <TextField 
                                    id="input-login" 
                                    label="Digite seu email" 
                                    margin="normal"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container id="grid2" spacing={1} alignItems="flex-end">
                            <Grid item> 
                                <LockOutlinedIcon id="icon2"/>
                            </Grid>
                            <Grid item>
                                <TextField 
                                    type="password" 
                                    id="input-senha" 
                                    label="Digite sua senha" 
                                    margin="normal"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
            
            <footer className="rodape">
                <p>&copy; 2019, Space Cats Lab</p>
            </footer>
        </div>
    );
}