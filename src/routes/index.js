import React from "react";
import { Route, Routes } from "react-router-dom";


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
            <Route path='/dashboard' element = { <Dashboard/>}/>
            <Route path='/vendas' element = { <Vendas/> } />
            <Route path='/recebiveis' element = { <Recebiveis/> } />
            <Route path='/antecipacoes' element = { <Antecipacoes/> } />
            <Route path='/servicos' element = { <Servicos/> } />
        </Routes>
    )  
}

export default RoutesApp
