/* eslint-disable react/jsx-no-comment-textnodes */
import React, { } from 'react';
import './Login.css';
import logo from '../assets/logo.png'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function Login() {



    return (


        
        //div que contém todos os elemento que serão retornados na chamada da função.
        <div className="login-container">


<grid>
            <form>

                <div className="logo">

                    <img src={logo} alt="Logo" />

                </div>


                <div className="inputs">


                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircleOutlinedIcon />
                        </Grid>
                        <Grid item>
                            <TextField id="input-login" label="Digite seu Login" margin="normal"

                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockOutlinedIcon />
                        </Grid>
                        <Grid item>

                            <TextField type="password" id="input-senha" label="Digite sua senha"
                                margin="normal" />

                        </Grid>
                    </Grid>

                </div>

                <div className="buttons">

                    <button type="submit">Entrar</button>


                </div>



            </form>


</grid>

   


         
        </div>





    )


}

export default Login;