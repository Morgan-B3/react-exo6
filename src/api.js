const BASE_URL = "http://localhost:8080/api"

// inscription
export async function register({ email, password}) {
    console.log(`email : ${email} password : ${password}` )
    const res = await fetch(`${BASE_URL}/auth/register`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email,password})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Register failed : ${res.status} ${msg}`)
    }
    
    return  res.json();
}

// connexion
export async function login({ email, password}) {
    console.log(`email : ${email} password : ${password}` )
    const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email,password})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Login failed : ${res.status} ${msg}`)
    }

    return res.json();
}


// ressources protégées
export async function getNotes(token) {
    console.log(token);
    
    const res = await fetch(`${BASE_URL}/notes`,{
        method: "GET",
        headers: { Authorization : `Bearer ${token}` },
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }

    return res.json();
}

export async function getNote({token, id}) {
    const res = await fetch(`${BASE_URL}/notes/${id}`,{
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}` 
        },
    });
    
    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }
    
    return res.json();
}

export async function createNote({token, title, content}) {
    console.log("token :",token);
    console.log("title :",title);
    console.log("content :",content);
    
    const res = await fetch(`${BASE_URL}/notes`,{
        method: "POST",
        headers: { 
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}` 
        },
        body: JSON.stringify({title,content})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }

    return res.json();
}

export async function deleteNote(token, id) {
    console.log("token:", token);
    console.log("id:", id);
    
    const res = await fetch(`${BASE_URL}/notes/${id}`,{
        method: "DELETE",
        headers: { 
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }

    return res;
}

export async function updateNote({token, title, content, id}) {
    console.log("token",token);
    console.log("title",title);
    console.log("content",content);
    console.log("id:",id);
    
    const res = await fetch(`${BASE_URL}/notes/${id}`,{
        method: "PUT",
        headers: { 
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}` 
        },
        body:JSON.stringify({title,content})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }

    return res.json();
}
