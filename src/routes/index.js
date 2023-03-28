import React from "react";
import { Route, Routes } from "react-router-dom";


import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Vendas from "../pages/Vendas";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = { <Dashboard/>}/>
            <Route path='/vendas' element = { <Vendas/> } />
        </Routes>
    )  
}

export default RoutesApp
