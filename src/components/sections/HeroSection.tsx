'use client'

import { Box, Container, Heading, Text, Button, HStack, VStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useRef, useState, useMemo } from 'react'
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

// Memoize static data for floating overlays
const TONE_STATES = ["Confident", "Neutral", "Hesitant"] as const;
const TONE_COLORS = {
  "Confident": "#38A169",
  "Neutral": "#4299E1", 
  "Hesitant": "#E53E3E"
} as const;
const TONE_ICONS = {
  "Confident": "📈",
  "Neutral": "➖", 
  "Hesitant": "📉"
} as const;
const METRICS_DATA = [
  { icon: "🧠", label: "Leadership", score: 8.7, color: "green" },
  { icon: "🛠️", label: "Problem Solving", score: 7.1, color: "yellow" },
  { icon: "⚛️", label: "React Native", score: 5.9, color: "red" },
  { icon: "🧱", label: "Systems Design", score: 6.5, color: "yellow" },
  { icon: "🧮", label: "Data Structures", score: 7.9, color: "yellow" },
  { icon: "🧪", label: "Testing", score: 8.2, color: "green" }
] as const;

// Memoize BackgroundDecorations for performance
const BackgroundDecorations = memo(() => {
  const floatStyle = useMemo(() => ({ willChange: 'transform' }), []);
  
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
        style={floatStyle}
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
});

BackgroundDecorations.displayName = 'BackgroundDecorations';

// Video Component for main display - Optimized
const MainVideo = memo(() => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  const videoContainerStyle = useMemo(() => ({
    w: { base: "95vw", sm: "90vw", md: "85vw", lg: "80vw", xl: "75vw", "2xl": "70vw" },
    maxW: { base: "450px", sm: "600px", md: "900px", lg: "1200px", xl: "1400px", "2xl": "1600px" },
    minW: { base: "320px", md: "600px" },
    mx: "auto",
    position: "relative" as const,
    borderRadius: { base: "24px 24px 0 0", md: "32px 32px 0 0" },
    overflow: "hidden",
    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
    zIndex: 2,
    aspectRatio: { base: "16/10", md: "16/9" },
    transition: "all 0.3s ease-in-out",
    _hover: {
      transform: "scale(1.02)",
      boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)"
    }
  }), []);

  const videoStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
    borderRadius: window?.innerWidth > 768 ? '32px 32px 0 0' : '24px 24px 0 0'
  }), []);

  const fallbackStyle = useMemo(() => ({
    width: "100%",
    height: "100%",
    backgroundImage: "url('/interview-dashboards.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: { base: "200px", sm: "300px", md: "400px", lg: "500px" }
  }), []);

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
      <Box {...videoContainerStyle}>
        <Box {...fallbackStyle} />
        <FloatingUIOverlays />
      </Box>
    );
  }

  return (
    <Box {...videoContainerStyle}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
        style={videoStyle}
        preload="metadata"
      >
        <source src="/hero-video-clarivue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <FloatingUIOverlays />
    </Box>
  );
});

MainVideo.displayName = 'MainVideo';

