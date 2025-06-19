'use client'

import { Box, Container, Heading, Text, Button, HStack, VStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

// Memoize BrandLogos component to prevent unnecessary re-renders
const BrandLogos = memo(() => {
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
    >
      <Box
        display="flex"
        animation={`${scrollAnimation} 20s linear infinite`}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        <LogoList />
        <LogoList />
      </Box>
    </Box>
  );
});

BrandLogos.displayName = 'BrandLogos';

// Memoize BackgroundDecorations for performance
const BackgroundDecorations = memo(() => {
  return (
    <>
      {/* Optimize animations using transform3d */}
      <Box
        position="absolute"
        top="5%"
        left="5%"
        width="400px"
        height="400px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(223,246,255,0.2) 0%, rgba(16,118,209,0.1) 100%)"
        filter="blur(40px)"
        style={{ willChange: 'transform' }}
        animation={`${float} 8s ease-in-out infinite`}
        zIndex={0}
      />

      {/* Gradient Blob 2 */}
      <Box
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

// Video Component for main display
const MainVideo = memo(() => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  if (videoError) {
    // Fallback to original image if video fails
    return (
      <Box
        w={{ base: "95vw", sm: "90vw", md: "85vw", lg: "80vw", xl: "75vw", "2xl": "70vw" }}
        maxW={{ base: "450px", sm: "600px", md: "900px", lg: "1200px", xl: "1400px", "2xl": "1600px" }}
        minW={{ base: "320px", md: "600px" }}
        mx="auto"
        position="relative"
        borderRadius={{ base: "24px 24px 0 0", md: "32px 32px 0 0" }}
        overflow="hidden"
        boxShadow="0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
        zIndex={2}
        aspectRatio={{ base: "16/10", md: "16/9" }}
      >
        <Box
          width="100%"
          height="100%"
          backgroundImage="url('/interview-dashboards.png')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minHeight={{ base: "200px", sm: "300px", md: "400px", lg: "500px" }}
        />
        <FloatingUIOverlays />
      </Box>
    );
  }

  return (
    <Box
      w={{ base: "95vw", sm: "90vw", md: "85vw", lg: "80vw", xl: "75vw", "2xl": "70vw" }}
      maxW={{ base: "450px", sm: "600px", md: "900px", lg: "1200px", xl: "1400px", "2xl": "1600px" }}
      minW={{ base: "320px", md: "600px" }}
      mx="auto"
      position="relative"
      borderRadius={{ base: "24px 24px 0 0", md: "32px 32px 0 0" }}
      overflow="hidden"
      boxShadow="0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
      zIndex={2}
      aspectRatio={{ base: "16/10", md: "16/9" }}
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: window?.innerWidth > 768 ? '32px 32px 0 0' : '24px 24px 0 0'
        }}
      >
        <source src="/hero-video-clarivue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <FloatingUIOverlays />
    </Box>
  );
});

MainVideo.displayName = 'MainVideo';

