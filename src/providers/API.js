// set the authentication token with personal access token
// const token = '1|vCvH5TeOUzA9QzuyMM2zvLDhHHhTEPkM9OU2ro6X';
const token = '10|r2d59tsorjmkBLqd340hADWnYuG4LuXjDUwdapHI';

export async function createPost(formData) {
  const resp = await fetch(`http://127.0.0.1:8000/api/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: formData,
  });

  const data = await resp.json();

  return data;
}

export async function getPosts({ pageParam = 1 }) {
  const resp = await fetch(
    `http://127.0.0.1:8000/api/posts?page=${pageParam}`,
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await resp.json();
  return data;
}

export async function getPost(shot) {
  const resp = await fetch(`http://127.0.0.1:8000/api/posts/${shot}`, {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await resp.json();
  return data;
}

export async function getUser() {
  const resp = await fetch(`http://127.0.0.1:8000/api/user`, {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await resp.json();
  return data;
}

export async function getPostsByTag(tag, page) {
  const resp = await fetch(
    `http://127.0.0.1:8000/api/tags/${tag}/posts?page=${page}`,
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await resp.json();
  return data;
}

export async function getTag(tag) {
  const resp = await fetch(`http://127.0.0.1:8000/api/tags/${tag}`, {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await resp.json();
  console.log(data);
  return data;
}

export async function setlikePost(post) {
  const resp = await fetch(`http://127.0.0.1:8000/api/posts/${post}/like`, {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  });

  const data = await resp.json();
  return data;
}
