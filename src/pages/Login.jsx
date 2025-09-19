import React, { useState } from 'react'
import { login } from '../api.js';
import Form from '../components/Form.jsx';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <>
            <h1>Connexion</h1>
            <Form action={login}/>
            <div>
                <p>Pas encore de compte ?</p>
                <Link to="/register">Inscription</Link>
            </div>
        </>
    )
}

export default Login