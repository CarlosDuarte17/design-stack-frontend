const token = '2|EfwLCPBetEBzPr8hkpbcEApSrUMGvGCJVOpBiCMf';

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