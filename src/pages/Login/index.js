import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import api, { config } from "../../services/api"
import axios from "axios"
import md5 from "md5"

import { USU } from "../../resources/usuarios"

import './login.css'

const Login = () => {
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [md5str, setMd5] = useState('')
    const navigate = useNavigate()

    const Log = () => {
        navigate('/Dashboard')
    }

    useEffect(() => {
        const storeToken = async () =>{
            Cookies.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYWx2YWx1Y3JvU2VydmljZUFjZXNzVG9rZW4iLCJqdGkiOiI1MDUwZjRiYi04YjgwLTQzZjUtODA2OC0wYzIxMmI0ZmQyNDUiLCJpYXQiOiIyNy8wNC8yMDIzIDE3OjI3OjI5IiwiaWQiOiIxNjQzODUiLCJsb2dpbiI6IkFMRlJFRE8iLCJleHAiOjE2ODI2MjM2NDksImlzcyI6IlNhbHZhbHVyb0F1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiU2FsdmFsdWNyb1NlcnZpY2VDbGllbnQifQ.Krkb_te_6tLjXtVIhcAAMSOp5Q87CePadLnOax-H1sY', { expires: 1/24 })
            console.log(Cookies.get('token'))
        }
        storeToken()
    },[])

    async function teste(){
        console.log('função teste')
        try{
            const response = await api.get('/bandeira', config)
            console.log(response.data)
        } catch (error){
            console.log(error);
        }
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
                <div>
                    <button className='btn btn-primary' onClick={teste}>teste</button>
                </div>
            </div>
        </div>
    )
}

export default Login