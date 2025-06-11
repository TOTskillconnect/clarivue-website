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
          <Box>
            <Button
              bg="white"
              color="primary.500"
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
        </Box>
      </Container>
    </Box>
  )
} 