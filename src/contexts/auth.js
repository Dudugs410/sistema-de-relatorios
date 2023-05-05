import { React, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
import api, { config } from '../services/api'

import md5 from 'md5'


export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [userLogin, setUserLogin] = useState('')
  const [userPw, setUserPw] = useState('')
  const [userData, setUserData] = useState({})

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
 
  useEffect(()=>{
    if(Cookies.get('token'))
    api.get('/usuario', config(Cookies.get('token')))
    .then(response => {
        console.log(response)
  })
},[])

  /////Verificar se o access token ainda é válido
  
useEffect(()=>{
    if(isSignedIn)
    api.get('/vendas', {
            data:{
              cnpj : "03.953.552/0001-02",
              dataInicial:"2023-04-01",
              dataFinal: "2023-04-10",
              ...config(Cookies.get('token'))
            }
        })
        .then(response =>{
          console.log(response)
        })
})


  /////Login do usuário

  async function submitLogin(e){
    e.preventDefault()
    console.log(loading)
    setLoading(true)
    console.log('submitLogin: usuario:' + userLogin +' password:' + userPw)
    console.log('pw md5: ' + md5(userPw))
    api.post('/token', { client_id: userLogin, client_secret: md5(userPw) })
    .then(response => {
        console.log('response: ')
        console.log(response.data)
        Cookies.set('token', response.data.acess_token)
        console.log('token guardada nos Cookies: ' + Cookies.get('token'))
        if(response.data.sucess === true){
            setIsSignedIn(true)
            navigate('/Dashboard')
        }
    })
    .catch(error =>{
        console.log('catch: ')
        console.log(error)
        alert(error.message)
        setLoading(false)
    })
    setLoading(false)
    console.log('************fim submitLogin()************')
  }
  
  /////desloga usuário
  function logout(){
    console.log('logout()')
    setIsSignedIn(false)
    console.log('************fim logout()************')
  }

  //////////////////////////////////////////////////////////////////

  return(
    <AuthContext.Provider 
      value={{
        isSignedIn,
        userLogin,
        setUserLogin,
        userPw,
        setUserPw,
        loading,
        setLoading,
        submitLogin,
        logout,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider