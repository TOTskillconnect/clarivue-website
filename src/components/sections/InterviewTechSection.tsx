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
    display={{ base: 'none', md: 'block' }}
  />
)

export const InterviewTechSection = () => {
  return (
    <Box py={{ base: 10, md: 14 }} bg="#F2F9FF">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box
          bg="primary.500"
          borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
          border="1px solid #9A999D"
          boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 0px 1px rgba(23, 26, 31, 0.07)"
          minH={{ base: "400px", md: "450px", lg: "500px" }}
          px={{ base: 6, md: 8 }}
          py={{ base: 8, md: 10 }}
          position="relative"
          overflow="visible"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Star Bubbles - Desktop Only */}
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
            borderRadius={{ base: "20px", md: "24px" }}
            py={{ base: 2, md: 3 }}
            px={{ base: 4, md: 6 }}
            width="fit-content"
            position={{ base: "relative", md: "absolute" }}
            top={{ base: "auto", md: "32px" }}
            left={{ base: "auto", md: "50%" }}
            transform={{ base: "none", md: "translateX(-50%)" }}
            boxShadow="0px 0px 2px rgba(23, 26, 31, 0.12), 0px 0px 1px rgba(23, 26, 31, 0.07)"
            mb={{ base: 6, md: 0 }}
          >
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="700"
              color="gray.700"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontFamily="Inter"
              whiteSpace="nowrap"
            >
              Interview Intelligence System
              <Box as="span" ml={2} fontSize={{ base: "18px", md: "20px" }}>✨</Box>
            </Text>
          </Box>

          {/* Main Content */}
          <Text
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight="600"
            lineHeight={{ base: "28px", sm: "30px", md: "32px" }}
            fontFamily="Inter"
            color="white"
            textAlign="center"
            maxW={{ base: "100%", md: "800px" }}
            mx="auto"
            mt={{ base: 4, md: "80px" }}
            mb={{ base: 8, md: "60px" }}
            px={{ base: 2, md: 0 }}
          >
            Our intelligent system joins your interviews to capture answers, read between the lines, suggest smart follow-ups, and score candidates — so you never miss what really matters.
          </Text>

          {/* Platform Icon */}
          <Box
            position={{ base: "relative", md: "absolute" }}
            width={{ base: "180px", md: "200px", lg: "215px" }}
            height={{ base: "185px", md: "205px", lg: "221px" }}
            left={{ base: "auto", md: "50%" }}
            bottom={{ base: "auto", md: "-110px" }}
            transform={{ base: "none", md: "translateX(-50%)" }}
            zIndex={2}
            mt={{ base: 4, md: 0 }}
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