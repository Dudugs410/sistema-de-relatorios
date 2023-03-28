import React from "react"

import './login.css'

const Login = () => {
    return(
        <div className='body-login'>  
            <div className='bg-login'>
                <h3>imagem vai aqui</h3>
            </div>
            <form type='submit' className='form-login'>
                <h1 className='titulo-login'>LOGIN</h1>
                <div className='input-container'>
                    <input className='input-login' type='text' placeholder='usuário'/>
                    <input className='input-login' type='password' placeholder='senha'/>
                </div>

                <button type='button' className='btn btn-primary'/>
                
            </form>
        </div>
    )
}

export default Login