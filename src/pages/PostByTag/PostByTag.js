import React from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';

import { Gallery } from '../../components/Home/components/Content/components/SectionTabPanel/components/Post/components';
import { getTag, getPostsByTag } from '../../providers/API';

export function PostByTag() {
  let { tag } = useParams();

  const { data: tagInfo } = useQuery(['tag', tag], () => getTag(tag));

  const {
    data,
    isLoading,
    isFetching,
    isRefetchError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'posts',
    ({ pageParam }) => getPostsByTag(tagInfo.data.id, pageParam),
    {
      enabled: !!tagInfo?.data.id,
      getNextPageParam: lastPage => {
        if (lastPage.links.next) {
          return lastPage.meta.current_page + 1;
        }
        return false;
      },
    }
  );

  return (
    <div>
      <Container maxW="100%" m={0} paddingBlock="104px" paddingInline="72px">
        <Flex alignItems="center" direction="column" wrap="wrap">
          <Heading
            fontSize="2rem"
            marginBlock="10px"
            textTransform="capitalize"
          >
            {tagInfo?.data.tag}
          </Heading>
          <Text color="gray.600">
            {tagInfo?.data.totalShots} inspirational designs, illustrations, and
            graphic elements from the world’s best designers.
          </Text>
        </Flex>
        <Gallery
          data={data}
          hasNextPage={hasNextPage}
          isRefetchError={isRefetchError}
          isLoading={isLoading}
          isFetching={isFetching}
          fetchNextPage={fetchNextPage}
        />
      </Container>
    </div>
  );
}
