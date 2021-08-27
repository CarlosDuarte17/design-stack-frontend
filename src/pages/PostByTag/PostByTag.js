import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Gallery } from '../../components/Home/components/Content/components/SectionTabPanel/components/Post/components';
import { getTag, getPostsByTag } from '../../providers/API';

export function PostByTag() {
  let { tag } = useParams();

  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    posts: [],
    current_page: 0,
  });

  const {
    data: tagInfo,
    isLoading,
    isFetching,
    isRefetchError,
  } = useQuery(['tag', tag], () => getTag(tag));
  const { data } = useQuery(
    ['postsbytag', page],
    () => getPostsByTag(tagInfo?.data.id, page),
    {
      keepPreviousData: true,
      enabled: !!tagInfo?.data.id,
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
        {data && (
          <Gallery
            data={data}
            isRefetchError={isRefetchError}
            state={state}
            isLoading={isLoading}
            isFetching={isFetching}
            setPage={setPage}
          />
        )}
      </Container>
    </div>
  );
}
