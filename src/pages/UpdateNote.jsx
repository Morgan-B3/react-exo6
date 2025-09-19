import React, { useEffect, useState } from 'react'
import NoteForm from '../components/NoteForm.jsx'
import { useParams } from 'react-router-dom'
import { getNote } from '../api.js';
import { getToken } from '../auth.js';

function UpdateNote() {
    const {id} = useParams();
    const [note, setNote] = useState();
    const token = getToken();
    const [loading, setLoading] = useState(true);

    async function getNoteApi(){
        const res = await getNote({token,id})
        console.log(res);
        setNote(res);
        setLoading(false);
    }

    useEffect(()=>{
        getNoteApi()
    },[id])

    
  return (
    <>
        <h1>Modification de la note n°{id}</h1>
        {loading ? "" : (
            <NoteForm note={note}/>
        )}
    </>
  )
}

export default UpdateNote