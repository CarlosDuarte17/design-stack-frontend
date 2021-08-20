export async function setPost( formData, token = '1|qyRpdlGkVzIsQQ89XCoaYro8ddTc5bnqg2nxvLf7' ) {
    
    const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
        headers: {
            'Content-Type': `multipart/form-data`,
            Accept: `application/json`,
            Authorization: `Bearer ${ token }`
        },
        method: 'POST',
        body: formData,
    })

    const data = await resp.json();

    return data;
    // return await ky(`http://127.0.0.1:8000/api/user`).json();
}    