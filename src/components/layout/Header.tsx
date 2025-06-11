import { Box, Container, HStack, Button, Link } from '@chakra-ui/react'
import { Logo } from '../brand/Logo'

export const Header = () => {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
      py={4}
      bg="transparent"
    >
      <Container maxW="100%" px={4}>
        <Box
          bg="gray.50"
          boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 4px 9px rgba(23, 26, 31, 0.11)"
          borderRadius={{ base: '0', md: '48px' }}
          py={4}
          px={{ base: 4, md: 8 }}
          mx={{ base: 0, md: 4 }}
        >
          <HStack justify="space-between" align="center" spacing={8}>
            <Box flex="0 0 auto">
              <Logo />
            </Box>
            
            <HStack spacing={8} flex="1" justify="center" display={{ base: 'none', md: 'flex' }}>
              <Link 
                href="#features"
                onClick={scrollToFeatures}
                fontSize="18px" 
                color="gray.600" 
                _hover={{ color: 'primary.500' }}
              >
                Features
              </Link>
              <Link fontSize="18px" color="gray.600" _hover={{ color: 'primary.500' }}>Pricing</Link>
              <Link fontSize="18px" color="gray.600" _hover={{ color: 'primary.500' }}>Resources</Link>
            </HStack>

            <HStack spacing={4} flex="0 0 auto">
              <Button variant="secondary">Sign in</Button>
              <Button
                bg="primary.50"
                color="primary.600"
                borderRadius="18px"
                fontSize="18px"
                px={6}
                py={3}
                _hover={{ bg: 'primary.100' }}
              >
                Try Free
              </Button>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
} 