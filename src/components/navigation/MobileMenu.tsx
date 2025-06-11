import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        display={{ base: 'flex', md: 'none' }}
        variant="ghost"
        onClick={onOpen}
        aria-label="Open menu"
      >
        <HamburgerIcon boxSize={6} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
          >
            SkillConnect
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              <ChakraLink
                as={RouterLink}
                to="/"
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: 'blue.500' }}
                onClick={onClose}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to="/explore"
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: 'blue.500' }}
                onClick={onClose}
              >
                Explore
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to="/skills"
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: 'blue.500' }}
                onClick={onClose}
              >
                Skills
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to="/community"
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: 'blue.500' }}
                onClick={onClose}
              >
                Community
              </ChakraLink>

              <VStack spacing={4} mt={8}>
                <Button variant="ghost" colorScheme="blue" w="full">
                  Sign In
                </Button>
                <Button colorScheme="blue" w="full">
                  Sign Up
                </Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
} 