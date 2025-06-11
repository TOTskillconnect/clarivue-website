import { Box, Container, Text, HStack, VStack, Circle, Progress, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { ClarivueIcon } from '../icons/ClarivueIcon'

const MotionBox = motion(Box)

// Audio wave animation with responsive bar count
const AudioWave = ({ isMobile = false }: { isMobile?: boolean }) => {
  const bars = isMobile ? 30 : 60 // Reduced bars for mobile
  
  return (
    <Box position="relative" height={{ base: "80px", md: "100px", lg: "120px" }} width="100%">
      <HStack 
        spacing={{ base: 1, md: 1.5 }}
        height="100%" 
        alignItems="center" 
        position="absolute"
        left="0"
        width="100%"
      >
        {[...Array(bars)].map((_, i) => {
          const heightMultiplier = 1 + (i / bars) * 0.6;
          
          return (
            <MotionBox
              key={i}
              width={{ base: "3px", md: "4px", lg: "5px" }}
              bgGradient="linear(to-b, primary.300, primary.500)"
              borderRadius="full"
              initial={{ height: "20%" }}
              animate={{
                height: [
                  `${25 * heightMultiplier}%`,
                  `${(Math.random() * 70 + 50) * heightMultiplier}%`,
                  `${25 * heightMultiplier}%`
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.025,
                ease: "easeInOut"
              }}
              opacity={1}
            />
          );
        })}
      </HStack>
    </Box>
  )
}

// Circular progress indicators (kept for potential future use)
const CircularIndicator = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <Box textAlign="center">
    <Circle size={{ base: "50px", md: "60px" }} bg={`${color}.50`} position="relative" mb={2}>
      <Circle
        size={{ base: "40px", md: "48px" }}
        bg="white"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" color={`${color}.500`}>
          {value}%
        </Text>
      </Circle>
    </Circle>
    <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600" fontWeight="500">
      {label}
    </Text>
  </Box>
)

export const AudioAnalysisSection = () => {
  return (
    <Box py={{ base: 8, md: 12, lg: 16 }} bg="#F2F9FF">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box
          bg="white"
          borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
          p={{ base: 6, md: 8, lg: 12 }}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack spacing={{ base: 8, md: 10, lg: 12 }} align="stretch">
            <Text
              fontSize={{ base: "24px", sm: "28px", md: "32px" }}
              fontWeight="700"
              color="primary.500"
              fontFamily="heading"
              letterSpacing="-0.02em"
              textAlign={{ base: "center", md: "left" }}
              px={{ base: 2, md: 0 }}
            >
              Clarivue will listen to and analyze the interview transcript...
            </Text>

            {/* Mobile Layout - Vertical Stack */}
            <VStack 
              spacing={8} 
              align="center"
              display={{ base: 'flex', lg: 'none' }}
            >
              {/* Mobile Clarivue Icon */}
              <Box 
                width={{ base: "100px", sm: "120px", md: "140px" }}
                height={{ base: "100px", sm: "120px", md: "140px" }}
                mb={4}
              >
                <Image
                  src="/clarivue-icon-new.png"
                  alt="Clarivue"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>

              {/* Mobile Audio Wave */}
              <Box 
                width="100%"
                maxW={{ base: "300px", sm: "350px", md: "400px" }}
                mb={6}
              >
                <AudioWave isMobile={true} />
              </Box>

              {/* Mobile Analysis Results */}
              <Box width="100%" maxW={{ base: "320px", sm: "400px", md: "500px" }}>
                <Image
                  src="/mock-up-results.png"
                  alt="Analysis Results"
                  width="100%"
                  height="auto"
                  objectFit="contain"
                  borderRadius="12px"
                  boxShadow="0px 2px 12px rgba(0, 0, 0, 0.08)"
                />
              </Box>
            </VStack>

            {/* Desktop Layout - Horizontal Stack */}
            <HStack 
              spacing={0} 
              align="center"
              display={{ base: 'none', lg: 'flex' }}
            >
              {/* Left side - Audio wave */}
              <Box flex="1" position="relative" display="flex" justifyContent="flex-end">
                <Box 
                  position="relative"
                  width="400px"
                  mr="-40px"
                  transform="translateX(-5%)"
                >
                  <AudioWave />
                </Box>
              </Box>

              {/* Icon positioned to overlap with wave end */}
              <Box 
                position="relative" 
                width="140px"
                height="140px"
                zIndex={2}
              >
                <Image
                  src="/clarivue-icon-new.png"
                  alt="Clarivue"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>

              {/* Right side - Analysis Content */}
              <Box flex="1" pl={8}>
                <Image
                  src="/mock-up-results.png"
                  alt="Analysis Results"
                  width="100%"
                  height="auto"
                  objectFit="contain"
                />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
} 