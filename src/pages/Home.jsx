import React, { useState } from 'react'
import { login, register } from '../api.js';
import { setToken } from '../auth';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <ul>
        <li><Link to="/login">Connexion</Link></li>
        <li><Link to="/register">Inscription</Link></li>
        <li><Link to="/notes">Notes</Link></li>
      </ul>
    </div>
  )
}

export default Home