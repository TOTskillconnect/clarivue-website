import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

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
            bgGradient="linear(to-r, primary.500, secondary.500)"
            bgClip="text"
          >
            Clarivue
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Link href="/" onClick={onClose}>Home</Link>
              <Link href="/explore" onClick={onClose}>Explore</Link>
              <Link href="/skills" onClick={onClose}>Skills</Link>
              <Link href="/community" onClick={onClose}>Community</Link>
              <Button variant="ghost">Sign In</Button>
              <Button colorScheme="blue">Sign Up</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
} 