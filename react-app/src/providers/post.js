export async function fetchPost( formData, token = '1|UHy9GIFeqXebYUEEmlpM6o9kYs89PTsSeSE5JrLG' ) {

    const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
        headers: {
            // 'Content-Type': `multipart/form-data`,
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