// Floating UI Overlays Component - Optimized with performance improvements
const FloatingUIOverlays = memo(() => {
  const [toneIndex, setToneIndex] = useState(0);
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showAIThinking, setShowAIThinking] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);

  const metrics = useMemo(() => METRICS_DATA, []);

  // Memoize expensive calculations
  const getScoreColor = useCallback((score: number) => {
    if (score >= 8) return "green";
    if (score >= 6) return "yellow";
    return "red";
  }, []);

  const getScoreStyles = useCallback((color: string) => {
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
  }, []);

  // Memoize base overlay styles with responsive sizing
  const overlayBaseStyles = useMemo(() => {
    let padding, borderRadius;
    
    if (window?.innerWidth < 480) {
      // Extra small mobile - reduced padding
      padding = '3px';
      borderRadius = '6px';
    } else if (window?.innerWidth < 768) {
      // Small mobile - reduced padding
      padding = '4px';
      borderRadius = '8px';
    } else if (window?.innerWidth < 1024) {
      // Tablet
      padding = '10px';
      borderRadius = '16px';
    } else if (window?.innerWidth < 1440) {
      // Small desktop
      padding = '14px';
      borderRadius = '20px';
    } else {
      // Large desktop
      padding = '20px';
      borderRadius = '24px';
    }

    return {
      position: 'absolute' as const,
      backdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius,
      padding,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      zIndex: 10
    };
  }, []);

  // Responsive sizing utilities - Proper web vs mobile sizing
  const getResponsiveSize = useCallback((baseSize: number) => {
    if (window?.innerWidth < 768) return baseSize * 0.4; // Mobile: smaller size
    if (window?.innerWidth < 1024) return baseSize * 0.7; // Tablet: medium size  
    return baseSize * 1.0; // Desktop: full size
  }, []);

  const getResponsiveFontSize = useCallback((desktopSize: string, mobileSize: string, tabletSize?: string) => {
    const baseMobile = parseInt(mobileSize);
    const baseTablet = tabletSize ? parseInt(tabletSize) : baseMobile * 1.2;
    const baseDesktop = parseInt(desktopSize);
    
    if (window?.innerWidth < 480) {
      // Extra small mobile: 60% of mobile size - reduced further
      return `${Math.round(baseMobile * 0.6)}px`;
    } else if (window?.innerWidth < 768) {
      // Small mobile: 80% of mobile size - reduced from full size
      return `${Math.round(baseMobile * 0.8)}px`;
    } else if (window?.innerWidth < 1024) {
      // Tablet: 110% of mobile size
      return `${Math.round(baseMobile * 1.1)}px`;
    } else if (window?.innerWidth < 1440) {
      // Small desktop: 120% of desktop size
      return `${Math.round(baseDesktop * 1.2)}px`;
    } else {
      // Large desktop: 150% of desktop size
      return `${Math.round(baseDesktop * 1.5)}px`;
    }
  }, []);

  // Special font size for scorecard - 25% larger than regular
  const getScorecardFontSize = useCallback((desktopSize: string, mobileSize: string, tabletSize?: string) => {
    const regularSize = getResponsiveFontSize(desktopSize, mobileSize, tabletSize);
    const sizeValue = parseInt(regularSize);
    return `${Math.round(sizeValue * 1.25)}px`; // 25% larger
  }, [getResponsiveFontSize]);

  // Updated overlay dimensions for better mobile adaptation
  const getOverlayDimensions = useCallback(() => {
    if (window?.innerWidth < 480) {
      // Extra small mobile: very compact sizes - reduced further
      return {
        conversation: { width: '100px', maxWidth: '100px', minHeight: 'auto' },
        tone: { width: '60px', minWidth: '60px', minHeight: 'auto' },
        scorecard: { width: '70px', minHeight: 'auto' }
      };
    } else if (window?.innerWidth < 768) {
      // Small mobile: compact sizes - reduced further
      return {
        conversation: { width: '120px', maxWidth: '120px', minHeight: 'auto' },
        tone: { width: '70px', minWidth: '70px', minHeight: 'auto' },
        scorecard: { width: '85px', minHeight: 'auto' }
      };
    } else if (window?.innerWidth < 1024) {
      // Tablet: medium sizes
      return {
        conversation: { width: '200px', maxWidth: '200px', minHeight: 'auto' },
        tone: { width: '110px', minWidth: '110px', minHeight: 'auto' },
        scorecard: { width: '140px', minHeight: 'auto' }
      };
    } else if (window?.innerWidth < 1440) {
      // Small desktop: moderate sizes
      return {
        conversation: { width: '350px', maxWidth: '350px', minHeight: '150px' },
        tone: { width: '170px', minWidth: '170px', minHeight: '100px' },
        scorecard: { width: '240px', minHeight: '200px' }
      };
    } else {
      // Large desktop: full sizes
      return {
        conversation: { width: '420px', maxWidth: '420px', minHeight: '180px' },
        tone: { width: '200px', minWidth: '200px', minHeight: '120px' },
        scorecard: { width: '280px', minHeight: '238px' }
      };
    }
  }, []);

  // Get positioning offsets to prevent overlap with better mobile adaptation
  const getOverlayPositioning = useCallback(() => {
    if (window?.innerWidth < 480) {
      // Extra small mobile positioning - reduced margins, scorecard moved down 20%
      return {
        conversation: { bottom: '4px', left: '4px' },
        tone: { top: '4px', left: '50%', transform: 'translateX(-50%)' },
        scorecard: { top: 'calc(40% + 20px)', right: '4px' }
      };
    } else if (window?.innerWidth < 768) {
      // Small mobile positioning - reduced margins, scorecard moved down 20%
      return {
        conversation: { bottom: '6px', left: '6px' },
        tone: { top: '6px', left: '50%', transform: 'translateX(-50%)' },
        scorecard: { top: 'calc(45% + 25px)', right: '6px' }
      };
    } else if (window?.innerWidth < 1024) {
      // Tablet positioning
      return {
        conversation: { bottom: '12px', left: '12px' },
        tone: { top: '12px', left: '50%', transform: 'translateX(-50%)' },
        scorecard: { top: 'calc(28% + 35px)', right: '12px' }
      };
    } else if (window?.innerWidth < 1440) {
      // Small desktop positioning
      return {
        conversation: { bottom: '16px', left: '16px' },
        tone: { top: '16px', left: '50%', transform: 'translateX(-50%)' },
        scorecard: { top: 'calc(22% + 60px)', right: '16px' }
      };
    } else {
      // Large desktop positioning
      return {
        conversation: { bottom: '20px', left: '20px' },
        tone: { top: '20px', left: '50%', transform: 'translateX(-50%)' },
        scorecard: { top: 'calc(25% + 80px)', right: '20px' }
      };
    }
  }, []);

  // Animated microphone component (moved inside to access getResponsiveFontSize)
  const AnimatedMicrophone = memo(() => (
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{ 
        fontSize: getResponsiveFontSize('16px', '12px', '14px'),
        marginRight: '4px'
      }}
    >
      🎤
    </motion.div>
  ));

  AnimatedMicrophone.displayName = 'AnimatedMicrophone';

  // Helper function for responsive spacing
  const getResponsiveSpacing = useCallback((type: 'gap' | 'margin' | 'padding') => {
    if (window?.innerWidth < 480) {
      // Extra small mobile - reduced spacing
      return type === 'gap' ? '1px' : type === 'margin' ? '0.5px' : '1px';
    } else if (window?.innerWidth < 768) {
      // Small mobile - reduced spacing
      return type === 'gap' ? '2px' : type === 'margin' ? '1px' : '2px';
    } else if (window?.innerWidth < 1024) {
      // Tablet
      return type === 'gap' ? '4px' : type === 'margin' ? '3px' : '4px';
    } else if (window?.innerWidth < 1440) {
      // Small desktop
      return type === 'gap' ? '5px' : type === 'margin' ? '4px' : '5px';
    } else {
      // Large desktop
      return type === 'gap' ? '6px' : type === 'margin' ? '5px' : '6px';
    }
  }, []);

  // Memoize current tone data
  const currentToneData = useMemo(() => ({
    state: TONE_STATES[toneIndex],
    color: TONE_COLORS[TONE_STATES[toneIndex]],
    icon: TONE_ICONS[TONE_STATES[toneIndex]]
  }), [toneIndex]);

  // Handle typewriter completion
  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
    // Show AI thinking indicator after typing completes
    setTimeout(() => {
      setShowAIThinking(true);
    }, 500);
    // Show follow-up after AI thinking pause
    setTimeout(() => {
      setShowAIThinking(false);
      setShowFollowUp(true);
    }, 2000);
  }, []);

  useEffect(() => {
    // Show scorecard after 8 seconds
    const scorecardTimer = setTimeout(() => {
      setShowScorecard(true);
    }, 8000);

    // Tone cycle every 4 seconds
    const toneTimer = setInterval(() => {
      setToneIndex((prev) => (prev + 1) % TONE_STATES.length);
    }, 4000);

    return () => {
      clearTimeout(scorecardTimer);
      clearInterval(toneTimer);
    };
  }, []);

  return (
    <>
      {/* Conversation Card - Bottom Left - Mobile Optimized */}
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
          bottom: getOverlayPositioning().conversation.bottom,
          left: getOverlayPositioning().conversation.left,
          maxWidth: getOverlayDimensions().conversation.maxWidth,
          minHeight: getOverlayDimensions().conversation.minHeight,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
        whileHover={{ 
          scale: getOverlayDimensions().conversation.width === '140px' ? 1.01 : 1.02, 
          y: -4,
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.2 }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: getResponsiveSpacing('gap') }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedMicrophone />
            <motion.span 
              style={{ fontSize: getResponsiveFontSize('18px', '14px', '16px'), marginTop: '1px' }}
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
          </div>
          <div style={{ flex: 1 }}>
            {/* Main Prompt with typewriter animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              style={{
                marginBottom: getResponsiveSpacing('margin'),
                padding: getResponsiveSpacing('padding'),
                backgroundColor: 'rgba(66, 153, 225, 0.12)',
                borderRadius: window?.innerWidth < 480 ? '4px' : window?.innerWidth < 768 ? '6px' : '12px',
                borderLeft: window?.innerWidth < 480 ? '1px solid #4299E1' : window?.innerWidth < 768 ? '2px solid #4299E1' : '4px solid #4299E1'
              }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.3 }}
                style={{ 
                  fontSize: getResponsiveFontSize('11px', '8px', '9px'),
                  fontWeight: '600', 
                  color: '#4299E1',
                  marginBottom: getResponsiveSpacing('margin'),
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px'
                }}
              >
                CANDIDATE RESPONSE
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                style={{ 
                  fontSize: getResponsiveFontSize('14px', '10px', '12px'),
                  color: '#1A202C',
                  lineHeight: '1.2',
                  fontWeight: '600'
                }}
              >
                <TypewriterText 
                  text="I led the redesign of our onboarding flow, which improved activation by 30%..."
                  delay={3000}
                  onComplete={handleTypingComplete}
                />
              </motion.div>
            </motion.div>

            {/* AI Thinking Indicator */}
            <AnimatePresence>
              {showAIThinking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: getResponsiveSpacing('padding'),
                    backgroundColor: 'rgba(147, 51, 234, 0.12)',
                    borderRadius: window?.innerWidth < 480 ? '4px' : window?.innerWidth < 768 ? '6px' : '10px',
                    marginBottom: getResponsiveSpacing('margin'),
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(147, 51, 234, 0.4)',
                        '0 0 0 6px rgba(147, 51, 234, 0)',
                        '0 0 0 0 rgba(147, 51, 234, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      width: window?.innerWidth < 480 ? '4px' : '6px',
                      height: window?.innerWidth < 480 ? '4px' : '6px',
                      backgroundColor: '#9333EA',
                      borderRadius: '50%'
                    }}
                  />
                  <span style={{ 
                    fontSize: getResponsiveFontSize('11px', '8px', '9px'),
                    color: '#9333EA',
                    fontWeight: '500'
                  }}>
                    AI analyzing...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Suggested Follow-up with progressive reveal */}
            <AnimatePresence>
              {showFollowUp && (
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
                    padding: getResponsiveSpacing('padding'),
                    backgroundColor: 'rgba(56, 161, 105, 0.12)',
                    borderRadius: window?.innerWidth < 480 ? '4px' : window?.innerWidth < 768 ? '6px' : '10px',
                    borderLeft: window?.innerWidth < 480 ? '1px solid #38A169' : window?.innerWidth < 768 ? '2px solid #38A169' : '3px solid #38A169',
                    position: 'relative'
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{
                      position: 'absolute',
                      left: window?.innerWidth < 480 ? '2px' : window?.innerWidth < 768 ? '3px' : '4px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: window?.innerWidth < 480 ? '1px' : window?.innerWidth < 768 ? '1.5px' : '2px',
                      height: window?.innerWidth < 480 ? '1px' : window?.innerWidth < 768 ? '1.5px' : '2px',
                      backgroundColor: '#38A169',
                      borderRadius: '50%'
                    }} 
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ 
                      fontSize: getResponsiveFontSize('10px', '7px', '8px'),
                      fontWeight: '600', 
                      color: '#38A169',
                      marginBottom: '1px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px'
                    }}
                  >
                    <motion.span
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(56, 161, 105, 0.4)',
                          '0 0 0 4px rgba(56, 161, 105, 0)',
                          '0 0 0 0 rgba(56, 161, 105, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: 2 }}
                      style={{ padding: '1px 2px', borderRadius: '2px' }}
                    >
                      SUGGESTED FOLLOW-UP
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{ 
                      fontSize: getResponsiveFontSize('13px', '9px', '11px'),
                      color: '#2D3748',
                      lineHeight: '1.2',
                      fontWeight: '500'
                    }}
                  >
                    "Ask about how they collaborated with cross-functional teams"
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Tone Dial - Top Center - Mobile Optimized */}
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
          top: getOverlayPositioning().tone.top,
          left: getOverlayPositioning().tone.left,
          transform: getOverlayPositioning().tone.transform,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          minWidth: getOverlayDimensions().tone.minWidth,
          minHeight: getOverlayDimensions().tone.minHeight
        }}
        whileHover={{ 
          scale: getOverlayDimensions().tone.minWidth === '80px' ? 1.02 : getOverlayDimensions().tone.minWidth === '120px' ? 1.04 : 1.04, 
          y: -4,
          boxShadow: '0 8px 18px rgba(99, 102, 241, 0.3)',
          transition: { duration: 0.2 }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: getResponsiveSpacing('gap') }}>
          <motion.div
            style={{
              fontSize: getResponsiveFontSize('16px', '12px', '14px'),
              padding: getResponsiveSpacing('padding'),
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
                fontSize: getResponsiveFontSize('10px', '7px', '8px'),
                fontWeight: '600', 
                color: '#6366F1',
                marginBottom: getResponsiveSpacing('margin'),
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
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
                gap: getResponsiveSpacing('gap'),
                padding: getResponsiveSpacing('padding'),
                backgroundColor: `${currentToneData.color}18`,
                borderRadius: window?.innerWidth < 480 ? '6px' : window?.innerWidth < 768 ? '8px' : '12px',
                border: `1px solid ${currentToneData.color}40`
              }}
            >
              <motion.span 
                style={{ fontSize: getResponsiveFontSize('12px', '9px', '10px') }}
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {currentToneData.icon}
              </motion.span>
              <motion.div 
                style={{ 
                  fontSize: getResponsiveFontSize('13px', '10px', '11px'),
                  fontWeight: '700', 
                  color: currentToneData.color
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {currentToneData.state}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Skills Scorecard - Right Side, below Tone - Mobile Optimized */}
      <AnimatePresence>
        {showScorecard && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: 40, scale: 0.7 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: -40, scale: 0.7 }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.5 },
              x: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 70, damping: 15 },
              scale: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 70, damping: 15 }
            }}
            style={{
              position: 'absolute',
              top: getOverlayPositioning().scorecard.top,
              right: getOverlayPositioning().scorecard.right,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: window?.innerWidth < 480 ? '6px' : window?.innerWidth < 768 ? '8px' : '16px',
              padding: window?.innerWidth < 480 ? '3px' : window?.innerWidth < 768 ? '4px' : window?.innerWidth < 1024 ? '8px' : '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              width: getOverlayDimensions().scorecard.width,
              minHeight: getOverlayDimensions().scorecard.minHeight,
              zIndex: 10
            }}
            whileHover={{ 
              scale: window?.innerWidth < 480 ? 1.005 : window?.innerWidth < 768 ? 1.005 : window?.innerWidth < 1024 ? 1.01 : 1.02, 
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ 
                fontSize: getScorecardFontSize('12px', '9px', '10px'),
                fontWeight: '700', 
                color: '#1076D1',
                marginBottom: getResponsiveSpacing('margin'),
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}
            >
              SCORECARD
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: window?.innerWidth < 480 ? '0.5px' : window?.innerWidth < 768 ? '1px' : '1.5px' }}>
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
                    padding: window?.innerWidth < 480 ? '0.5px 0' : window?.innerWidth < 768 ? '1px 0' : '1.5px 0',
                    borderBottom: index < metrics.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: getResponsiveSpacing('gap') }}>
                    <motion.span 
                      style={{ fontSize: getScorecardFontSize('13px', '10px', '11px') }}
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ 
                        duration: 6 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 1
                      }}
                    >
                      {metric.icon}
                    </motion.span>
                    <span style={{ 
                      fontSize: getScorecardFontSize('13px', '10px', '11px'),
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
                      padding: window?.innerWidth < 480 ? '0.5px 1px' : window?.innerWidth < 768 ? '0.5px 1.5px' : window?.innerWidth < 1024 ? '1px 2.5px' : '1px 2.5px',
                      borderRadius: '3px',
                      fontSize: getScorecardFontSize('14px', '10px', '12px'),
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

// Performance optimization hook
const usePerformanceOptimization = () => {
  useEffect(() => {
    // Optimize animations for low-end devices
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' ||
      connection.saveData
    );

    if (isSlowConnection) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    // Preload critical resources
    const criticalImages = ['/hero-video-clarivue.mp4', '/interview-dashboards.png'];
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);
};

// Typewriter animation component
const TypewriterText = memo(({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          onComplete?.();
        }
      }, 50); // 50ms per character

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, onComplete]);

  return (
    <span>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
});

