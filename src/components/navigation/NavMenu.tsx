import { Box, Button, Stack, Link } from '@chakra-ui/react'

export const NavMenu = () => {
  return (
    <Stack direction="row" spacing={8} align="center">
      <Box display={{ base: 'none', md: 'flex' }} gap={6}>
        <Link
          href="/"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Home
        </Link>
        <Link
          href="/explore"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Explore
        </Link>
        <Link
          href="/skills"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Skills
        </Link>
        <Link
          href="/community"
          fontWeight="medium"
          color="gray.600"
          _hover={{ color: 'blue.500' }}
        >
          Community
        </Link>
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