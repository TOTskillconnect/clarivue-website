import { Box, Container, Text, SimpleGrid, Button, VStack, Image, Heading } from '@chakra-ui/react'

interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

const FeatureCard = ({ tag, title, description, imageSrc, imageAlt, bgColor }: FeatureCardProps) => (
  <Box
    bg={bgColor}
    borderRadius="32px"
    p={6}
    boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
    border="1px solid"
    borderColor="gray.100"
    height="100%"
    display="flex"
    flexDirection="column"
  >
    {/* Tag */}
    <Box
      bg="white"
      color="primary.500"
      fontSize="16px"
      fontWeight="600"
      px={4}
      py={1.5}
      borderRadius="full"
      width="fit-content"
      mb={3}
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)"
    >
      {tag}
    </Box>

    {/* Title */}
    <Text
      fontSize="32px"
      fontWeight="700"
      color="gray.900"
      mb={3}
      fontFamily="heading"
      letterSpacing="-0.02em"
      lineHeight="1.2"
    >
      {title}
    </Text>

    {/* Description */}
    <Text
      fontSize="18px"
      color="gray.600"
      mb={5}
      lineHeight="1.6"
      flex="1"
    >
      {description}
    </Text>

    {/* Image */}
    <Box 
      bg="transparent"
      borderRadius="24px" 
      p={5}
      height="398px"
      position="relative"
      overflow="hidden"
      mt={4}
      transform="scale(1.3) translateY(-5%)"
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

export const ConversionOutputSection = () => {
  return (
    <Box py={20} bg="#F2F9FF">
      <Container maxW="container.xl">
        {/* Header Section */}
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "40px", md: "48px", lg: "56px" }}
            lineHeight={{ base: "48px", md: "56px", lg: "64px" }}
            fontWeight="700"
            color="primary.500"
            mb={6}
            letterSpacing="-0.02em"
          >
            AI That Thinks With You During Interviews
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "20px", lg: "24px" }}
            lineHeight={{ base: "28px", md: "32px", lg: "36px" }}
            color="primary.600"
            maxW="900px"
            mx="auto"
          >
            Clarivue captures what matters, scores what counts, and keeps your team aligned — all in real time.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
          {/* Card 1 - Interviews */}
          <FeatureCard
            tag="FOR Interviews"
            title="Gauge tone, confidence & alignment in real-time"
            description="We don't just capture what candidates say — it picks up on how they say it. Our AI analyzes vocal tone, confidence levels, and alignment with the role throughout the conversation."
            imageSrc="/tone-card.png"
            imageAlt="Tone Analysis Interface"
            bgColor="#F0F7FF"
          />

          {/* Card 2 - Assessments */}
          <FeatureCard
            tag="FOR Assessments"
            title="Auto-generate & auto-score, straight from your JD"
            description="Forget filling out scorecards after every call. Clarivue automatically turns your job description into a scoring framework and evaluates responses as the interview unfolds."
            imageSrc="/scorecard.png"
            imageAlt="Assessment Scoring Interface"
            bgColor="#F0FFF4"
          />

          {/* Card 3 - Hiring Teams */}
          <FeatureCard
            tag="FOR Hiring Teams"
            title="Collaborate easily across your team"
            description="Clarivue brings everyone on the hiring team into one shared view. Notes, cues, scores, and follow-ups are all centralized and easy to review — whether you're making decisions solo or with a panel."
            imageSrc="/collabo.png"
            imageAlt="Team Collaboration Interface"
            bgColor="#F7FAFC"
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
} 