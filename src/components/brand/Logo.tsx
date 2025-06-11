import { Box, Image, Link } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Link href="/" _hover={{ textDecoration: 'none' }}>
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
    </Link>
  )
} 