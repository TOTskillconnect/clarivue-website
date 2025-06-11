import { Box, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <Box as={RouterLink} to="/" _hover={{ cursor: 'pointer' }}>
      <Image
        src="/logo-transparent.png"
        alt="Clarivue"
        h="32px"
        objectFit="contain"
        fallback={
          <Box
            fontSize="2xl"
            fontWeight="bold"
            color="primary.500"
            letterSpacing="tight"
          >
            Clarivue
          </Box>
        }
      />
    </Box>
  )
} 