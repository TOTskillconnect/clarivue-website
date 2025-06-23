'use client';

import React from 'react';
import { Box, Container, Heading, Text, Flex, Grid, GridItem, Avatar, VStack, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiInfo, FiTrendingUp, FiUsers, FiClock, FiTarget } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

export const UserStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <Box 
      as="section"
      bg="primary.50"
      py={{ base: 16, md: 20, lg: 24 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
        {/* Header */}
        <MotionBox 
          textAlign="center" 
          mb={{ base: 12, md: 16 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "40px", lg: "48px" }}
             fontWeight="700"
            color="primary.500"
            mb={6}
            lineHeight="1.1"
          >
            Data-Backed Impact. Real Teams. Real Results.
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            color="#6B7280"
            maxW="600px"
            mx="auto"
            lineHeight="1.5"
            fontWeight="400"
          >
           Trusted by hiring teams to shorten decisions, surface top talent, and cut the noise.
          </Text>
        </MotionBox>

        {/* Cards Grid - 2 rows x 4 columns */}
        <MotionGrid
          ref={ref}
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          mb={12}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Row 1 - Card 1: Bongshim E. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F2F9FF"
              borderRadius="16px"
              p={6}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="primary.100"
              position="relative"
              overflow="hidden"
            >
              {/* Company Logo Background */}
              <Box
                position="absolute"
                top={4}
                right={4}
                opacity={0.1}
                fontSize="24px"
                fontWeight="bold"
                color="primary.500"
              >
                S
              </Box>
              <HStack spacing={1} mb={3}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="primary.500" fontSize="18px">★</Text>
                ))}
              </HStack>
              <Text
                fontWeight="700"
                color="gray.800"
                fontSize="14px"
                mb={3}
                lineHeight="1.3"
              >
                "Clarivue cut our hiring process by half. The smart suggestions are a game changer."
              </Text>
              <HStack spacing={3}>
                <Avatar 
                  size="sm" 
                  bg="primary.500" 
                  color="white"
                  name="Bongshim E"
                  fontWeight="600"
                />
                <VStack spacing={0} align="start">
                  <Text fontWeight="700" color="gray.800" fontSize="12px">Bongshim E.</Text>
                  <HStack spacing={1}>
                    <Text color="gray.500" fontSize="12px">Engineering Lead</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="primary.600" fontSize="12px" fontWeight="600">Softello</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 2: +72% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="white"
              borderRadius="16px"
              p={6}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              border="2px solid"
              borderColor="secondary.100"
              position="relative"
            >
              <Icon 
                as={FiTrendingUp} 
                position="absolute"
                top={4}
                right={4}
                color="secondary.300"
                w={5}
                h={5}
              />
              <MotionBox variants={numberVariants}>
                <Text
                  fontSize="72px"
                  fontWeight="800"
                  color="secondary.500"
                  lineHeight="1"
                  mb={2}
                  textShadow="0 2px 4px rgba(95,157,247,0.1)"
                >
                  +72%
                </Text>
              </MotionBox>
              <HStack spacing={1} mb={1}>
                <Text
                  fontWeight="700"
                  color="gray.800"
                  fontSize="14px"
                >
                  Interview Completion Rate
                </Text>
                <Tooltip 
                  label="Clarivue's AI insights help candidates feel more prepared and engaged"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="gray.400" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="gray.600" fontSize="12px" mb={3}>
                Technical Roles
              </Text>
              <HStack spacing={1}>
                <Box w="6px" h="6px" bg="secondary.500" borderRadius="full" />
                <Text color="gray.500" fontSize="12px" fontWeight="600">
                  DevSync
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 3: David K. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F2F9FF"
              borderRadius="16px"
              p={6}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="primary.100"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={4}
                right={4}
                opacity={0.1}
                fontSize="24px"
                fontWeight="bold"
                color="primary.500"
              >
                P
              </Box>
              <HStack spacing={1} mb={3}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="primary.500" fontSize="18px">★</Text>
                ))}
              </HStack>
              <Text
                color="gray.700"
                fontSize="14px"
                mb={4}
                fontWeight="500"
                lineHeight="1.4"
              >
                "AI summaries help our hiring managers make decisions 2x faster."
              </Text>
              <HStack spacing={3}>
                <Avatar 
                  size="sm" 
                  bg="primary.500" 
                  color="white"
                  name="David K"
                  fontWeight="600"
                />
                <VStack spacing={0} align="start">
                  <Text fontWeight="700" color="gray.800" fontSize="12px">David K.</Text>
                  <HStack spacing={1}>
                    <Text color="gray.500" fontSize="12px">Senior Recruiter</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="primary.600" fontSize="12px" fontWeight="600">Paxlight</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 4: +38% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="white"
              borderRadius="16px"
              p={6}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              border="2px solid"
              borderColor="secondary.100"
              position="relative"
            >
              <Icon 
                as={FiTarget} 
                position="absolute"
                top={4}
                right={4}
                color="secondary.300"
                w={5}
                h={5}
              />
              <MotionBox variants={numberVariants}>
                <Text
                  fontSize="72px"
                  fontWeight="800"
                  color="secondary.500"
                  lineHeight="1"
                  mb={2}
                  textShadow="0 2px 4px rgba(95,157,247,0.1)"
                >
                  +38%
                </Text>
              </MotionBox>
              <HStack spacing={1} mb={1}>
                <Text
                  fontWeight="700"
                  color="gray.800"
                  fontSize="14px"
                >
                  Offer Acceptance Rate
                </Text>
                <Tooltip 
                  label="Better candidate experience leads to higher acceptance rates"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="gray.400" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="gray.600" fontSize="12px" mb={3}>
                Design Roles
              </Text>
              <HStack spacing={1}>
                <Box w="6px" h="6px" bg="secondary.500" borderRadius="full" />
                <Text color="gray.500" fontSize="12px" fontWeight="600">
                  Lunaria
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 1: Curtis M. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F2F9FF"
              borderRadius="16px"
              p={6}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="primary.100"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={4}
                right={4}
                opacity={0.1}
                fontSize="24px"
                fontWeight="bold"
                color="primary.500"
              >
                K
              </Box>
              <HStack spacing={1} mb={3}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="primary.500" fontSize="18px">★</Text>
                ))}
              </HStack>
              <Text
                color="gray.700"
                fontSize="14px"
                mb={4}
                fontWeight="500"
                lineHeight="1.4"
              >
                "We're seeing deeper candidate insights, even in early-stage interviews."
              </Text>
              <HStack spacing={3}>
                <Avatar 
                  size="sm" 
                  bg="primary.500" 
                  color="white"
                  name="Curtis M"
                  fontWeight="600"
                />
                <VStack spacing={0} align="start">
                  <Text fontWeight="700" color="gray.800" fontSize="12px">Curtis M.</Text>
                  <HStack spacing={1}>
                    <Text color="gray.500" fontSize="12px">People Ops</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="primary.600" fontSize="12px" fontWeight="600">Kinetic</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 2: +100 Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="white"
              borderRadius="16px"
              p={6}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              border="2px solid"
              borderColor="secondary.100"
              position="relative"
            >
              <Icon 
                as={FiUsers} 
                position="absolute"
                top={4}
                right={4}
                color="secondary.300"
                w={5}
                h={5}
              />
              <MotionBox variants={numberVariants}>
                <Text
                  fontSize="72px"
                  fontWeight="800"
                  color="secondary.500"
                  lineHeight="1"
                  mb={2}
                  textShadow="0 2px 4px rgba(95,157,247,0.1)"
                >
                  +100
                </Text>
              </MotionBox>
              <HStack spacing={1} mb={1}>
                <Text
                  fontWeight="700"
                  color="gray.800"
                  fontSize="14px"
                >
                  Scored Candidates
                </Text>
                <Tooltip 
                  label="AI-powered scoring evaluates candidates instantly"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="gray.400" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="gray.600" fontSize="12px" mb={3}>
                In under 24 hours
              </Text>
              <HStack spacing={1}>
                <Box w="6px" h="6px" bg="secondary.500" borderRadius="full" />
                <Text color="gray.500" fontSize="12px" fontWeight="600">
                  TalentHub
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 3: Avana Montec Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F2F9FF"
              borderRadius="16px"
              p={6}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="primary.100"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={4}
                right={4}
                opacity={0.1}
                fontSize="24px"
                fontWeight="bold"
                color="primary.500"
              >
                B
              </Box>
              <HStack spacing={1} mb={3}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="primary.500" fontSize="18px">★</Text>
                ))}
              </HStack>
              <Text
                color="gray.700"
                fontSize="14px"
                mb={4}
                fontWeight="500"
                lineHeight="1.4"
              >
                "Clarivue helped us sync up panel feedback instantly. No more email chaos!"
              </Text>
              <HStack spacing={3}>
                <Avatar 
                  size="sm" 
                  bg="primary.500" 
                  color="white"
                  name="Avana Montec"
                  fontWeight="600"
                />
                <VStack spacing={0} align="start">
                  <Text fontWeight="700" color="gray.800" fontSize="12px">Avana Montec</Text>
                  <HStack spacing={1}>
                    <Text color="gray.500" fontSize="12px">Hiring Manager</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="primary.600" fontSize="12px" fontWeight="600">Bravatek</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 4: -40% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="white"
              borderRadius="16px"
              p={6}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              border="2px solid"
              borderColor="secondary.100"
              position="relative"
            >
              <Icon 
                as={FiClock} 
                position="absolute"
                top={4}
                right={4}
                color="secondary.300"
                w={5}
                h={5}
              />
              <MotionBox variants={numberVariants}>
                <Text
                  fontSize="72px"
                  fontWeight="800"
                  color="secondary.500"
                  lineHeight="1"
                  mb={2}
                  textShadow="0 2px 4px rgba(95,157,247,0.1)"
                >
                  -40%
                </Text>
              </MotionBox>
              <HStack spacing={1} mb={1}>
                <Text
                  fontWeight="700"
                  color="gray.800"
                  fontSize="14px"
                >
                  Time to Decision
                </Text>
                <Tooltip 
                  label="Streamlined feedback collection accelerates hiring decisions"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="gray.400" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="gray.600" fontSize="12px" mb={3}>
                Across 6 departments
              </Text>
              <HStack spacing={1}>
                <Box w="6px" h="6px" bg="secondary.500" borderRadius="full" />
                <Text color="gray.500" fontSize="12px" fontWeight="600">
                  VectorOne
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>
        </MotionGrid>
      </Container>
    </Box>
  );
};

const MotionGrid = motion(Grid); 