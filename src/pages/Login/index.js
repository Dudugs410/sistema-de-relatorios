import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"

import './login.css'
import { useContext } from "react"

const Login = () => {
    const { submitLogin } = useContext(AuthContext) 
    const { loading } = useContext(AuthContext)
    const { userLogin } = useContext(AuthContext)
    const { setUserLogin } = useContext(AuthContext)
    const { userPw } = useContext(AuthContext)
    const { setUserPw } = useContext(AuthContext)
    const { isSignedIn } = useContext(AuthContext)
    const { accessToken } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(isSignedIn){
            navigate('/Dashboard')
        }
    },[isSignedIn, navigate])

    return(
        <div className='appPage'>
            <div className='body-login'>  
                <div className='bg-login'>
                </div>
                <form type='submit' className='form-login' onSubmit={submitLogin}>
                    <h1 className='titulo-login'>LOGIN</h1>
                    <div className='input-container'>
                        <input className='input-login' type='text' placeholder='usuário' value={userLogin} onChange={(e) => setUserLogin(e.target.value)}/>
                        <input className='input-login' type='password' placeholder='senha' value={userPw} onChange={(e) => setUserPw(e.target.value)}/>
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