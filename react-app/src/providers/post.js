export async function fetchPost( formData, token = '2|EfwLCPBetEBzPr8hkpbcEApSrUMGvGCJVOpBiCMf' ) {

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

export async function getPosts( token = '1|UHy9GIFeqXebYUEEmlpM6o9kYs89PTsSeSE5JrLG' ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        }
    })

    const data = await resp.json();
    // console.log(data.data[0]);

    return data;
}    

