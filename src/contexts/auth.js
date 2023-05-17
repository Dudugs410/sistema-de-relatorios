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
  const [userList, setUserList] = useState([])

  const [dataInicial, setDataInicial] = useState(new Date().toLocaleDateString())
  const [dataFinal, setDataFinal] = useState((new Date().toLocaleDateString()))
  const [cnpj, setCnpj] = useState('')

useEffect(() =>{
  console.log('auth.js')
},[])


  /////API de vendas

  async function loadVendas(){
    await api.get('/vendas',{ 
      params:{
          cnpj: '03.953.552/0001-02',
          dataInicial: `${dataInicial}`,
          dataFinal: `${dataFinal}`
      },
      headers:{
          Authorization:`Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': '*/*'
      }
    })
      .then(response =>{
        console.log(response)
      })
    }

  /////Login do usuário


  async function submitLogin(e){
    e.preventDefault()
    console.log(loading)
    setLoading(true)
    console.log('submitLogin: usuario:' + userLogin +' password:' + userPw)
    console.log('pw md5: ' + md5(userPw))
    await api.post('/token', { client_id: userLogin, client_secret: md5(userPw) })
    .then(response => {
        Cookies.set('token', response.data.acess_token)
        setAccessToken(Cookies.get('token'))
        console.log('sucess: ' + response.data.sucess)
        if(response.data.sucess === true){
          console.log('////////////////////////////////')
          sessionStorage.setItem('isSignedIn', true)
          console.log('fim do if')
        }
        console.log('chamada a api de usuarios')
        api.get('/usuario', config(Cookies.get('token')) )
        .then(response => {
          setLoading(true)
          setUserList(response.data)
          sessionStorage.setItem('userList', JSON.stringify(userList))
          const userMatch = userList.find(response => response.LOGIN === userLogin)
          if(userMatch){
            sessionStorage.setItem('userData', JSON.stringify(userMatch))
            sessionStorage.setItem('isSignedIn', true)
            setIsSignedIn(true)
          }else{
            console.log('não encontrado')
          }
      setLoading(false)
      
  })
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
        dataInicial,
        setDataInicial,
        dataFinal,
        setDataFinal,
        cnpj,
        setCnpj,
        loadVendas,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider