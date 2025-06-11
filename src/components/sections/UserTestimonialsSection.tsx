'use client';

import { Box, Container, Text, HStack, Image, Button } from '@chakra-ui/react'
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
    const interval = setInterval(() => {
      setActiveIndex((current: number) => (current + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      as="section"
      position="relative"
      bg="gray.50"
      py={16}
    >
      <Container maxW="container.xl">
        <Box
          bg="primary.500"
          borderRadius="24px"
          px={12}
          py={12}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          overflow="hidden"
          minHeight="200px"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        >
          {/* Left side with rotating avatars */}
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

          {/* Center content */}
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

          {/* Right side with button */}
          <Button
            bg="white"
            color="primary.500"
            px={6}
            py={3}
            borderRadius="full"
            fontSize="16px"
            fontWeight="600"
            _hover={{
              bg: "whiteAlpha.900",
              transform: "translateY(-2px)",
              boxShadow: "sm"
            }}
            transition="all 0.2s"
          >
            <HStack spacing={2}>
              <Text>Check it out</Text>
              <Box as="span" fontSize="20px">→</Box>
            </HStack>
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 