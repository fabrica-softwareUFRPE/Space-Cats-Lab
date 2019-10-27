import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/LoginTest';



function Routes(){

    return (
        <BrowserRouter>

        <Route path = "/" exact component = {Login} />
     
        </BrowserRouter>

    );
} 


export default Routes;