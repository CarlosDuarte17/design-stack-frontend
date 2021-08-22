const token = '2|EfwLCPBetEBzPr8hkpbcEApSrUMGvGCJVOpBiCMf';

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
    // return await ky(`http://127.0.0.1:8000/api/user`).json();
}

export async function getPosts( page ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/posts?page=${ page }`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    console.log(data);
    return data;
}  

// export async function getPosts() {
    
//     const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
//         headers: {
//             Accept: `application/json`,
//             Authorization: `Bearer ${ token }`
//         }
//     })

//     const data = await resp.json();

//     return data;
// } 
