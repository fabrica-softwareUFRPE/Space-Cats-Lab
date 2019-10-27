/* eslint-disable react/jsx-no-comment-textnodes */
import React, { } from 'react';
import './LoginTest.css';
import logo from '../assets/logo.png'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function Login() {
    return (
        <div className="page">
            <div className="login-container">
                <form></form>
                <div className="overlay"></div>
            </div>
            
            <footer className="rodape">
                <p>Copyright &copy; 2019, Space Cats Lab</p>
            </footer>
        </div>
    );
}