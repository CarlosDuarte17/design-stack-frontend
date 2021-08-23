// set the authentication token with personal access token
const token = '10|XEU3S0kZ6titj4kuW1pMCTdLHoI9NoPe4TiR1dLa';

export async function fetchPost( formData) {

    const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
        headers: {
            Authorization: `Bearer ${ token }`
        },
        method: 'POST',
        body: formData,
    })

    const data = await resp.json();

    return data;
}

export async function getPosts( page ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/posts?page=${ page }`, {
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