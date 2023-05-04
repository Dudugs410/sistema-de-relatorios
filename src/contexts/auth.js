import { React, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
import api, { config } from '../services/api'

import md5 from 'md5'


export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [userData, setUserData] = useState(null)
  const [user, setUser] = useState('')
  const [pw, setPw] = useState('')

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(()=>{
    async function loadUser(){
      const userData = Cookies.get('@userData')

      if(userData){
        setUser(Cookies.get('@userData'))
        setLoading(false)
      }

      setLoading(false)
    }

    loadUser()
  },[])

  async function submitLogin(e){
    e.preventDefault()
    console.log(loading)
    setLoading(true)
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
            Cookies.set('@userData',  JSON.stringify(response.data))
            setUserData(Cookies.get('@userData'))
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

  //////////////////////////////////////////////////////////////////

  return(
    <AuthContext.Provider 
      value={{
        signed: !!userData,
        user,
        setUser,
        pw,
        setPw,
        loading,
        setLoading,
        submitLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider