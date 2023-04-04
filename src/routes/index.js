import React from "react";
import { Route, Routes } from "react-router-dom";


import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Vendas from "../pages/Vendas";
import Recebiveis from "../pages/Recebiveis";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = { <Dashboard/>}/>
            <Route path='/vendas' element = { <Vendas/> } />
            <Route path='/recebiveis' element = { <Recebiveis/> } />
        </Routes>
    )  
}

export default RoutesApp
