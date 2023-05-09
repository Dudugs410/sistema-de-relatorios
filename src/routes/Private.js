import { React, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'
import Cookies from 'js-cookie'

import LoadingModal from '../components/LoadingModal'

export default function Private({children}){

  const { signed, isSignedIn, setIsSignedIn, setAccessToken, loading, setLoading } = useContext(AuthContext)

  console.log('Private.js')

  useEffect(() => {
      setIsSignedIn(sessionStorage.getItem('isSignedIn'))
      setAccessToken(Cookies.get('token'))
      setLoading(sessionStorage.getItem('loading'))

  })

  if(loading){
    console.log('loading... isSignedIn: ' + isSignedIn)
    return(
      <LoadingModal/>
    )
  }

  if(!signed){
    return <Navigate to="/"/>
  }

  return children
}
