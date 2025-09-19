import React from 'react'
import { register } from '../api.js'
import Form from '../components/Form.jsx'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <h1>Inscription</h1>
        <Form action={register}/>
        <div>
            <p>Déjà inscrit ?</p>
            <Link to="/login">Connexion</Link>
        </div>
    </>
  )
}
