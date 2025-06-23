'use client'

import { Box, Container, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useRef, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Animation keyframes
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

// Static data constants
const TONE_STATES = ["Confident", "Uncertain", "Friendly", "Evasive", "Passionate", "Rehearsed", "Neutral"] as const;
const TONE_COLORS = {
  "Confident": "#38A169",
  "Uncertain": "#E53E3E",
  "Friendly": "#4299E1",
  "Evasive": "#ED8936",
  "Passionate": "#9F7AEA",
  "Rehearsed": "#718096",
  "Neutral": "#4A5568"
} as const;

const FOLLOW_UP_PROMPTS = [
  "Prompt them to explain their reasoning behind that decision.",
  "Challenge them: What didn't go as planned? How did you respond?",
  "Humanize the moment: What did you personally learn from that experience?",
  "Ask for specifics: Can you walk me through your exact process?",
  "Probe deeper: What would you do differently next time?"
] as const;

const QUESTIONS = [
  "What's your greatest strength?",
  "Tell me about a challenging project you led.",
  "How do you handle conflict in a team?",
  "Describe a time you failed and what you learned."
] as const;

const CUES = [
  "Prompt them to describe the impact of their action.",
  "Candidate sounds unsure — clarify the question.",
  "They're rambling — gently redirect.",
  "They avoided the timeline — ask for dates.",
  "Vague language — request measurable results.",
  "They seem nervous — put them at ease."
] as const;

// Background decorations component
const BackgroundDecorations = memo(() => {
  return (
    <>
      {/* Floating gradient blob 1 */}
      <Box
        position="absolute"
        top="5%"
        left="5%"
        width="400px"
        height="400px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(223,246,255,0.2) 0%, rgba(16,118,209,0.1) 100%)"
        filter="blur(40px)"
        animation={`${float} 8s ease-in-out infinite`}
        zIndex={0}
      />

      {/* Floating gradient blob 2 */}
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

      {/* Geometric shapes */}
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

      {/* Dots pattern */}
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

// Video Call Controls Overlay Component
const VideoCallControls = memo(() => {
  const [micMuted, setMicMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device for responsive controls
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle states periodically to simulate real call
  useEffect(() => {
    const micInterval = setInterval(() => {
      setMicMuted(prev => !prev);
    }, 8000);

    const videoInterval = setInterval(() => {
      setVideoOff(prev => !prev);
    }, 12000);

    return () => {
      clearInterval(micInterval);
      clearInterval(videoInterval);
    };
  }, []);

  const controlButtonStyle = {
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '16px' : '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    minWidth: isMobile ? '36px' : '40px',
    minHeight: isMobile ? '36px' : '40px'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      style={{
        position: 'absolute',
        bottom: isMobile ? '12px' : '16px',
        left: isMobile ? '50%' : '25%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '8px' : '12px',
        padding: isMobile ? '8px 12px' : '12px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: isMobile ? '20px' : '24px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 10,
        maxWidth: isMobile ? '90%' : 'auto',
        overflow: 'hidden'
      }}
    >
      {/* Microphone */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: micMuted ? '#EA4335' : 'rgba(255, 255, 255, 0.2)',
          color: micMuted ? 'white' : '#E8EAED'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMicMuted(!micMuted)}
      >
        {micMuted ? '🎤' : '🎙️'}
      </motion.div>

      {/* Video Camera */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: videoOff ? '#EA4335' : 'rgba(255, 255, 255, 0.2)',
          color: videoOff ? 'white' : '#E8EAED'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setVideoOff(!videoOff)}
      >
        {videoOff ? '📹' : '📷'}
      </motion.div>

      {/* Screen Share - Hidden on very small mobile screens */}
      {(!isMobile || window.innerWidth > 400) && (
        <motion.div
          style={{
            ...controlButtonStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#E8EAED'
          }}
          whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🖥️
        </motion.div>
      )}

      {/* More Options - Hidden on mobile for space */}
      {!isMobile && (
        <motion.div
          style={{
            ...controlButtonStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#E8EAED'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ⚙️
        </motion.div>
      )}

      {/* Chat - Hidden on very small mobile screens */}
      {(!isMobile || window.innerWidth > 400) && (
        <motion.div
          style={{
            ...controlButtonStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#E8EAED'
          }}
          whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          💬
        </motion.div>
      )}

      {/* Participants - Hidden on mobile for space */}
      {!isMobile && (
        <motion.div
          style={{
            ...controlButtonStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#E8EAED'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          👥
        </motion.div>
      )}

      {/* End Call */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: '#EA4335',
          color: 'white',
          marginLeft: isMobile ? '4px' : '8px'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1, backgroundColor: '#D93025' }}
        whileTap={{ scale: 0.95 }}
      >
        📞
      </motion.div>
    </motion.div>
  );
});

VideoCallControls.displayName = 'VideoCallControls';

// Video Component for left side (75%)
const VideoComponent = memo(() => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [_videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
    setVideoError(false);
  }, []);

  const handleVideoError = useCallback(() => {
    console.error('Video loading error');
    setVideoError(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
      }
    }, 1000);
  }, []);

  const handleCanPlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video play error:', error);
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              console.warn('Video autoplay failed - user interaction required');
            });
          }
        }, 500);
      });
    }
  }, []);

  const handleImageLoad = useCallback(() => {
    setVideoLoaded(true);
    setVideoError(false);
  }, []);

  const handleImageError = useCallback(() => {
    console.error('GIF loading error');
    setVideoError(true);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const video = videoRef.current;
      if (video) {
        video.load();
        video.addEventListener('loadeddata', handleVideoLoad);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('error', handleVideoError);
        
        return () => {
          video.removeEventListener('loadeddata', handleVideoLoad);
          video.removeEventListener('canplay', handleCanPlay);
          video.removeEventListener('error', handleVideoError);
        };
      }
    }
  }, [handleVideoLoad, handleCanPlay, handleVideoError, isMobile]);

  return (
    <Box 
      width={{ base: "100%", md: "100%" }}
      height={{ base: "100%", md: "100%" }}
      maxWidth="100%"
      maxHeight="100%"
      position="relative"
      borderRadius={{ base: "16px 16px 0 0", md: "24px 0 0 24px" }}
      overflow="hidden"
      aspectRatio="16/9"
    >
      {isMobile ? (
        <img
          src="/hero-video-clarivue.gif"
          alt="Clarivue AI Interview Co-Pilot Demo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '16px 16px 0 0',
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="eager"
          decoding="async"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '24px 0 0 24px',
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          poster=""
          crossOrigin="anonymous"
        >
          <source src="/hero-video-clarivue.mp4" type="video/mp4" />
          <source src="/hero-video-clarivue.webm" type="video/webm" />
          <source src="/hero-video-clarivue.ogv" type="video/ogg" />
        </video>
      )}
      
      {/* Loading indicator */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(16, 118, 209, 0.1)"
        backdropFilter="blur(10px)"
        opacity={videoLoaded ? 0 : 1}
        transition="opacity 0.3s ease-in-out"
        pointerEvents={videoLoaded ? 'none' : 'auto'}
        borderRadius={{ base: "16px 16px 0 0", md: "24px 0 0 24px" }}
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(16, 118, 209, 0.3)',
            borderTop: '3px solid #1076D1',
            borderRadius: '50%'
          }}
        />
      </Box>
      
      {/* Video Call Controls Overlay */}
      <VideoCallControls />
    </Box>
  );
});

