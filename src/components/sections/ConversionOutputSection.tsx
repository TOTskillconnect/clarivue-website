import { Box, Container, Text, SimpleGrid, Button, VStack, Image, Heading, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState, useRef, useEffect } from 'react'

interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  isMobile?: boolean;
}

const FeatureCard = ({ tag, title, description, imageSrc, imageAlt, bgColor, isMobile = false }: FeatureCardProps) => (
  <Box
    bg={bgColor}
    borderRadius={{ base: "20px", md: "24px", lg: "32px" }}
    p={{ base: 4, md: 5, lg: 6 }}
    boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
    border="1px solid"
    borderColor="gray.100"
    height="100%"
    display="flex"
    flexDirection="column"
    minH={{ base: "500px", md: "550px", lg: "auto" }}
    maxW={isMobile ? "100%" : "none"}
    mx={isMobile ? "0" : "0"}
    width="100%"
  >
    {/* Tag */}
    <Box
      bg="white"
      color="primary.500"
      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
      fontWeight="600"
      px={{ base: 3, md: 4 }}
      py={{ base: 1, md: 1.5 }}
      borderRadius="full"
      width="fit-content"
      mb={{ base: 2, md: 3 }}
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)"
    >
      {tag}
    </Box>

    {/* Title */}
    <Text
      fontSize={{ base: "22px", md: "28px", lg: "32px" }}
      fontWeight="700"
      color="gray.900"
      mb={{ base: 2, md: 3 }}
      fontFamily="heading"
      letterSpacing="-0.02em"
      lineHeight="1.2"
    >
      {title}
    </Text>

    {/* Description */}
    <Text
      fontSize={{ base: "15px", md: "17px", lg: "18px" }}
      color="gray.600"
      mb={{ base: 4, md: 5 }}
      lineHeight="1.6"
      flex="1"
    >
      {description}
    </Text>

    {/* Image */}
    <Box 
      bg="transparent"
      borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
      p={{ base: 3, md: 4, lg: 5 }}
      height={{ base: "260px", md: "320px", lg: "398px" }}
      position="relative"
      overflow="hidden"
      mt={{ base: 2, md: 4 }}
      transform={{ base: "scale(1.05)", md: "scale(1.2)", lg: "scale(1.3) translateY(-5%)" }}
      transformOrigin="center center"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </Box>
  </Box>
)

const features = [
  {
    tag: "FOR Interviews",
    title: "Gauge tone, confidence & alignment in real-time",
    description: "We don't just capture what candidates say — it picks up on how they say it. Our AI analyzes vocal tone, confidence levels, and alignment with the role throughout the conversation.",
    imageSrc: "/tone-card.png",
    imageAlt: "Tone Analysis Interface",
    bgColor: "#F0F7FF"
  },
  {
    tag: "FOR Assessments", 
    title: "Auto-generate & auto-score, straight from your JD",
    description: "Forget filling out scorecards after every call. Clarivue automatically turns your job description into a scoring framework and evaluates responses as the interview unfolds.",
    imageSrc: "/scorecard.png",
    imageAlt: "Assessment Scoring Interface", 
    bgColor: "#F0FFF4"
  },
  {
    tag: "FOR Hiring Teams",
    title: "Collaborate easily across your team", 
    description: "Clarivue brings everyone on the hiring team into one shared view. Notes, cues, scores, and follow-ups are all centralized and easy to review — whether you're making decisions solo or with a panel.",
    imageSrc: "/collabo.png",
    imageAlt: "Team Collaboration Interface",
    bgColor: "#F7FAFC"
  }
];

export const ConversionOutputSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0); // Reset touch end
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < features.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Debug: log current slide
  console.log('Current slide:', currentSlide, 'Transform:', `translateX(-${currentSlide * 100}%)`);

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="#F2F9FF">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ base: 10, md: 12, lg: 16 }}>
          <Heading
            as="h2"
            fontSize={{ base: "32px", sm: "36px", md: "40px", lg: "48px", xl: "56px" }}
            lineHeight={{ base: "40px", sm: "44px", md: "48px", lg: "56px", xl: "64px" }}
            fontWeight="700"
            color="primary.500"
            mb={{ base: 4, md: 6 }}
            letterSpacing="-0.02em"
            px={{ base: 2, sm: 0 }}
          >
            AI That Thinks With You During Interviews
          </Heading>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px" }}
            lineHeight={{ base: "24px", sm: "28px", md: "32px", lg: "34px", xl: "36px" }}
            color="primary.600"
            maxW="900px"
            mx="auto"
            px={{ base: 4, sm: 2, md: 0 }}
          >
            Clarivue captures what matters, scores what counts, and keeps your team aligned — all in real time.
          </Text>
        </Box>

        {/* Mobile Carousel */}
        {isMobile && (
          <Box position="relative" width="100%">
            {/* Carousel Container */}
            <Box
              ref={carouselRef}
              overflow="hidden"
              borderRadius="20px"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              width="100%"
            >
              <Box
                display="flex"
                transform={`translateX(-${currentSlide * 100}%)`}
                transition="transform 0.3s ease-in-out"
              >
                {features.map((feature, index) => (
                  <Box 
                    key={index} 
                    minW="100%"
                    width="100%"
                    flexShrink={0}
                    px={4}
                  >
                    <FeatureCard {...feature} isMobile={true} />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Navigation Buttons */}
            <HStack justify="space-between" position="absolute" top="50%" transform="translateY(-50%)" width="100%" px={2} pointerEvents="none">
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronLeftIcon />}
                onClick={prevSlide}
                isDisabled={currentSlide === 0}
                bg="white"
                color="primary.500"
                borderRadius="full"
                size="sm"
                boxShadow="0px 2px 12px rgba(0, 0, 0, 0.15)"
                _hover={{ bg: 'gray.50' }}
                _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
                pointerEvents="auto"
              />
              <IconButton
                aria-label="Next slide"
                icon={<ChevronRightIcon />}
                onClick={nextSlide}
                isDisabled={currentSlide === features.length - 1}
                bg="white"
                color="primary.500"
                borderRadius="full"
                size="sm"
                boxShadow="0px 2px 12px rgba(0, 0, 0, 0.15)"
                _hover={{ bg: 'gray.50' }}
                _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
                pointerEvents="auto"
              />
            </HStack>

            {/* Dot Indicators */}
            <HStack justify="center" mt={6} spacing={2}>
              {features.map((_, index) => (
                <Box
                  key={index}
                  width="8px"
                  height="8px"
                  borderRadius="full"
                  bg={currentSlide === index ? 'primary.500' : 'gray.300'}
                  cursor="pointer"
                  onClick={() => goToSlide(index)}
                  transition="all 0.2s"
                  _hover={{ transform: 'scale(1.2)' }}
                />
              ))}
            </HStack>

            {/* Slide Counter */}
            <Text
              textAlign="center"
              fontSize="14px"
              color="gray.500"
              mt={3}
            >
              {currentSlide + 1} of {features.length}
            </Text>
          </Box>
        )}

        {/* Desktop Grid */}
        {!isMobile && (
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  )
} 