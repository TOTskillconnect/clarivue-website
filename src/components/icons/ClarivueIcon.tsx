'use client'

import { Circle, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionCircle = motion(Circle)

export const ClarivueIcon = () => {
  return (
    <MotionCircle
      size="120px"
      bg="primary.500"
      position="relative"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Circle
        size="100px"
        bg="white"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          as="svg"
          width="60px"
          height="60px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
            stroke="#1076D1"
            strokeWidth="2"
          />
          <path
            d="M12 7V17M7 12H17"
            stroke="#1076D1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Box>
      </Circle>
    </MotionCircle>
  )
} 