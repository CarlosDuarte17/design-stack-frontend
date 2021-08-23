import { Suspense } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons'

import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  UnorderedList,
  ListItem,
  Button,
  Spinner
} from '@chakra-ui/react';

import { UserImage } from './components';
import { WorkIcon } from '../../../../assets/icons/Icons';

export function NavRight() {
  return (
    <>
      <Flex>
        <UnorderedList alignItems="center" display="flex" fontWeight={500} color="#6e6d7a" fontSize="0.875rem" styleType="none">
          <ListItem marginInline="10px">
            <InputGroup maxW={124}>
              <InputLeftElement
                color="gray.400"
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input
                bgColor="#f3f3f4"
                border='1px solid transparent'
                borderColor='transparent'
                borderRadius={8}
                fontSize="0.875rem"
                maxW={124} type="search"
                paddingStart="32px"
                placeholder="Search"
                _focus={{ backgroundColor: 'white', boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)', borderColor: 'rgba(234,76,137,0.4)' }}
                _hover={{ backgroundColor: 'white', boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)' }} />
            </InputGroup>
          </ListItem>
          <ListItem marginInline="10px">
            <WorkIcon color="gray.400" cursor="pointer" h="20px" w="20px" />
          </ListItem>
          <ListItem marginInline="10px">
              <Suspense fallback={ <Spinner /> }>
                <UserImage />
              </Suspense>
          </ListItem>
          <ListItem marginInlineStart="10px">
            <Button cursor="pointer" as={ReactLink} colorScheme="pink" fontSize="0.875rem" to="/uploads/new">Upload</Button>
          </ListItem>
        </UnorderedList>


      </Flex>
    </>
  )
}