VideoComponent.displayName = 'VideoComponent';

// Simulated Clarivue UI Pane for right side (25%)
const ClarivueSimulatedPane = memo(() => {
  const [currentTone, setCurrentTone] = useState(0);
  const [_currentPrompt, setCurrentPrompt] = useState(0);
  const [activeTab, setActiveTab] = useState<'questions' | 'cues'>('questions');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCue, setCurrentCue] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<'questions' | 'cues'>('questions');
  const [isMobile, setIsMobile] = useState(false);

  // Enhanced mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cycle through tones (slowed down by 1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTone((prev) => (prev + 1) % TONE_STATES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through prompts (slowed down by 1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % FOLLOW_UP_PROMPTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through questions/cues with simulated clicking (slowed down by 1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      // Show cursor animation 500ms before switching (only on desktop)
      if (!isMobile) {
        setTimeout(() => {
          const nextTab = activeTab === 'questions' ? 'cues' : 'questions';
          setCursorPosition(nextTab);
          setShowCursor(true);
          
          // Hide cursor and switch tab after 300ms
          setTimeout(() => {
            setShowCursor(false);
            setActiveTab(nextTab);
            if (nextTab === 'questions') {
              setCurrentQuestion((prev) => (prev + 1) % QUESTIONS.length);
    } else {
              setCurrentCue((prev) => (prev + 1) % CUES.length);
            }
          }, 300);
        }, 4500); // Show cursor 500ms before the 5000ms interval completes
    } else {
        // On mobile, just switch tabs without cursor animation
        const nextTab = activeTab === 'questions' ? 'cues' : 'questions';
        setActiveTab(nextTab);
        if (nextTab === 'questions') {
          setCurrentQuestion((prev) => (prev + 1) % QUESTIONS.length);
    } else {
          setCurrentCue((prev) => (prev + 1) % CUES.length);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, isMobile]);

  // Get tone percentage (simulated)
  const getTonePercentage = () => {
    const percentages = [65, 45, 80, 35, 90, 25, 55];
    return percentages[currentTone];
  };

  const getToneDescription = () => {
    const descriptions = {
      "Confident": "High confidence detected",
      "Uncertain": "Some hesitation detected",
      "Friendly": "Positive engagement detected",
      "Evasive": "Avoidance patterns detected",
      "Passionate": "Strong enthusiasm detected",
      "Rehearsed": "Prepared responses detected",
      "Neutral": "Balanced tone detected"
    };
    return descriptions[TONE_STATES[currentTone]];
  };

  return (
    <Box
      width="100%"
      height="100%"
      background="linear-gradient(to bottom, #f2f9ff, #ffffff)"
      borderRadius={{ base: "0 0 16px 16px", md: "0 24px 24px 0" }}
      position="relative"
      overflow="hidden"
      p={{ base: 4, sm: 5, md: 6, lg: 8 }}
      display="flex"
      flexDirection="column"
      borderLeft={{ base: "none", md: "4px solid #5f9df7" }}
      borderTop={{ base: "4px solid #5f9df7", md: "none" }}
      boxShadow="0px 4px 12px rgba(0,0,0,0.05)"
    >
      {/* Header */}
      <Box mb={{ base: 3, md: 6 }}>
        <Flex alignItems="center" justifyContent="space-between" mb={3}>
          <img
            src="/logo-transparent.png"
            alt="Clarivue"
            style={{
              height: isMobile ? '24px' : '28px',
              objectFit: 'contain'
            }}
          />
          <Box
            width={{ base: "6px", md: "8px" }}
            height={{ base: "6px", md: "8px" }}
            borderRadius="50%"
            bg="#10B981"
          />
        </Flex>
      </Box>

      {/* Tone Analysis Circle */}
      <Box mb={{ base: 4, md: 6 }} textAlign="center">
        <Box position="relative" display="inline-block" mb={{ base: 2, md: 4 }}>
          <motion.div 
            style={{ 
              width: isMobile ? '80px' : '100px',
              height: isMobile ? '80px' : '100px',
              borderRadius: '50%',
              background: `conic-gradient(${TONE_COLORS[TONE_STATES[currentTone]]} ${getTonePercentage() * 3.6}deg, #F3F4F6 0deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Box
              width={isMobile ? "64px" : "80px"}
              height={isMobile ? "64px" : "80px"}
              borderRadius="50%"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Text
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight="700"
                color={TONE_COLORS[TONE_STATES[currentTone]]}
                fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
              >
                {getTonePercentage()}%
              </Text>
            </Box>
          </motion.div>
        </Box>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentTone}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={{ base: "14px", sm: "16px", md: "20px" }}
              fontWeight="600"
              color={TONE_COLORS[TONE_STATES[currentTone]]}
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
              mb={1}
              lineHeight="1.2"
            >
              {TONE_STATES[currentTone]}
            </Text>
            <Text
              fontSize={{ base: "12px", sm: "13px", md: "15px" }}
              color="#6B7280"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
              lineHeight="1.3"
              px={{ base: 2, md: 0 }}
            >
              {getToneDescription()}
            </Text>
          </motion.div>
        </AnimatePresence>

        <Flex alignItems="center" justifyContent="center" mt={{ base: 2, md: 3 }}>
          <Box
            width={{ base: "6px", md: "8px" }}
            height={{ base: "6px", md: "8px" }}
            borderRadius="50%"
            bg="#EF4444"
            mr={{ base: 1, md: 2 }}
          />
          <Text
            fontSize={{ base: "10px", sm: "11px", md: "12px" }}
            color="#6B7280"
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing="0.5px"
            fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
          >
            LIVE ANALYSIS
          </Text>
        </Flex>
      </Box>

      {/* Tabs */}
      <Box mb={{ base: 3, md: 4 }} position="relative">
        <Flex gap={{ base: 1, md: 1 }} justify="space-between">
          <Box
            as="button"
            onClick={() => setActiveTab('questions')}
            px={{ base: 2, sm: 3, md: 4 }}
            py={{ base: 1.5, md: 2.5 }}
            borderRadius="8px"
            bg={activeTab === 'questions' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'questions' ? 'white' : '#5f9df7'}
            fontSize={{ base: "12px", sm: "14px", md: "15px" }}
            fontWeight="600"
            fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
            position="relative"
            transition="all 0.2s ease"
            _hover={{ bg: activeTab === 'questions' ? '#4a8ae8' : 'rgba(95, 157, 247, 0.15)' }}
            _active={{ transform: "scale(0.98)" }}
            display="flex"
            alignItems="center"
            gap={{ base: 1, md: 1.5 }}
            minH={{ base: "32px", md: "auto" }}
            flex="1"
            justifyContent="center"
          >
            {isMobile ? "Questions" : "Questions"}
            <Box
              width={{ base: "16px", md: "20px" }}
              height={{ base: "16px", md: "20px" }}
              borderRadius="50%"
              bg={activeTab === 'questions' ? 'rgba(255,255,255,0.3)' : '#EF4444'}
              color={activeTab === 'questions' ? 'white' : 'white'}
              fontSize={{ base: "8px", md: "11px" }}
              fontWeight="700"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              1
            </Box>
          </Box>
          
          <Box
            as="button"
            onClick={() => setActiveTab('cues')}
            px={{ base: 2, sm: 3, md: 4 }}
            py={{ base: 1.5, md: 2.5 }}
            borderRadius="8px"
            bg={activeTab === 'cues' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'cues' ? 'white' : '#5f9df7'}
            fontSize={{ base: "12px", sm: "14px", md: "15px" }}
            fontWeight="600"
            fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
            position="relative"
            transition="all 0.2s ease"
            _hover={{ bg: activeTab === 'cues' ? '#4a8ae8' : 'rgba(95, 157, 247, 0.15)' }}
            _active={{ transform: "scale(0.98)" }}
            display="flex"
            alignItems="center"
            gap={{ base: 1, md: 1.5 }}
            minH={{ base: "32px", md: "auto" }}
            flex="1"
            justifyContent="center"
          >
            {isMobile ? "Cues" : "Cues"}
            <Box
              width={{ base: "16px", md: "20px" }}
              height={{ base: "16px", md: "20px" }}
              borderRadius="50%"
              bg={activeTab === 'cues' ? 'rgba(255,255,255,0.3)' : '#EF4444'}
              color={activeTab === 'cues' ? 'white' : 'white'}
              fontSize={{ base: "8px", md: "11px" }}
              fontWeight="700"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              3
            </Box>
          </Box>
        </Flex>

        {/* Simulated Cursor Animation - Desktop Only */}
            <AnimatePresence>
          {showCursor && !isMobile && (
                <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
                  style={{
                position: 'absolute',
                top: cursorPosition === 'questions' ? '8px' : '8px',
                left: cursorPosition === 'questions' ? '30px' : '90px',
                zIndex: 20,
                fontSize: '16px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                pointerEvents: 'none'
                  }}
                >
                  <motion.div
                    animate={{ 
                  scale: [1, 0.9, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 0.3 }}
              >
                🖱️
              </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
      </Box>

      {/* Smart suggestions label */}
      <Text
        fontSize={{ base: "12px", sm: "14px", md: "16px" }}
        color="#6B7280"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        mb={{ base: 2, md: 3 }}
        lineHeight="1.3"
        px={{ base: 1, md: 0 }}
      >
        {isMobile ? "Smart suggestions for your interview" : `Smart ${activeTab === 'questions' ? 'questions' : 'cues'} for your interview`}
      </Text>

      {/* Content Card */}
      <Box flex="1">
        <Box
          background="rgba(255, 255, 255, 0.8)"
          borderRadius="12px"
          border="1px solid rgba(95, 157, 247, 0.15)"
          p={{ base: 3, sm: 4, md: 5 }}
          minHeight={{ base: "100px", sm: "120px", md: "140px" }}
          position="relative"
          boxShadow="0px 2px 8px rgba(0,0,0,0.04)"
        >
          <AnimatePresence mode="wait">
            {activeTab === 'questions' ? (
              <motion.div 
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Text
                  fontSize={{ base: "14px", sm: "16px", md: "18px" }}
                  color="#1F2937"
                  fontWeight="500"
                  lineHeight="1.4"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  mb={{ base: 3, md: 4 }}
                  pr={{ base: 6, md: 8 }}
                >
                  {QUESTIONS[currentQuestion]}
                </Text>
                <Flex gap={{ base: 1.5, md: 2 }} flexWrap="wrap">
                  <Box
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 1.5 }}
                    borderRadius="6px"
                    bg="#FEE2E2"
                    color="#DC2626"
                    fontSize={{ base: "10px", md: "12px" }}
                    fontWeight="500"
                    fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    high
                  </Box>
                  <Box
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 1.5 }}
                    borderRadius="6px"
                    bg="#F3F4F6"
                    color="#4B5563"
                    fontSize={{ base: "10px", md: "12px" }}
                    fontWeight="500"
                    fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Priority
                  </Box>
                </Flex>
              </motion.div>
            ) : (
              <motion.div 
                key={`cue-${currentCue}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Text
                  fontSize={{ base: "14px", sm: "16px", md: "18px" }}
                  color="#1F2937"
                  fontWeight="500"
                  lineHeight="1.4"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  mb={{ base: 3, md: 4 }}
                  pr={{ base: 6, md: 8 }}
                >
                  {CUES[currentCue]}
                </Text>
                <Flex gap={{ base: 1.5, md: 2 }} flexWrap="wrap">
                  <Box
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 1.5 }}
                    borderRadius="6px"
                    bg="#DBEAFE"
                    color="#2563EB"
                    fontSize={{ base: "10px", md: "12px" }}
                    fontWeight="500"
                    fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    suggestion
                  </Box>
                  <Box
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 1.5 }}
                    borderRadius="6px"
                    bg="#F3F4F6"
                    color="#4B5563"
                    fontSize={{ base: "10px", md: "12px" }}
                    fontWeight="500"
                    fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Active
                  </Box>
                </Flex>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons in top right */}
          <Flex 
            position="absolute" 
            top={{ base: "12px", md: "16px" }}
            right={{ base: "12px", md: "16px" }}
            gap={{ base: 1.5, md: 2 }}
          >
            <Box
              width={{ base: "24px", md: "28px" }}
              height={{ base: "24px", md: "28px" }}
              borderRadius="6px"
              border="1px solid rgba(95, 157, 247, 0.2)"
              bg="rgba(255, 255, 255, 0.9)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ bg: "rgba(95, 157, 247, 0.05)" }}
              _active={{ transform: "scale(0.95)" }}
              transition="all 0.2s ease"
              minW={{ base: "24px", md: "28px" }}
              minH={{ base: "24px", md: "28px" }}
              boxShadow="0px 1px 4px rgba(0,0,0,0.03)"
            >
              <Text fontSize={{ base: "12px", md: "14px" }} color="#5f9df7">⎘</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
});