// Floating UI Overlays Component - now positioned within video frame
const FloatingUIOverlays = memo(() => {
  const [toneIndex, setToneIndex] = useState(0);
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  const toneStates = ["Confident", "Neutral", "Hesitant"];

  const toneColors = {
    "Confident": "#38A169",
    "Neutral": "#4299E1", 
    "Hesitant": "#E53E3E"
  };

  const toneIcons = {
    "Confident": "📈",
    "Neutral": "➖", 
    "Hesitant": "📉"
  };

  const metrics = [
    { icon: "🧠", label: "Leadership", score: 8.7, color: "green" },
    { icon: "🛠️", label: "Problem Solving", score: 7.1, color: "yellow" },
    { icon: "⚛️", label: "React Native", score: 5.9, color: "red" },
    { icon: "🧱", label: "Systems Design", score: 6.5, color: "yellow" },
    { icon: "🧮", label: "Data Structures", score: 7.9, color: "yellow" },
    { icon: "🧪", label: "Testing", score: 8.2, color: "green" }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 8) return "green";
    if (score >= 6) return "yellow";
    return "red";
  };

  const getScoreStyles = (color: string) => {
    switch (color) {
      case "green":
        return {
          backgroundColor: "#F0FDF4",
          color: "#166534",
          border: "1px solid #BBF7D0"
        };
      case "yellow":
        return {
          backgroundColor: "#FFFBEB",
          color: "#92400E",
          border: "1px solid #FDE68A"
        };
      case "red":
        return {
          backgroundColor: "#FEF2F2",
          color: "#991B1B",
          border: "1px solid #FECACA"
        };
      default:
        return {};
    }
  };

  useEffect(() => {
    // Show second question after 6 seconds
    const questionTimer = setTimeout(() => {
      setShowSecondQuestion(true);
    }, 6000);

    // Show scorecard after 8 seconds
    const scorecardTimer = setTimeout(() => {
      setShowScorecard(true);
    }, 8000);

    // Tone cycle every 4 seconds
    const toneTimer = setInterval(() => {
      setToneIndex((prev) => (prev + 1) % toneStates.length);
    }, 4000);

    return () => {
      clearTimeout(questionTimer);
      clearTimeout(scorecardTimer);
      clearInterval(toneTimer);
    };
  }, []);

  const overlayBaseStyles = {
    position: 'absolute' as const,
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    zIndex: 10
  };

  return (
    <>
      {/* Conversation Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: -40, scale: 0.7 }}
        animate={{ 
          opacity: 1, 
          y: [0, -8, 0], 
          x: 0, 
          scale: 1,
        }}
        transition={{ 
          opacity: { duration: 1.2, delay: 1 },
          x: { duration: 1.2, delay: 1, type: "spring", stiffness: 80, damping: 12 },
          scale: { duration: 1.2, delay: 1, type: "spring", stiffness: 80, damping: 12 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
        style={{
          ...overlayBaseStyles,
          bottom: window?.innerWidth > 768 ? '20px' : '15px',
          left: window?.innerWidth > 768 ? '20px' : '15px',
          maxWidth: window?.innerWidth > 768 ? '320px' : '240px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.2 }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <motion.span 
            style={{ fontSize: '18px', marginTop: '2px' }}
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            💬
          </motion.span>
          <div style={{ flex: 1 }}>
            {/* Main Prompt with staggered animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              style={{
                marginBottom: '12px',
                padding: '8px 12px',
                backgroundColor: 'rgba(66, 153, 225, 0.1)',
                borderRadius: '8px',
                borderLeft: '3px solid #4299E1'
              }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.3 }}
                style={{ 
                  fontSize: window?.innerWidth > 768 ? '11px' : '9px', 
                  fontWeight: '600', 
                  color: '#4299E1',
                  marginBottom: '3px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                AI PROMPT
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                style={{ 
                  fontSize: window?.innerWidth > 768 ? '14px' : '12px', 
                  color: '#1A202C',
                  lineHeight: '1.4',
                  fontWeight: '600'
                }}
              >
                Can you walk me through a challenge you led?
              </motion.div>
            </motion.div>

            {/* Suggested Follow-up with progressive reveal */}
            <AnimatePresence>
              {showSecondQuestion && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -15, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto', 
                    y: 0, 
                    scale: 1 
                  }}
                  exit={{ opacity: 0, height: 0, y: -15, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    scale: { type: "spring", stiffness: 200 }
                  }}
                  style={{
                    padding: '6px 12px 6px 20px',
                    backgroundColor: 'rgba(56, 161, 105, 0.08)',
                    borderRadius: '6px',
                    borderLeft: '2px solid #38A169',
                    position: 'relative'
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#38A169',
                      borderRadius: '50%'
                    }} 
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ 
                      fontSize: window?.innerWidth > 768 ? '10px' : '8px', 
                      fontWeight: '600', 
                      color: '#38A169',
                      marginBottom: '2px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    SUGGESTED FOLLOW-UP
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{ 
                      fontSize: window?.innerWidth > 768 ? '13px' : '11px', 
                      color: '#2D3748',
                      lineHeight: '1.3',
                      fontWeight: '500'
                    }}
                  >
                    Ask about team leadership experience
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Tone Dial - Right Side, 30% from top */}
      <motion.div
        initial={{ opacity: 0, y: -40, x: 40, scale: 0.7, rotate: -10 }}
        animate={{ 
          opacity: 1, 
          y: [0, -12, 0], 
          x: 0, 
          scale: [1, 1.03, 1],
          rotate: 0
        }}
        transition={{ 
          opacity: { duration: 1.4, delay: 1.8 },
          x: { duration: 1.4, delay: 1.8, type: "spring", stiffness: 70, damping: 15 },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
          rotate: { duration: 1.4, delay: 1.8, type: "spring", stiffness: 100 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
        style={{
          ...overlayBaseStyles,
          top: window?.innerWidth > 768 ? '30%' : '25%',
          right: window?.innerWidth > 768 ? '20px' : '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          minWidth: window?.innerWidth > 768 ? '140px' : '120px'
        }}
        whileHover={{ 
          scale: 1.08, 
          y: -8,
          boxShadow: '0 15px 35px rgba(99, 102, 241, 0.3)',
          transition: { duration: 0.2 }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <motion.div
            style={{
              fontSize: '16px',
              padding: '4px',
              borderRadius: '50%',
              backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }}
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            📊
          </motion.div>
          <div style={{ flex: 1 }}>
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              style={{ 
                fontSize: window?.innerWidth > 768 ? '10px' : '9px', 
                fontWeight: '600', 
                color: '#6366F1',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              TONE ANALYSIS
            </motion.div>
            <motion.div
              key={toneIndex}
              initial={{ opacity: 0, y: 20, scale: 0.7, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.7, rotateX: 90 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 150,
                damping: 12
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 8px',
                backgroundColor: `${toneColors[toneStates[toneIndex] as keyof typeof toneColors]}15`,
                borderRadius: '12px',
                border: `1px solid ${toneColors[toneStates[toneIndex] as keyof typeof toneColors]}30`
              }}
            >
              <motion.span 
                style={{ fontSize: '12px' }}
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {toneIcons[toneStates[toneIndex] as keyof typeof toneIcons]}
              </motion.span>
              <motion.div 
                style={{ 
                  fontSize: window?.innerWidth > 768 ? '13px' : '12px', 
                  fontWeight: '700', 
                  color: toneColors[toneStates[toneIndex] as keyof typeof toneColors]
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {toneStates[toneIndex]}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Skills Scorecard - Right Side, below Tone */}
      <AnimatePresence>
        {showScorecard && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: 40, scale: 0.7 }}
            animate={{ 
              opacity: 1, 
              y: [0, -6, 0], 
              x: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: -40, scale: 0.7 }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.5 },
              x: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 70, damping: 15 },
              scale: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 70, damping: 15 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
            style={{
              position: 'absolute',
              top: window?.innerWidth > 768 ? 'calc(30% + 95px)' : 'calc(25% + 85px)',
              right: window?.innerWidth > 768 ? '20px' : '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(16px)',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              width: window?.innerWidth > 768 ? '240px' : '200px',
              zIndex: 10
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ 
                fontSize: window?.innerWidth > 768 ? '10px' : '9px', 
                fontWeight: '600', 
                color: '#374151',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              📊 SCORECARD
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '3px 0',
                    borderBottom: index < metrics.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
                  }}
                  whileHover={{ 
                    x: 2, 
                    transition: { duration: 0.1 }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <motion.span 
                      style={{ fontSize: '11px' }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ 
                        duration: 3 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {metric.icon}
                    </motion.span>
                    <span style={{ 
                      fontSize: window?.innerWidth > 768 ? '11px' : '10px', 
                      fontWeight: '500', 
                      color: '#1F2937'
                    }}>
                      {metric.label}
                    </span>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.5 + (index * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                    style={{
                      ...getScoreStyles(getScoreColor(metric.score)),
                      padding: '2px 5px',
                      borderRadius: '5px',
                      fontSize: window?.innerWidth > 768 ? '10px' : '9px',
                      fontWeight: '600'
                    }}
                  >
                    {metric.score}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

FloatingUIOverlays.displayName = 'FloatingUIOverlays';

export const HeroSection = () => {
  return (
    <Box
      bgGradient="linear(to-b, secondary.700, secondary.500 65%, primary.100)"
      minH={{ base: "135vh", md: "110vh" }}
      pt={{ base: "100px", md: "140px" }}
      pb={0}
      overflow="hidden"
      position="relative"
    >
      <BackgroundDecorations />
      
      <Container maxW="container.xl" px={{ base: 4, md: 6 }} position="relative" zIndex={5}>
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
        </VStack>
      </Container>

      {/* Video Container - Properly contained */}
      <Box 
        position="relative"
        w="100%"
        display="flex"
        justifyContent="center"
        px={{ base: 4, md: 6 }}
        zIndex={3}
        mt={6}
      >
        <MainVideo />
      </Box>
    </Box>
  )
} 