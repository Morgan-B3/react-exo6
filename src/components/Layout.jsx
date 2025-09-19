import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { clearToken, getToken } from '../auth.js';

function Layout({children}) {
    const location = useLocation();
    const navigate = useNavigate();
    const token = getToken();

    function logOut(){
        clearToken();
        navigate("/");
    }
    
  return (
    <>
        {location.pathname != "/" ?(
            <Link to="/">Accueil</Link> 
        ):("")}
        {token ? (
            <button onClick={()=>logOut()} >Déconnexion</button>
        ):("")}
        {children}
    </>
  )
}

export default Layout