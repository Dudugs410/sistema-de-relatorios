import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"

import './login.css'
import { useContext } from "react"

const Login = () => {
    const navigate = useNavigate()
    const { submitLogin } = useContext(AuthContext) 
    const { loading } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const { setUser } = useContext(AuthContext)
    const { pw } = useContext(AuthContext)
    const { setPw } = useContext(AuthContext)

    return(
        <div className='page'>
            <div className='body-login'>  
                <div className='bg-login'>
                </div>
                <form type='submit' className='form-login' onSubmit={submitLogin}>
                    <h1 className='titulo-login'>LOGIN</h1>
                    <div className='input-container'>
                        <input className='input-login' type='text' placeholder='usuário' value={user} onChange={(e) => setUser(e.target.value)}/>
                        <input className='input-login' type='password' placeholder='senha' value={pw} onChange={(e) => setPw(e.target.value)}/>
                        <hr/>
                        { !loading ? <button type='submit' className='btn btn-primary'>Login</button> : <button type='submit' className='btn btn-primary' disabled>Carregando...</button>}
                        <Link className='pw'>esqueci minha senha</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login