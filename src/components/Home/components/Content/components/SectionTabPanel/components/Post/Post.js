import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { getPosts } from '../../../../../../../../providers/API';

import { Header, Gallery } from './components';

export function Post() {
  const {
    data,
    isLoading,
    isFetching,
    isRefetchError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('posts', getPosts, {
    getNextPageParam: lastPage => {
      if (lastPage.links.next) {
        return lastPage.meta.current_page + 1;
      }
      return false;
    },
  });

  return (
    <>
      <Header />
      <Gallery
        data={data}
        hasNextPage={hasNextPage}
        isRefetchError={isRefetchError}
        isLoading={isLoading}
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}
