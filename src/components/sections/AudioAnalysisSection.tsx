import { Box, Container, Text, HStack, VStack, Circle, Progress, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { ClarivueIcon } from '../icons/ClarivueIcon'

const MotionBox = motion(Box)

// Audio wave animation
const AudioWave = () => {
  const bars = 60 // Increased number of bars for longer wave
  
  return (
    <Box position="relative" height="120px" width="100%">
      <HStack 
        spacing={1.5}
        height="100%" 
        alignItems="center" 
        position="absolute"
        left="0" // Changed from right to left
        width="100%" // Simplified width calculation
      >
        {[...Array(bars)].map((_, i) => {
          const heightMultiplier = 1 + (i / bars) * 0.6;
          
          return (
            <MotionBox
              key={i}
              width="5px"
              bgGradient="linear(to-b, #86CCEB, #1076D1)"
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
              opacity={1} // Full opacity for all bars
            />
          );
        })}
      </HStack>
    </Box>
  )
}

// Circular progress indicators
const CircularIndicator = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <Box textAlign="center">
    <Circle size="60px" bg={`${color}.50`} position="relative" mb={2}>
      <Circle
        size="48px"
        bg="white"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="18px" fontWeight="600" color={`${color}.500`}>
          {value}%
        </Text>
      </Circle>
    </Circle>
    <Text fontSize="14px" color="gray.600" fontWeight="500">
      {label}
    </Text>
  </Box>
)

export const AudioAnalysisSection = () => {
  return (
    <Box py={16} bg="#F2F9FF">
      <Container maxW="container.xl">
        <Box
          bg="white"
          borderRadius="24px"
          p={12}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack spacing={12} align="stretch">
            <Text
              fontSize="32px"
              fontWeight="700"
              color="primary.500"
              fontFamily="heading"
              letterSpacing="-0.02em"
            >
              Clarivue will listen to and analyze the interview transcript...
            </Text>

            <HStack spacing={0} align="center">
              {/* Left side - Audio wave */}
              <Box flex="1" position="relative" display="flex" justifyContent="flex-end">
                <Box 
                  position="relative"
                  width="400px"
                  mr="-40px"
                  transform="translateX(-5%)" // Move 5% to the left
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