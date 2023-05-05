import { React, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'
import Cookies from 'js-cookie'

export default function Private({children}){
  const { isSignedIn, loading } = useContext(AuthContext)

  if(loading){
    return(
      <div></div>
    )
  }

  if(!isSignedIn || Cookies.get('token') === undefined){
    Cookies.remove('token')
    return <Navigate to="/"/>
  }

  return children
}
