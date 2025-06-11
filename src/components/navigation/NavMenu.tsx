import { Box, Button, Stack, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const NavMenu = () => {
  return (
    <Stack direction="row" spacing={8} align="center">
      <Box display={{ base: 'none', md: 'flex' }} gap={6}>
        <ChakraLink
          as={RouterLink}
          to="/"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to="/explore"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Explore
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to="/skills"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Skills
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to="/community"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Community
        </ChakraLink>
      </Box>
      
      <Stack direction="row" spacing={4}>
        <Button variant="ghost" colorScheme="blue">
          Sign In
        </Button>
        <Button colorScheme="blue">
          Sign Up
        </Button>
      </Stack>
    </Stack>
  )
} 