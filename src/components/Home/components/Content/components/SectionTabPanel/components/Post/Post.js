import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../../../../../../../../providers/API';

import { Header, Gallery } from './components';

export function Post() {
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    posts: [],
    current_page: 0,
  });

  const { data, isLoading, isFetching, isRefetchError } = useQuery(
    ['posts', page],
    () => getPosts(page),
    {
      keepPreviousData: true,
      onSuccess: data => {
        if (data.message) {
          return;
        }
        // prevent array from repeating data
        if (state.page !== page) {
          setState(prev => ({ page, posts: [...prev.posts, ...data.data] }));
        }
      },
      onerror: error => {
        console.log(error);
      },
    }
  );

  return (
    <>
      <Header />
      <Gallery
        data={data}
        isRefetchError={isRefetchError}
        state={state}
        isLoading={isLoading}
        isFetching={isFetching}
        setPage={setPage}
      />
    </>
  );
}
