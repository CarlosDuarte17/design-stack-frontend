import React from 'react';
import {
  Spinner,
  Button,
  Grid,
  Flex,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { PostItem } from './components/PostItem/PostItem';

export function Gallery({
  data,
  isRefetchError,
  isLoading,
  isFetching,
  hasNextPage,
  fetchNextPage,
}) {
  if (isRefetchError || (data && data.message)) {
    return (
      <Alert marginBlockStart="20px" status="error">
        <AlertIcon />
        The server respond message:
        {data.message}
      </Alert>
    );
  }

  if (data?.pages[0].data.length === 0) {
    return (
      <Alert marginBlockStart="20px" status="info">
        <AlertIcon />
        There are currently no posts
      </Alert>
    );
  }

  return (
    <React.Fragment>
      <Grid
        marginBlockStart="36px"
        grid-auto-rows="max-content"
        templateColumns="repeat(auto-fill, minmax(274px, 1fr))"
        gap="36px"
      >
        {data?.pages.map(page =>
          page?.data.map(post => <PostItem key={post.id} post={post} />)
        )}
      </Grid>
      {(isLoading || isFetching) && (
        <Flex marginBlockStart="36px" display="flex" justifyContent="center">
          <Spinner
            size="xl"
            emptyColor="gray.200"
            color="pink.500"
            thickness="4px"
          />
        </Flex>
      )}
      {hasNextPage && (
        <Flex justifyContent="center" marginBlockStart="20px">
          <Button
            size="sm"
            colorScheme="pink"
            onClick={fetchNextPage}
            // prevent disable the Load More button until we know a next posts is available
            disabled={!hasNextPage}
          >
            Load More Shots
          </Button>
        </Flex>
      )}
    </React.Fragment>
  );
}

// : (
//   <Flex justifyContent="flex-end">
//     <Badge
//       marginBlockStart="20px"
//       colorScheme="whatsapp"
//       fontSize="0.875rem"
//       p={2}
//       size="xl"
//     >
//       {' '}
//       Total posts: {data?.meta.total}
//     </Badge>
//   </Flex>
// )}
