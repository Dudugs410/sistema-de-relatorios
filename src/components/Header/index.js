import { Link, useNavigate } from "react-router-dom"
import { FiPower } from "react-icons/fi"

import Cookies from "js-cookie"

import './header.css'
import '../../pages/Vendas/vendas.css'

const Header = () =>{
    const navigate = useNavigate()


    function logout(){
        Cookies.remove('token')
        console.log(Cookies.get('token'))
        navigate('/')
    }

    function token(){
        console.log(Cookies.get('token'))
    }

    return(
        <>
            <div className='header-bg'>
                <div className='navbar-title'>
                    <h1>SafeJob</h1>
                </div>
                <div className='navbar-customer-wrapper'>
                    <div className='navbar-customer'>
                        <span>Filial Placeholder</span>
                        <span>123456789101112</span>
                    </div>
                    
                    <div className='navbar-customer'>
                        <span className='client-name'>Cliente Placeholder</span>
                        <span className='client-code'>123456789101112</span> 
                    </div>              
                </div>
                <button type='button' className='btn-exit' onClick={logout}><FiPower color="#000000" size={24}/></button>
                <button type='button' className='btn-secondary' onClick={token}>access token</button>
            </div>
            
            <div className='header-content drop-shadow'>
                <div className="li-container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/vendas' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Vendas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/recebiveis' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Recebíveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/antecipacoes' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Antecipações</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/servicos' className="nav-hover nav-text nav-link active text-shadow" aria-current="page">Serviços</Link>
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