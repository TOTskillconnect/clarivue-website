import { Box, Container, Heading, Button, HStack, Image } from '@chakra-ui/react'

export const CallToAction = () => {
  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <Box
          bg="primary.500"
          borderRadius="10px"
          py={10}
          px={12}
          position="relative"
          overflow="hidden"
        >
          <Box maxW="container.lg" position="relative" zIndex={2}>
            <Heading
              as="h2"
              fontSize="32px"
              lineHeight="26px"
              color="white"
              mb={8}
            >
              Ready to try Clarivue?
            </Heading>

            <HStack spacing={4}>
              <Button
                bg="primary.50"
                color="gray.700"
                fontSize="18px"
                height="52px"
                px={6}
                borderRadius="26px"
                _hover={{ bg: 'primary.100' }}
              >
                Start for free
              </Button>

              <Button
                bg="transparent"
                color="white"
                fontSize="18px"
                height="52px"
                px={6}
                border="2px solid"
                borderColor="primary.50"
                borderRadius="26px"
                _hover={{ bg: 'whiteAlpha.100' }}
              >
                Book a demo
              </Button>
            </HStack>
          </Box>

          {/* Decorative elements */}
          <HStack 
            position="absolute" 
            right={4} 
            top="50%" 
            transform="translateY(-50%)"
            spacing={6}
            opacity={1}
          >
            {/* Game pad */}
            <Image
              src="/game-pad.svg"
              alt="Game controller decoration"
              width="150px"
              height="150px"
              transform="rotate(-15deg)"
              opacity={0.8}
              filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))"
            />
            
            {/* Logo watermark */}
            <Image
              src="/white-logo-clarivue.png"
              alt="Clarivue-logo-white"
              width="172px"
              height="172px"
              opacity={1}
            />
          </HStack>
        </Box>
      </Container>
    </Box>
  )
} 