import { Box, Container, Text, Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionImage = motion(Image)
const MotionBox = motion(Box)

const StarBubble = ({ size, left, top, delay }: { size: number, left: string, top: string, delay: number }) => (
  <MotionBox
    position="absolute"
    width={`${size}px`}
    height={`${size}px`}
    left={left}
    top={top}
    borderRadius="full"
    bg="rgba(255, 255, 255, 0.1)"
    initial={{ scale: 0.8, opacity: 0.3 }}
    animate={{ 
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
)

export const InterviewTechSection = () => {
  return (
    <Box py={14} bg="gray.50">
      <Container maxW="container.xl">
        <Box
          bg="primary.500"
          borderRadius="16px"
          border="1px solid #9A999D"
          boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 0px 1px rgba(23, 26, 31, 0.07)"
          height="320px"
          px={8}
          position="relative"
          overflow="visible"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Star Bubbles */}
          <StarBubble size={20} left="10%" top="20%" delay={0} />
          <StarBubble size={15} left="85%" top="15%" delay={1} />
          <StarBubble size={25} left="20%" top="70%" delay={1.5} />
          <StarBubble size={18} left="75%" top="65%" delay={0.5} />
          <StarBubble size={22} left="45%" top="25%" delay={2} />
          <StarBubble size={16} left="60%" top="75%" delay={2.5} />

          {/* Badge */}
          <Box
            bg="primary.50"
            border="1px solid #9ECDF3"
            borderRadius="24px"
            py={2}
            px={4}
            width="fit-content"
            position="absolute"
            top="32px"
            left="50%"
            transform="translateX(-50%)"
            boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 0px 1px rgba(23, 26, 31, 0.07)"
          >
            <Text
              fontSize="18px"
              fontWeight="700"
              color="gray.700"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontFamily="Inter"
              whiteSpace="nowrap"
            >
              Interview Intelligence System
              <Box as="span" ml={2} fontSize="20px">✨</Box>
            </Text>
          </Box>

          {/* Main Content */}
          <Text
            fontSize="22px"
            fontWeight="600"
            lineHeight="32px"
            fontFamily="Inter"
            color="white"
            textAlign="center"
            maxW="800px"
            mx="auto"
            mt="80px"
            mb="60px"
          >
            Our intelligent system joins your interviews to capture answers, read between the lines, suggest smart follow-ups, and score candidates — so you never miss what really matters.
          </Text>

          {/* Platform Icon */}
          <Box
            position="absolute"
            width="215px"
            height="221px"
            left="50%"
            bottom="-110px"
            transform="translateX(-50%)"
            zIndex={2}
          >
            <MotionImage
              src="/platform-icon.png"
              alt="Interactive Demo Platform"
              width="100%"
              height="100%"
              objectFit="contain"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 