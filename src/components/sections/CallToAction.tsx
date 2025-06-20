import { Box, Container, Heading, Button, HStack, VStack, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { ResponsiveImage } from '../common/ResponsiveImage'

const float = keyframes`
  0% { transform: translate(0, 0) rotate(-15deg); }
  50% { transform: translate(0, -10px) rotate(-12deg); }
  100% { transform: translate(0, 0) rotate(-15deg); }
`

const gamepadFloat = keyframes`
  0% { transform: translate(0, 0) rotate(-15deg) scale(1); }
  50% { transform: translate(0, -15px) rotate(-10deg) scale(1.02); }
  100% { transform: translate(0, 0) rotate(-15deg) scale(1); }
`

export const CallToAction = () => {
  const navigate = useNavigate()

  const handleBookDemo = () => {
    navigate('/book-demo')
  }

  return (
    <Box py={{ base: 8, md: 10, lg: 12 }} bg="#F2F9FF">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box
          bg="primary.500"
          borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
          py={{ base: 8, md: 10 }}
          px={{ base: 6, md: 8, lg: 12 }}
          position="relative"
          overflow="hidden"
        >
          {/* Mobile & Tablet Layout */}
          <VStack 
            spacing={{ base: 6, md: 8 }}
            align="center"
            textAlign="center"
            display={{ base: 'flex', lg: 'none' }}
            position="relative"
            zIndex={2}
          >
            {/* Mobile Game Pad - Top Position */}
            <Box
              display={{ base: "block", md: "none" }}
              position="relative"
              w={{ base: "120px", sm: "140px" }}
              h={{ base: "120px", sm: "140px" }}
              mx="auto"
              mb={6}
            >
              <ResponsiveImage
                src="/gamepad.png"
                alt="Gaming controller representing interactive interview experience"
                w="100%"
                h="100%"
                objectFit="contain"
                priority={false}
                mobileOptimized={true}
                sizes="(max-width: 640px) 120px, 140px"
                style={{
                  animation: `${gamepadFloat} 3s ease-in-out infinite`,
                  filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))"
                }}
              />
            </Box>

            {/* Mobile Heading */}
            <Heading
              as="h2"
              fontSize={{ base: "24px", sm: "28px", md: "32px" }}
              lineHeight={{ base: "1.2", md: "1.1" }}
              color="white"
              mb={{ base: 2, md: 4 }}
              px={{ base: 2, sm: 0 }}
            >
              Ready to try Clarivue?
            </Heading>

            {/* Mobile Buttons - Stacked on small screens, side-by-side on tablets */}
            <VStack 
              spacing={{ base: 4, sm: 0 }}
              width="100%"
              align="center"
            >
              <HStack 
                spacing={{ base: 0, sm: 4 }}
                flexDirection={{ base: 'column', sm: 'row' }}
                width="100%"
                justify="center"
              >
                <Button
                  bg="linear-gradient(135deg, #98F2B3, #87CEEB)"
                  color="gray.800"
                  fontSize={{ base: "16px", md: "18px" }}
                  height={{ base: "48px", md: "52px" }}
                  px={{ base: 6, md: 8 }}
                  borderRadius="26px"
                  _hover={{ bg: 'primary.100' }}
                  width={{ base: "100%", sm: "auto" }}
                  maxW={{ base: "280px", sm: "none" }}
                  mb={{ base: 3, sm: 0 }}
                >
                  Start for free
                </Button>

                <Button
                  bg="transparent"
                  color="white"
                  fontSize={{ base: "16px", md: "18px" }}
                  height={{ base: "48px", md: "52px" }}
                  px={{ base: 6, md: 8 }}
                  border="2px solid"
                  borderColor="primary.50"
                  borderRadius="26px"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  width={{ base: "100%", sm: "auto" }}
                  maxW={{ base: "280px", sm: "none" }}
                  onClick={handleBookDemo}
                >
                  Book a demo
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* Desktop Layout */}
          <Box 
            maxW="container.lg" 
            position="relative" 
            zIndex={2}
            display={{ base: 'none', lg: 'block' }}
          >
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
                bg="linear-gradient(135deg, #98F2B3, #87CEEB)"
                color="gray.800"
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
                onClick={handleBookDemo}
              >
                Book a demo
              </Button>
            </HStack>
          </Box>

          {/* Desktop Game Pad - Positioned on the right */}
          <Box 
            position="absolute" 
            right={12}
            top="50%" 
            transform="translateY(-50%)"
            display={{ base: 'none', lg: 'block' }}
          >
            <ResponsiveImage
              src="/gamepad.png"
              alt="Game controller decoration"
              width="160px"
              height="160px"
              priority={false}
              mobileOptimized={false}
              sizes="160px"
              style={{
                animation: `${gamepadFloat} 3s ease-in-out infinite`,
                filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))"
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 