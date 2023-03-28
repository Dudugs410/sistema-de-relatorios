import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FiSettings } from "react-icons/fi"

import './header.css'

const Header = () =>{
    return(
        <>
            <div className='header-bg'>
                <div className='navbar-title'>
                    <h1>SafeJob</h1>
                </div>
                <div className='navbar-customer-wrapper'>
                    <div className='navbar-customer'>
                        <h4>Filial Placeholder</h4>
                        <h6>123456789101112</h6>
                    </div>
                    
                    <div className='navbar-customer'>
                        <h4>Cliente Placeholder</h4>
                        <h6>123456789101112</h6> 
                    </div>              
                </div>
                <button type='button' className='btn-exit'><FiSettings color="#FFF" size={24}/></button>
            </div>
            
            <div className='header-content drop-shadow'>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/vendas' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Vendas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Recebíveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Antecipações</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Relatórios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Header;