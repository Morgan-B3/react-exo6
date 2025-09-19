import React, { useState } from 'react'
import { getToken} from '../auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { createNote } from '../api.js';

function NoteForm() {
    const [content,setContent] = useState("");
    const [title,setTitle] = useState("");
    const [error,setError] = useState(null);
    const token = getToken();
    const navigate = useNavigate();
    const location = useLocation();
  
    const onSubmit = async (e) =>{
        e.preventDefault();
        setError(null);
        
        try {
            const res = await createNote({title,content,token});
            console.log("Response = ",res);
            const redirectTo = location.state?.from?.pathname || "/notes";
            navigate(redirectTo,{ replace:true})
        }catch(err){
            console.error(err)
            setError("Erreur de création")
        }
    }
  
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='title'>Titre : </label>
                    <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='content'>Contenu : </label>
                    <textarea id='content' required value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <button>Valider</button>
            </form>
        </div>
    )
}

export default NoteForm