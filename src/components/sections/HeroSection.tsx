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
      bgGradient="linear(180deg, #1E2A78 0%, #5F9DF7 65%, #C1EFFF 100%)"
      minH="90vh"
      pt={{ base: "80px", md: "140px" }}
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
              fontSize={{ base: "48px", md: "72px" }}
              lineHeight={{ base: "56px", md: "80px" }}
              color="gray.50"
              mb={8}
              fontWeight="bold"
              whiteSpace={{ base: "normal", md: "nowrap" }}
            >
              Your AI Interview Co-Pilot
            </Heading>
            <Text
              fontSize={{ base: "20px", md: "24px" }}
              lineHeight={{ base: "32px", md: "36px" }}
              color="white"
              mb={3}
              fontWeight="600"
            >
              Real-time notes. Live follow-up questions. Instant scoring.
            </Text>
            <Text
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={{ base: "28px", md: "32px" }}
              color="whiteAlpha.900"
              maxW="815px"
              mx="auto"
            >
              Purpose-built for recruiting, trusted by modern hiring teams.
            </Text>
          </Box>

          {/* CTA Button */}
          <Button
            bg="primary.50"
            color="primary.600"
            size="lg"
            height="81px"
            px="8"
            fontSize="23px"
            borderRadius="16px"
            _hover={{ bg: 'primary.100' }}
            rightIcon={<Box as="span" ml={2}>➜</Box>}
          >
            Get Started Free
          </Button>

          {/* Loved by text */}
          <Text fontSize="20px" color="gray.50" textAlign="center">
            Loved by recruiters, hiring managers, and leaders at:
          </Text>

          {/* Brand Logos */}
          <BrandLogos />

          {/* Images Container */}
          <Box position="relative" w="full" mt={1} h="558px">
            {/* Left Side Image */}
            <Box
              position="absolute"
              left="-210px"
              top="60%"
              transform="translateY(-50%)"
              zIndex={1}
              width="360px"
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
              w="750px"
              position="absolute"
              left="50%"
              bottom="0"
              transform="translateX(-50%)"
              borderRadius="24px 24px 0 0"
              opacity={1}
              zIndex={2}
              boxShadow="0px 8px 32px rgba(0, 0, 0, 0.15)"
              loading="eager"
            />
            
            {/* Right Side Image */}
            <ResponsiveImage
              src="/interview-analysis.png"
              alt="Interview analysis and shared highlight"
              w="360px"
              position="absolute"
              right="-100px"
              top="60%"
              transform="translateY(-50%)"
              borderRadius="24px"
              zIndex={1}
              boxShadow="0px 8px 32px rgba(0, 0, 0, 0.12)"
              loading="lazy"
              _hover={{
                transform: "translateY(-52%) scale(1.02)",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.15)"
              }}
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 