import { Box, Container, Heading, Button, HStack, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const float = keyframes`
  0% { transform: translate(0, 0) rotate(-15deg); }
  50% { transform: translate(0, -10px) rotate(-12deg); }
  100% { transform: translate(0, 0) rotate(-15deg); }
`

export const CallToAction = () => {
  return (
    <Box py={12} bg="#F2F9FF">
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

          {/* Decorative element */}
          <Box 
            position="absolute" 
            right={12}
            top="50%" 
            transform="translateY(-50%)"
          >
            {/* Game pad */}
            <Image
              src="/game-pad.png"
              alt="Game controller decoration"
              width="160px"
              height="160px"
              animation={`${float} 3s ease-in-out infinite`}
              filter="drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 