import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Cookies from "js-cookie"
import api from "../../services/api"
import md5 from "md5"

import './login.css'

const Login = () => {
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    async function submitLogin(e){
        e.preventDefault()
        setLoading(true)
        console.log(loading)
        console.log('submitLogin: usuario:' + user +' password:' + pw)
        console.log('pw md5: ' + md5(pw))
        api.post('/token', { client_id: user, client_secret: md5(pw) })
        .then(response => {
            console.log('response: ')
            console.log(response.data)
            const accessToken = response.data.acess_token
            Cookies.set('token', accessToken)
            console.log('token guardada nos Cookies: ' + Cookies.get('token'))
            if(response.data.sucess === true){
                
                navigate('/Dashboard')
            }
        })
        .catch(error =>{
            console.log('catch: ')
            console.log(error)
            setLoading(false)
        })
        setLoading(false)
    }

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
                        {loading ? <button className='btn btn-primary' disabled>Carregando...</button> : <button type='submit' className='btn btn-primary'>Login</button>}
                        <Link className='pw'>esqueci minha senha</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login