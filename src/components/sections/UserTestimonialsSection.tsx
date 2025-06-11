'use client';

import { Box, Container, Text, HStack, VStack, Image, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface Testimonial {
  name: string;
  avatar: string;
}

export const UserTestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah J.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael C.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily R.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <Box 
      as="section"
      position="relative"
      bg="#F2F9FF"
      py={{ base: 8, md: 12, lg: 16 }}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box
          bg="primary.500"
          borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
          px={{ base: 6, md: 8, lg: 12 }}
          py={{ base: 8, md: 10, lg: 12 }}
          position="relative"
          overflow="hidden"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        >
          {/* Mobile & Tablet Layout - Vertical Stack */}
          <VStack 
            spacing={{ base: 6, md: 8 }}
            display={{ base: 'flex', lg: 'none' }}
            textAlign="center"
          >
            {/* Mobile Avatar Section */}
            <Box position="relative">
              <Box
                position="relative"
                width={{ base: "100px", sm: "110px", md: "120px" }}
                height={{ base: "100px", sm: "110px", md: "120px" }}
                margin="0 auto"
                opacity={1}
                transition="opacity 0.3s ease-in-out"
              >
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  width="100%"
                  height="100%"
                  borderRadius="full"
                  border="3px solid white"
                  boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
                />
              </Box>
              <Text
                textAlign="center"
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                fontWeight="500"
                color="white"
                mt={{ base: 2, md: 3 }}
              >
                {testimonials[activeIndex].name}
              </Text>
            </Box>

            {/* Mobile Content Section */}
            <Box textAlign="center">
              <Text
                fontSize={{ base: "24px", sm: "28px", md: "32px" }}
                fontWeight="700"
                color="white"
                mb={{ base: 2, md: 2 }}
                lineHeight="1.2"
              >
                Wall of Love
              </Text>
              <Text
                fontSize={{ base: "16px", sm: "17px", md: "18px" }}
                color="whiteAlpha.900"
                fontWeight="500"
                px={{ base: 2, sm: 0 }}
                lineHeight="1.4"
              >
                See what our raving fans are saying about us.
              </Text>
            </Box>

            {/* Mobile Button */}
            <Button
              bg="linear-gradient(135deg, #98F2B3, #87CEEB)"
              color="gray.800"
              fontSize={{ base: "16px", sm: "17px", md: "18px" }}
              fontWeight="600"
              px={{ base: 6, sm: 7, md: 8 }}
              py={{ base: 4, sm: 5, md: 6 }}
              h={{ base: "48px", sm: "52px", md: "56px" }}
              borderRadius={{ base: "16px", md: "20px" }}
              _hover={{ bg: 'gray.100' }}
              minW={{ base: "140px", sm: "160px" }}
            >
              See Reviews
            </Button>
          </VStack>

          {/* Desktop Layout - Horizontal Flex */}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            display={{ base: 'none', lg: 'flex' }}
            minHeight="200px"
          >
            {/* Desktop Avatar Section */}
            <Box position="relative" width="160px">
              <Box
                position="relative"
                width="120px"
                height="120px"
                margin="0 auto"
                opacity={1}
                transition="opacity 0.3s ease-in-out"
              >
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  width="120px"
                  height="120px"
                  borderRadius="full"
                  border="3px solid white"
                  boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
                />
              </Box>
              <Text
                textAlign="center"
                fontSize="16px"
                fontWeight="500"
                color="white"
                mt={3}
              >
                {testimonials[activeIndex].name}
              </Text>
            </Box>

            {/* Desktop Content Section */}
            <Box textAlign="center" flex="1" mx={8}>
              <Text
                fontSize="32px"
                fontWeight="700"
                color="white"
                mb={2}
              >
                Wall of Love
              </Text>
              <Text
                fontSize="18px"
                color="whiteAlpha.900"
                fontWeight="500"
              >
                See what our raving fans are saying about us.
              </Text>
            </Box>

            {/* Desktop Button */}
            <Box>
              <Button
                bg="linear-gradient(135deg, #98F2B3, #87CEEB)"
                color="gray.800"
                fontSize="18px"
                fontWeight="600"
                px={8}
                py={6}
                borderRadius="20px"
                _hover={{ bg: 'gray.100' }}
              >
                See Reviews
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
} 