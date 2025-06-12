'use client'

import { Box, Container, Heading, Text, Button, HStack, VStack } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useRef } from 'react'
import { ResponsiveImage } from '../common/ResponsiveImage'

const MotionBox = motion(Box)

// Optimize animations using CSS transform instead of keyframes
const float = keyframes`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, -20px, 0) rotate(5deg); }
  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
`

const pulse = keyframes`
  0% { transform: scale3d(1, 1, 1) rotate(0deg); }
  50% { transform: scale3d(1.05, 1.05, 1) rotate(3deg); }
  100% { transform: scale3d(1, 1, 1) rotate(0deg); }
`

// Memoize BrandLogos component to prevent unnecessary re-renders
const BrandLogos = memo(() => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const startAnimation = useCallback(async () => {
    if (!containerRef.current) return;
    
    const scrollWidth = containerRef.current.scrollWidth;
    const viewportWidth = containerRef.current.offsetWidth;
    const distance = -(scrollWidth - viewportWidth);

    await controls.start({
      x: [0, distance],
      transition: {
        duration: Math.abs(distance) / 50,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    });
  }, [controls]);

  useEffect(() => {
    startAnimation();
    
    // Add resize observer to handle viewport changes
    const resizeObserver = new ResizeObserver(() => {
      startAnimation();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      controls.stop(); // cancel animation on unmount
      resizeObserver.disconnect();
    };
  }, [startAnimation, controls]);

  const logos = [
    { text: "Brex", color: "gray.300", weight: "700" },
    { text: "Quora", color: "white", weight: "700" },
    { text: "PEO", color: "white", weight: "700" },
    { text: "CHRESN", color: "white", weight: "400" },
    { text: "IMPROBABLE", color: "white", weight: "400" },
    { text: "SAngelList", color: "gray.300", weight: "700" },
    { text: "Engine", color: "gray.400", weight: "700" }
  ];

  const LogoList = memo(() => (
    <HStack spacing={8} justify="center" flexShrink={0}>
      {logos.map((logo, index) => (
        <Text
          key={`${logo.text}-${index}`}
          fontSize="21px"
          fontWeight={logo.weight}
          color={logo.color}
          style={{ willChange: 'transform' }}
        >
          {logo.text}
        </Text>
      ))}
    </HStack>
  ));

  LogoList.displayName = 'LogoList';

  return (
    <Box 
      overflow="hidden" 
      width="100%"
      ref={containerRef}
    >
      <MotionBox
        display="flex"
        animate={controls}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        <LogoList />
        <LogoList />
      </MotionBox>
    </Box>
  );
});

BrandLogos.displayName = 'BrandLogos';

// Memoize BackgroundDecorations for performance
const BackgroundDecorations = memo(() => {
  return (
    <>
      {/* Optimize animations using transform3d */}
      <MotionBox
        position="absolute"
        top="5%"
        left="5%"
        width="400px"
        height="400px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(223,246,255,0.2) 0%, rgba(16,118,209,0.1) 100%)"
        filter="blur(40px)"
        style={{ willChange: 'transform' }}
        animate={{
          y: [-20, 0, -20],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        zIndex={0}
      />

      {/* Gradient Blob 2 */}
      <MotionBox
        position="absolute"
        bottom="15%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(30,42,120,0.15) 0%, rgba(95,157,247,0.1) 100%)"
        filter="blur(30px)"
        animation={`${pulse} 10s ease-in-out infinite`}
        zIndex={0}
      />

      {/* Geometric Shapes */}
      <Box
        position="absolute"
        top="20%"
        right="15%"
        width="200px"
        height="200px"
        opacity={0.1}
        borderLeft="2px solid"
        borderBottom="2px solid"
        borderColor="primary.50"
        transform="rotate(45deg)"
        zIndex={0}
      />

      <Box
        position="absolute"
        bottom="30%"
        left="10%"
        width="150px"
        height="150px"
        opacity={0.1}
        border="2px solid"
        borderColor="primary.100"
        borderRadius="24px"
        transform="rotate(-15deg)"
        zIndex={0}
      />

      {/* Dots Pattern */}
      <Box
        position="absolute"
        top="40%"
        left="20%"
        width="100px"
        height="200px"
        opacity={0.2}
        backgroundImage="radial-gradient(circle, #DFF6FF 1px, transparent 1px)"
        backgroundSize="10px 10px"
        zIndex={0}
      />
    </>
  )
})

BackgroundDecorations.displayName = 'BackgroundDecorations'

export const HeroSection = () => {
  return (
    <Box
      bgGradient="linear(to-b, secondary.700, secondary.500 65%, primary.100)"
      minH="90vh"
      pt={{ base: "100px", md: "140px" }}
      pb={0}
      overflow="hidden"
      position="relative"
    >
      <BackgroundDecorations />
      <Container maxW="container.xl" px={{ base: 4, md: 6 }} position="relative">
        <VStack spacing={5} align="center" maxW="1011px" mx="auto">
          {/* Hero Text */}
          <Box textAlign="center" maxW="900px">
            <Heading
              as="h1"
              fontSize={{ base: "36px", sm: "48px", md: "72px" }}
              lineHeight={{ base: "44px", sm: "56px", md: "80px" }}
              color="gray.50"
              mb={8}
              fontWeight="bold"
              whiteSpace={{ base: "normal", md: "nowrap" }}
            >
              Your AI Interview Co-Pilot
            </Heading>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "24px" }}
              lineHeight={{ base: "28px", sm: "32px", md: "36px" }}
              color="white"
              mb={3}
              fontWeight="600"
            >
              Real-time notes. Live follow-up questions. Instant scoring.
            </Text>
            <Text
              fontSize={{ base: "16px", sm: "18px", md: "20px" }}
              lineHeight={{ base: "24px", sm: "28px", md: "32px" }}
              color="whiteAlpha.900"
              maxW="815px"
              mx="auto"
              px={{ base: 2, sm: 0 }}
            >
              Purpose-built for recruiting, trusted by modern hiring teams.
            </Text>
          </Box>

          {/* CTA Button */}
          <Button
            background="linear-gradient(135deg, #98F2B3, #87CEEB)"
            color="gray.800"
            size="lg"
            height={{ base: "60px", md: "81px" }}
            px={{ base: "6", md: "8" }}
            fontSize={{ base: "18px", md: "23px" }}
            fontWeight="600"
            borderRadius="16px"
            _hover={{ 
              background: "linear-gradient(135deg, #8BE6A8, #7AC4E8)",
              transform: "translateY(-2px)",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)"
            }}
            transition="all 0.3s ease"
            rightIcon={<Box as="span" ml={2}>➜</Box>}
          >
            Get Started Free
          </Button>

          {/* Loved by text */}
          <Text fontSize={{ base: "16px", md: "20px" }} color="gray.50" textAlign="center">
            Loved by recruiters, hiring managers, and leaders at:
          </Text>

          {/* Brand Logos */}
          <BrandLogos />

          {/* Images Container - Responsive Layout */}
          <Box 
            position="relative" 
            w="full" 
            mt={1} 
            h={{ base: "auto", md: "558px" }}
            display={{ base: "block", md: "block" }}
          >
            {/* Mobile Layout - Stack images vertically */}
            <VStack 
              spacing={6} 
              display={{ base: "flex", md: "none" }}
              pt={6}
              pb={8}
            >
              {/* Mobile: Main Dashboard Image */}
              <Box w="100%" maxW="400px">
                <ResponsiveImage
                  src="/interview-dashboards.png"
                  alt="Interview dashboard showing a UI/UX designer interview"
                  w="100%"
                  borderRadius="16px"
                  boxShadow="0px 6px 20px rgba(0, 0, 0, 0.12)"
                  loading="eager"
                />
              </Box>

              {/* Mobile: Side Images in Row */}
              <HStack spacing={4} w="100%" justify="center">
                <Box flex="1" maxW="180px">
                  <ResponsiveImage
                    src="/interview-card.png"
                    alt="Interview candidate scoring card"
                    w="100%"
                    borderRadius="12px"
                    boxShadow="0px 4px 16px rgba(0, 0, 0, 0.1)"
                    loading="lazy"
                  />
                </Box>
                <Box flex="1" maxW="180px">
                  <ResponsiveImage
                    src="/interview-analysis.png"
                    alt="Interview analysis and shared highlight"
                    w="100%"
                    borderRadius="12px"
                    boxShadow="0px 4px 16px rgba(0, 0, 0, 0.1)"
                    loading="lazy"
                  />
                </Box>
              </HStack>
            </VStack>

            {/* Desktop Layout - Absolute positioning */}
            <Box 
              position="relative" 
              display={{ base: "none", md: "block" }}
              h="558px"
            >
              {/* Left Side Image */}
              <Box
                position="absolute"
                left={{ md: "-210px", lg: "-180px", xl: "-210px" }}
                top="60%"
                transform="translateY(-50%)"
                zIndex={1}
                width={{ md: "320px", lg: "340px", xl: "360px" }}
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-52%) scale(1.02)",
                }}
              >
                <ResponsiveImage
                  src="/interview-card.png"
                  alt="Interview candidate scoring card"
                  width="100%"
                  height="auto"
                  borderRadius="24px"
                  boxShadow="0px 8px 32px rgba(0, 0, 0, 0.12)"
                  loading="lazy"
                  _hover={{
                    boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.15)"
                  }}
                />
              </Box>

              {/* Main Dashboard Image */}
              <ResponsiveImage
                src="/interview-dashboards.png"
                alt="Interview dashboard showing a UI/UX designer interview"
                w={{ md: "650px", lg: "700px", xl: "750px" }}
                position="absolute"
                left="50%"
                bottom="0"
                transform="translateX(-50%)"
                borderRadius="24px 24px 0 0"
                opacity={1}
                zIndex={2}
                boxShadow="0px 8px 32px rgba(0, 0, 0, 0.15)"
                priority={true}
                mobileOptimized={false}
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 650px, (max-width: 1280px) 700px, 750px"
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "translateX(-50%) scale(1.02)",
                  boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.2)"
                }}
              />
              
              {/* Right Side Image */}
              <ResponsiveImage
                src="/interview-analysis.png"
                alt="Interview analysis and shared highlight"
                w={{ md: "320px", lg: "340px", xl: "360px" }}
                position="absolute"
                right={{ md: "-150px", lg: "-120px", xl: "-100px" }}
                top="90%"
                transform="translateY(-50%)"
                borderRadius="24px"
                zIndex={1}
                boxShadow="0px 8px 32px rgba(0, 0, 0, 0.12)"
                mobileOptimized={false}
                sizes="(max-width: 768px) 180px, (max-width: 1024px) 320px, (max-width: 1280px) 340px, 360px"
                _hover={{
                  transform: "translateY(-52%) scale(1.02)",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.15)"
                }}
              />
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 