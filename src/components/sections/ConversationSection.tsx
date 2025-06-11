import {
  Box,
  Container,
  Text,
  Image,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Divider,
  Icon
} from '@chakra-ui/react'
import { useState } from 'react'
import { 
  ChatIcon, 
  StarIcon, 
  EditIcon, 
  LockIcon 
} from '@chakra-ui/icons'

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: ChatIcon,
    title: "Live Follow-Up Questions and Cues",
    description: "Clarivue listens in real-time and suggests tailored follow-up questions based on candidate responses. It reads tone, intent, and context — helping you ask sharper questions, uncover red flags, and keep interviews flowing naturally.",
    image: "/live-questions.png"
  },
  {
    icon: StarIcon,
    title: "Automated Scorecards, Built from Your JD",
    description: "Clarivue transforms job descriptions into scoring rubrics and auto-scores candidates based on alignment with role requirements. Eliminate manual scoring, bring structure to evaluations, and make confident decisions faster.",
    image: "/automated-scorecard.png"
  },
  {
    icon: EditIcon,
    title: "No More Typing. No More Guesswork.",
    description: "Clarivue automatically takes notes during interviews and structures them clearly — so hiring teams can focus on the conversation. Share-ready summaries and timestamped insights help reduce admin work to zero.",
    image: "/summary-note-cards-blue.png"
  },
  {
    icon: LockIcon,
    title: "Enterprise-Grade Security and Compliance",
    description: "Clarivue is built with security at its core — meeting SOC II, GDPR, and CCPA standards. With encrypted storage, customizable data retention, and strict access control, your hiring data is protected at every step.",
    image: "/Selection.png"
  }
];

export const ConversationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <Box 
      id="features"
      as="section" 
      py={20} 
      bg="white"
      scrollMarginTop="100px"
    >
      <Container maxW="container.xl">
        {/* Centered header section */}
        <Box textAlign="center" mb={16}>
          <Text
            fontSize={{ base: "40px", md: "48px", lg: "56px" }}
            lineHeight={{ base: "48px", md: "56px", lg: "64px" }}
            fontWeight="700"
            color="primary.500"
            mb={6}
            letterSpacing="-0.02em"
          >
            You Lead the Interview, We Handle the Rest
          </Text>
          <Text
            fontSize={{ base: "18px", md: "20px", lg: "24px" }}
            lineHeight={{ base: "28px", md: "32px", lg: "36px" }}
            color="primary.600"
            maxW="900px"
            mx="auto"
          >
            From capturing responses and tone to suggesting follow-ups and auto-scoring candidates,{' '}
            Clarivue takes care of the busywork — so you can focus on connecting with top talents and making smarter hiring decisions.
          </Text>
        </Box>

        {/* Main content area */}
        <Box position="relative">
          {/* Right side image container - fixed position */}
          <Box
            position="absolute"
            top={0}
            right={0}
            width="60%"
            height="100%"
            display={{ base: 'none', md: 'block' }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                opacity={expandedIndex === index ? 1 : 0}
                visibility={expandedIndex === index ? 'visible' : 'hidden'}
                transition="opacity 0.3s ease-in-out"
                borderRadius="24px"
                overflow="hidden"
                bg={
                  index === 0
                    ? 'blue.50'  // Soft blue for live questions
                    : index === 1
                    ? 'purple.50'  // Soft purple for scorecards
                    : index === 2
                    ? 'cyan.50'  // Soft cyan for note taking
                    : 'gray.50'  // Soft gray for security
                }
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  p={6}
                />
              </Box>
            ))}
          </Box>

          {/* Left side accordion */}
          <Box width={{ base: "100%", md: "40%" }} position="relative" zIndex={1}>
            <Accordion
              allowToggle
              index={expandedIndex}
              onChange={(index: number) => setExpandedIndex(index)}
            >
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={6}
                  bg="transparent"
                  overflow="hidden"
                >
                  <AccordionButton
                    p={0}
                    py={6}
                    _hover={{ bg: 'transparent' }}
                    _expanded={{ bg: 'transparent' }}
                    display="flex"
                    alignItems="center"
                  >
                    <HStack flex="1" spacing={4} align="center">
                      <Box
                        fontSize="20px"
                        width="32px"
                        height="32px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="primary.50"
                        borderRadius="8px"
                      >
                        <Icon 
                          as={feature.icon} 
                          boxSize="18px" 
                          color="primary.500"
                        />
                      </Box>
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        color="gray.800"
                        letterSpacing="-0.02em"
                      >
                        {feature.title}
                      </Text>
                    </HStack>
                    <AccordionIcon fontSize="20px" color="gray.400" />
                  </AccordionButton>

                  <AccordionPanel p={0} pt={4} pb={8}>
                    <Text
                      fontSize="16px"
                      lineHeight="1.6"
                      color="gray.600"
                      pr={{ base: 0, md: 8 }}
                    >
                      {feature.description}
                    </Text>
                  </AccordionPanel>

                  {index < features.length - 1 && (
                    <Divider borderColor="gray.200" opacity={0.6} />
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 