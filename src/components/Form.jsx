import React, { useState } from 'react'
import { setToken } from '../auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Form({action}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
  
    const onSubmit = async (e) =>{
        e.preventDefault();
        setError(null);
        
        try {
            const {accessToken} = await action({email,password});
            setToken(accessToken);
            console.log("Token = ",accessToken);
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo,{ replace:true})
        }catch(err){
            console.error(err)
            setError("Erreur identifiants")
        }
    }
  
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email'>Email : </label>
                    <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='password'>Mot de passe : </label>
                    <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                </div>
                <button>Valider</button>
            </form>
        </div>
    )
}

export default Form