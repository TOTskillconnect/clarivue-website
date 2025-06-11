import { Box } from '@chakra-ui/react'
import { ConversationSection } from '../components/sections/ConversationSection'
import { InterviewTechSection } from '../components/sections/InterviewTechSection'
import { ConversionOutputSection } from '../components/sections/ConversionOutputSection'
import { CallToAction } from '../components/sections/CallToAction'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { AudioAnalysisSection } from '../components/sections/AudioAnalysisSection'
import { UserTestimonialsSection } from '../components/sections/UserTestimonialsSection'

export const Home = () => {
  return (
    <Box as="main" width="100vw" overflowX="hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Interview Tech Section */}
      <Box bg="gray.50" width="100%">
        <InterviewTechSection />
      </Box>

      {/* Conversation Section */}
      <Box bg="gray.50" width="100%">
        <ConversationSection />
      </Box>

      {/* Audio Analysis Section */}
      <Box bg="#F2F9FF" width="100%">
        <AudioAnalysisSection />
      </Box>

      {/* User Testimonials Section */}
      <Box width="100%">
        <UserTestimonialsSection />
      </Box>

      {/* Conversion Output Section */}
      <Box bg="gray.50" width="100%">
        <ConversionOutputSection />
      </Box>

      {/* Call to Action */}
      <Box bg="gray.50" width="100%">
        <CallToAction />
      </Box>

      {/* Footer */}
      <Box bg="primary.500" width="100%">
        <Footer />
      </Box>
    </Box>
  )
} 