ClarivueSimulatedPane.displayName = 'ClarivueSimulatedPane';

// New Media Section that splits into video (left) and UI pane (right)
const MediaSection = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  // Enhanced mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = useMemo(() => ({
    w: { base: "95vw", sm: "95vw", md: "85vw", lg: "80vw", xl: "75vw", "2xl": "70vw" },
    maxW: { base: "100%", sm: "600px", md: "900px", lg: "1200px", xl: "1400px", "2xl": "1600px" },
    minW: { base: "320px", md: "600px" },
    mx: "auto",
    position: "relative" as const,
    borderRadius: { base: "16px", sm: "16px", md: "24px" },
    overflow: "hidden",
    boxShadow: { 
      base: "0 10px 25px -5px rgba(59, 130, 246, 0.15)", 
      sm: "0 10px 25px -5px rgba(59, 130, 246, 0.15)", 
      md: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
    },
    zIndex: 2,
    height: "auto",
    transition: "all 0.3s ease-in-out",
    _hover: {
      transform: { base: "none", md: "scale(1.02)" },
      boxShadow: { 
        base: "0 15px 35px -5px rgba(59, 130, 246, 0.2)", 
        md: "0 35px 60px -12px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      }
    }
  }), []);

  const videoContainerStyle = useMemo(() => ({
    position: "relative" as const,
    w: "100%",
    display: "flex",
    justifyContent: "center",
    px: { base: 2, sm: 3, md: 6 },
    zIndex: 3,
    mt: { base: 6, sm: 8, md: 12, lg: 14 },
    mb: { base: 2, sm: 4, md: 8 }
  }), []);

  return (
    <Box {...containerStyle}>
      <Flex 
        width="100%" 
        height="100%" 
        direction={{ base: "column", md: "row" }}
        minH={{ base: "auto", md: "400px" }}
      >
        {/* Video Section - Full width on mobile, 75% on desktop */}
        <Box 
          width={{ base: "100%", md: "75%" }}
          height={{ base: "280px", sm: "320px", md: "100%" }}
          overflow="hidden"
          position="relative"
          flexShrink={0}
          pr={{ base: 0, md: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 0, md: 0 }}
        >
          <VideoComponent />
        </Box>
        
        {/* UI Pane Section - Full width on mobile, 25% on desktop */}
        <Box 
          width={{ base: "100%", md: "25%" }}
          height={{ base: "auto", md: "100%" }}
          minH={{ base: "300px", sm: "320px", md: "auto" }}
          overflow="hidden"
          position="relative"
          flexShrink={0}
          bg="white"
          borderRadius={{ base: "0 0 16px 16px", md: "0 24px 24px 0" }}
        >
          <ClarivueSimulatedPane />
        </Box>
      </Flex>
    </Box>
  );
});

