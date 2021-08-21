import { getUser } from '../providers/user';

export function createResource(promise) {
  let status = 'pending';
  let result = promise.then(
    resolved => {
      status = 'success';
      result = resolved;
    },
    rejected => {
      status = 'error';
      result = rejected;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw result;
      if (status === 'error') throw result;
      if (status === 'success') return result;
      throw new Error('This should be impossible');
    },
  };
}

export function fetchData() {
  const userPromise = getUser();

  return userPromise;
}

// export function fetchData() {
//   const userPromise = fetchUser();

//   return {
//     user: createResource(userPromise),
//   };
// }
