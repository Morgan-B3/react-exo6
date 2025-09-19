import React, { useEffect, useState } from 'react'
import { deleteNote, getNotes } from '../api.js';
import { getToken } from '../auth.js';
import { useNavigate } from 'react-router-dom';
import Note from '../components/Note.jsx';

function Notes() {
    const[notes, setNotes] = useState([]);
    const[error, setError] = useState();
    const navigate = useNavigate();

    const token = getToken();

    const getNotesApi = async()=>{
        try {
            const notes = await getNotes(token);
            setNotes(notes);
            console.log("Notes = ",notes);
        }catch(err){
            console.error(err)
            setError("Erreur de requête")
        }
    }

    async function callDeleteNote(id){
        const res = await deleteNote(token,id);
        console.log(res);
        getNotesApi();
    }

    useEffect(()=>{
        getNotesApi()
    },[notes.size])

    const notesList = notes.map(note=>{
        return(
            <Note key={note.id} note={note} actionDelete={()=>callDeleteNote(note.id)}/>
        )
    })


  return (
    <>
        <h1>Notes</h1>
        <button onClick={()=>navigate("/notes/new")}>Créer</button>
        {notes?.length > 0 ?(
            <ul>
                {notesList}
            </ul>
        ):(
            <p>Aucune note à afficher</p>
        )}
    </>
  )
}

export default Notes