MediaSection.displayName = 'MediaSection';

// Performance optimization hook
const usePerformanceOptimization = () => {
  useEffect(() => {
    // Optimize animations for low-end devices
    const connection = (navigator as { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
    const isSlowConnection = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' ||
      connection.saveData
    );

    if (isSlowConnection) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    // Detect mobile device for appropriate preloading
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Preload GIF for mobile devices
      const gifPreloader = document.createElement('link');
      gifPreloader.rel = 'prefetch';
      gifPreloader.href = '/hero-video-clarivue.gif';
      gifPreloader.as = 'image';
      document.head.appendChild(gifPreloader);
    } else {
      // Preload video with proper priority for desktop
      const videoPreloader = document.createElement('link');
      videoPreloader.rel = 'prefetch';
      videoPreloader.href = '/hero-video-clarivue.mp4';
      videoPreloader.as = 'video';
      document.head.appendChild(videoPreloader);

      // Preload alternative video formats if available
      const webmPreloader = document.createElement('link');
      webmPreloader.rel = 'prefetch';
      webmPreloader.href = '/hero-video-clarivue.webm';
      webmPreloader.as = 'video';
      document.head.appendChild(webmPreloader);
    }

    return () => {
      // Cleanup preload links
      const preloadLinks = document.querySelectorAll('link[rel="prefetch"]');
      preloadLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('hero-video-clarivue')) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);
};

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
    px: { base: 2, sm: 3, md: 6 },
    zIndex: 3,
    mt: { base: 6, sm: 8, md: 12, lg: 14 },
    mb: { base: 2, sm: 4, md: 8 }
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
              Ask smarter questions, spot hidden signals, and make faster hiring decisions with real-time cues, tone detection, instant scoring, and automated notes.
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

      {/* Media Container - Split into Video (70%) and UI Pane (30%) */}
      <Box {...videoContainerStyle}>
        <MediaSection />
      </Box>
    </Box>
  )
}); 