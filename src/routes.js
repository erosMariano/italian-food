import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import OpenApp from "./openApp";
import Cardapio from './cardapio';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { OpenApp } path = "/" exact />
            <Route component = { Cardapio } path = "/cardapio"/>
        </BrowserRouter>
    );
}

export default Routes;