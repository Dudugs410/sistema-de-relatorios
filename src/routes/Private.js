import { React, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'
import Cookies from 'js-cookie'

import Layout from '../components/Layout'
import LoadingModal from '../components/LoadingModal'

export default function Private({children}){

  const { signed, isSignedIn, accessToken, setIsSignedIn, setAccessToken, loading, setLoading, setUserData } = useContext(AuthContext)

  
  useEffect(()=>{
    console.log('Private.js')
  })

  useEffect(() => {
      setIsSignedIn(sessionStorage.getItem('isSignedIn'))
      setAccessToken(Cookies.get('token'))
      setLoading(sessionStorage.getItem('loading'))
      setUserData(JSON.parse(sessionStorage.getItem('userData')))
  },[])

  if(loading){
    console.log('loading... isSignedIn: ' + isSignedIn)
    return(
      <LoadingModal/>
    )
  }

  if(!signed){
    sessionStorage.clear()
    Cookies.remove('token')
    return <Navigate to="/"/>
  }

  
  return (
    <Layout>{ children }</Layout>)
}
