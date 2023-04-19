import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import api from "../../services/api"
import axios from "axios"
import md5 from "md5"

import { USU } from "../../resources/usuarios"

import './login.css'
import Dashboard from "../Dashboard"

const Login = () => {
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [md5str, setMd5] = useState('')
    const navigate = useNavigate()

    async function submitLogin(user, pw){
        console.log('oi')
        setMd5(md5(pw))
        try{
            const response = await api.post('/token', { user, md5str })
            const { token } = response.data
            console.log(token)

        } catch (error) {
            console.error(error)
        }
    }

    const Log = () => {
        navigate('/Dashboard')
    }

    return(
        <div className='page'>
            <div className='body-login'>  
                <div className='bg-login'>
                </div>
                <form type='submit' className='form-login' onSubmit={Log}>
                    <h1 className='titulo-login'>LOGIN</h1>
                    <div className='input-container'>
                        <input className='input-login' type='text' placeholder='usuário' value={user} onChange={(e) => setUser(e.target.value)}/>
                        <input className='input-login' type='password' placeholder='senha' value={pw} onChange={(e) => setPw(e.target.value)}/>
                        <hr/>
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <Link className='pw'>esqueci minha senha</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login