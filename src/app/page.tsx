'use client';

import { Suspense, lazy } from 'react';
import { Box } from '@chakra-ui/react'
import { LoadingSpinner } from '../components/loading/LoadingSpinner';

// Lazy load components
const HeroSection = lazy(() => import('../components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })));
const ConversationSection = lazy(() => import('../components/sections/ConversationSection').then(mod => ({ default: mod.ConversationSection })));
const ConversionOutputSection = lazy(() => import('../components/sections/ConversionOutputSection').then(mod => ({ default: mod.ConversionOutputSection })));
const AudioAnalysisSection = lazy(() => import('../components/sections/AudioAnalysisSection').then(mod => ({ default: mod.AudioAnalysisSection })));
const UserTestimonialsSection = lazy(() => import('../components/sections/UserTestimonialsSection').then(mod => ({ default: mod.UserTestimonialsSection })));
const CallToAction = lazy(() => import('../components/sections/CallToAction').then(mod => ({ default: mod.CallToAction })));
const FAQSection = lazy(() => import('../components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })));

export default function Home() {
  return (
    <Box as="main">
      <Suspense fallback={<LoadingSpinner size="xl" fullscreen />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ConversationSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ConversionOutputSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <AudioAnalysisSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <UserTestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FAQSection />
      </Suspense>
    </Box>
  )
} 