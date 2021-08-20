import {
    Collapse,
    Box,
} from '@chakra-ui/react'


export function Filter({ isOpen }) {
  
    return (
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            here goes the filter ... we are under construction
          </Box>
        </Collapse>
    )
  }