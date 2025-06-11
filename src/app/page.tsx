'use client';

import { Box } from '@chakra-ui/react'
import { HeroSection } from '../components/sections/HeroSection'
import { ConversionOutputSection } from '../components/sections/ConversionOutputSection'
import { AudioAnalysisSection } from '../components/sections/AudioAnalysisSection'
import { UserTestimonialsSection } from '../components/sections/UserTestimonialsSection'
import { CallToAction } from '../components/sections/CallToAction'
import { FAQSection } from '../components/sections/FAQSection'
import { ConversationSection } from '../components/sections/ConversationSection';

export default function Home() {
  return (
    <Box as="main">
      <HeroSection />
      <ConversationSection />
      <ConversionOutputSection />
      <AudioAnalysisSection />
      <UserTestimonialsSection />
      <CallToAction />
      <FAQSection />
    </Box>
  )
} 