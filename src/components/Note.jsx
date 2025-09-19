import React from 'react'
import { useNavigate } from 'react-router-dom'

function Note({note, actionDelete}) {
    const navigate = useNavigate();

  return (
    <li>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
        <button onClick={()=>navigate(`notes/${note.id}/update`)}>Modifier</button>
        <button onClick={()=>actionDelete()}>Supprimer</button>
    </li>
  )
}

export default Note