TypewriterText.displayName = 'TypewriterText';

export const HeroSection = memo(() => {
  usePerformanceOptimization();

  const sectionStyle = useMemo(() => ({
    bgGradient: "linear(to-b, secondary.700, secondary.500 65%, primary.100)",
    minH: { base: "100vh", sm: "95vh", md: "100vh", lg: "105vh" },
    pt: { base: "100px", md: "140px" },
    pb: { base: 4, sm: 6, md: 8 },
    overflow: "hidden",
    position: "relative" as const
  }), []);

  const containerStyle = useMemo(() => ({
    maxW: "container.xl",
    px: { base: 4, md: 6 },
    position: "relative" as const,
    zIndex: 5
  }), []);

  const videoContainerStyle = useMemo(() => ({
    position: "relative" as const,
    w: "100%",
    display: "flex",
    justifyContent: "center",
    px: { base: 4, md: 6 },
    zIndex: 3,
    mt: { base: 8, sm: 10, md: 12, lg: 14 },
    mb: { base: 4, sm: 6, md: 8 }
  }), []);

  return (
    <Box {...sectionStyle}>
      <BackgroundDecorations />
      
      <Container {...containerStyle}>
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
        </VStack>
      </Container>

      {/* Video Container - Properly contained */}
      <Box {...videoContainerStyle}>
        <MainVideo />
      </Box>
    </Box>
  )
}); 