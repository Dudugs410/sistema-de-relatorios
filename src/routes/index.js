import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Private from "./Private";

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Vendas from "../pages/Vendas";
import Recebiveis from "../pages/Recebiveis";
import Antecipacoes from "../pages/Antecipacoes";
import Servicos from "../pages/Servicos";

function RoutesApp(){
    return(
    <Layout>
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = { <Private><Dashboard/></Private>}/>
            <Route path='/vendas' element = { <Private><Vendas/></Private> } />
            <Route path='/recebiveis' element = { <Private><Recebiveis/></Private> } />
            <Route path='/antecipacoes' element = { <Private><Antecipacoes/></Private> } />
            <Route path='/servicos' element = { <Private><Servicos/></Private> } />
        </Routes>
    </Layout>
    )  
}

export default RoutesApp
