import { React, createContext, useState, useEffect } from 'react'

import Cookies from 'js-cookie'
import api, { config } from '../services/api'

import md5 from 'md5'

export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userLogin, setUserLogin] = useState('')
  const [userPw, setUserPw] = useState('')
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const [accessToken, setAccessToken] = useState(undefined)
  const [users, setUsers] = useState({})

  console.log('auth.js')

useEffect(() =>{
  setIsSignedIn(sessionStorage.getItem('isLoggedIn'))
},[])

useEffect(() => {
  async function loadUsers(){
    const usu = await api.get('/usuario', config(accessToken))
    console.log(users.data)
    setUsers(usu.data)
  }
  loadUsers()
},[])
  /////API de vendas
/*  
useEffect(()=>{
    if(isSignedIn)
    {
      console.log('GET API de vendas')
      api.get('/vendas', {
        params:{
          cnpj : "03.953.552/0001-02",
          dataInicial:"2023-04-01",
          dataFinal: "2023-04-10",
          acess_token: accessToken
        }
      })
      .then(response =>{
        console.log(response)
      })
    }
    
},[accessToken, isSignedIn])
*/

/*useEffect(()=>{
    if(isSignedIn){
        axios.get('https://app.salvalucro.com.br/api/v1/vendas', {
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
    } 
})*/

  /////Login do usuário


  async function submitLogin(e){
    e.preventDefault()
    console.log(loading)
    setLoading(true)
    console.log('submitLogin: usuario:' + userLogin +' password:' + userPw)
    console.log('pw md5: ' + md5(userPw))
    await api.post('/token', { client_id: userLogin, client_secret: md5(userPw) })
    .then(response => {
        console.log('response: ')
        console.log(response.data)
        Cookies.set('token', response.data.acess_token)
        setUserData(response.data)
        setAccessToken(Cookies.get('token'))
        console.log('sucess: ' + response.data.sucess)
        
        if(response.data.sucess === true){
          console.log('////////////////////////////////')
          sessionStorage.setItem('isSignedIn', true)
          sessionStorage.setItem('userData', JSON.stringify(userData))
          console.log(sessionStorage.getItem('userData'))
          console.log(isSignedIn)
          console.log('//////////////////////////////////')
          setIsSignedIn(true)  
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
    setUserData(undefined)
    Cookies.remove('token')
    sessionStorage.clear()
    console.log('************fim logout()************')
  }

  //////////////////////////////////////////////////////////////////

  return(
    <AuthContext.Provider 
      value={{
        signed: !!userData,
        isSignedIn,
        setIsSignedIn,
        userLogin,
        setUserLogin,
        userPw,
        setUserPw,
        loading,
        setLoading,
        submitLogin,
        logout,
        userData,
        setUserData,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider