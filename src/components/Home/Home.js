import { Container } from '@chakra-ui/react';
import React from 'react';
import { Content } from './components';

export function Home() {
  return (
    <div>
      <Container maxW="100%" m={0} paddingBlock="32px" paddingInline="72px">
        <Content />
      </Container>
    </div>
  );
}
