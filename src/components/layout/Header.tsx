import { 
  Box, 
  Container, 
  HStack, 
  Button, 
  Link, 
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Logo } from '../brand/Logo'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close mobile menu after navigation
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/pricing');
    onClose(); // Close mobile menu after navigation
  };

  const MobileNavLink = ({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent) => void; children: string }) => (
    <Link
      href={href}
      onClick={onClick}
      fontSize="20px"
      fontWeight="500"
      color="gray.700"
      _hover={{ color: 'primary.500' }}
      py={3}
      width="100%"
      textAlign="center"
      whiteSpace="nowrap"
    >
      {children}
    </Link>
  )

  return (
    <Box
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
      py={{ base: 2, md: 4 }}
      bg="transparent"
    >
      <Container maxW="80%" px={{ base: 3, md: 4 }}>
        <Box
          bg="gray.50"
          boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 4px 9px rgba(23, 26, 31, 0.11)"
          borderRadius={{ base: '12px', md: '48px' }}
          py={{ base: 2, md: 4 }}
          px={{ base: 3, md: 8 }}
          mx={{ base: 0, md: 4 }}
        >
          <HStack justify="space-between" align="center" spacing={{ base: 2, md: 4 }}>
            <Box flex="0 0 auto">
              <Logo />
            </Box>
            
            {/* Desktop Navigation */}
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
              <Link 
                href="#pricing"
                onClick={handlePricingClick}
                fontSize="18px" 
                color="gray.600" 
                _hover={{ color: 'primary.500' }}
              >
                Pricing
              </Link>
              <Link fontSize="18px" color="gray.600" _hover={{ color: 'primary.500' }}>Resources</Link>
            </HStack>

            {/* Desktop Buttons */}
            <HStack spacing={4} flex="0 0 auto" display={{ base: 'none', md: 'flex' }}>
              <Button variant="secondary">Sign in</Button>
              <Button
                bg="linear-gradient(135deg, #8BE6A8, #7AC4E8)"
                color="gray.800"
                borderRadius="18px"
                fontSize="18px"
                px={6}
                py={3}
                _hover={{ bg: 'primary.100' }}
              >
                Try Free
              </Button>
            </HStack>

            {/* Mobile CTA Button */}
            <Button
              bg="linear-gradient(135deg, #8BE6A8, #7AC4E8)"
              color="gray.800"
              borderRadius="12px"
              fontSize="12px"
              px={3}
              py={1.5}
              h="32px"
              _hover={{ bg: 'primary.100' }}
              display="none"
              mr={1}
            >
              Try Free
            </Button>

            {/* Mobile Burger Menu */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              color="gray.600"
              _hover={{ bg: 'gray.100' }}
              size="sm"
            />
          </HStack>
        </Box>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton size="lg" color="gray.600" />
          <DrawerHeader borderBottomWidth="1px" py={6}>
            <Logo />
          </DrawerHeader>

          <DrawerBody py={8} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <VStack spacing={6} align="center" width="100%" maxW="300px">
              <MobileNavLink href="#features" onClick={scrollToFeatures}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#pricing" onClick={handlePricingClick}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="#resources" onClick={onClose}>
                Resources
              </MobileNavLink>
              
              {/* Mobile Action Buttons */}
              <Box pt={8} borderTop="1px solid" borderColor="gray.200" width="100%">
                <VStack spacing={4} align="center">
                  <Button
                    variant="secondary"
                    width="100%"
                    height="48px"
                    fontSize="18px"
                    onClick={onClose}
                    whiteSpace="nowrap"
                  >
                    Sign in
                  </Button>
                  <Button
                    bg="linear-gradient(135deg, #8BE6A8, #7AC4E8)"
                    color="gray.800"
                    borderRadius="18px"
                    fontSize="18px"
                    height="48px"
                    width="100%"
                    _hover={{ bg: 'primary.100' }}
                    onClick={onClose}
                    whiteSpace="nowrap"
                  >
                    Try Free
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
} 