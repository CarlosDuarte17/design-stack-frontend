export async function fetchUser( token = '1|qyRpdlGkVzIsQQ89XCoaYro8ddTc5bnqg2nxvLf7' ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/user`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();

    return data;
    // return await ky(`http://127.0.0.1:8000/api/user`).json();
}    