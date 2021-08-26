// set the authentication token with personal access token
const token = '10|BAK0c5cUfYUsE6BGwj39iYEujMMzPuBZSK20FczR';

export async function fetchPost( formData) {
    const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
        headers: {
            Authorization: `Bearer ${ token }`
        },
        method: 'POST',
        body: formData,
    })

    const data = await resp.json();
    console.log(data);

    return data;
}

export async function getPosts( page ) {
    console.log('entra');
    const resp = await fetch(`http://127.0.0.1:8000/api/posts?page=${ page }`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    return data;
}  

export async function getPost( shot ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/posts/${ shot }`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    return data;
}  

export async function getUser() {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/user`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    return data;
}

export async function getPostsByTag( tag, page ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/tags/${ tag }/posts?page=${ page }`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    return data;
}

export async function getTag( tag ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/tags/${ tag }`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    return data;
}