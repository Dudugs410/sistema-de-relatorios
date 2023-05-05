import React from "react";
import { Route, Routes } from "react-router-dom";

import Private from "./Private";
import DateProvider from "../contexts/date";

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Vendas from "../pages/Vendas";
import Recebiveis from "../pages/Recebiveis";
import Antecipacoes from "../pages/Antecipacoes";
import Servicos from "../pages/Servicos";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = { <Private><DateProvider><Dashboard/></DateProvider></Private>}/>
            <Route path='/vendas' element = { <Private><DateProvider><Vendas/></DateProvider></Private> } />
            <Route path='/recebiveis' element = { <Private><DateProvider><Recebiveis/></DateProvider></Private> } />
            <Route path='/antecipacoes' element = { <Private><DateProvider><Antecipacoes/></DateProvider></Private> } />
            <Route path='/servicos' element = { <Private><DateProvider><Servicos/></DateProvider></Private> } />
        </Routes>
    )  
}

export default RoutesApp
