import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../auth.js'

function ProtectedRoutes() {
    const location = useLocation();

    if(!isAuthenticated()){
        alert("Veuillez vous connecter pour accéder aux notes.")
        return <Navigate to="/login" replace state={{from:location}}/>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutes