'use client';

import { Suspense, lazy } from 'react';
import { Box } from '@chakra-ui/react'
import { LoadingSpinner } from '../components/loading/LoadingSpinner';

// Lazy load components
const HeroSection = lazy(() => import('../components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })));
const TrustedBySection = lazy(() => import('../components/sections/TrustedBySection').then(mod => ({ default: mod.TrustedBySection })));
const ConversationSection = lazy(() => import('../components/sections/ConversationSection').then(mod => ({ default: mod.ConversationSection })));
const ConversionOutputSection = lazy(() => import('../components/sections/ConversionOutputSection').then(mod => ({ default: mod.ConversionOutputSection })));
const AudioAnalysisSection = lazy(() => import('../components/sections/AudioAnalysisSection').then(mod => ({ default: mod.AudioAnalysisSection })));
const UserTestimonialsSection = lazy(() => import('../components/sections/UserTestimonialsSection').then(mod => ({ default: mod.UserTestimonialsSection })));
const UserStatsSection = lazy(() => import('../components/sections/UserStatsSection').then(mod => ({ default: mod.UserStatsSection })));
const FAQSection = lazy(() => import('../components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })));
const CallToAction = lazy(() => import('../components/sections/CallToAction').then(mod => ({ default: mod.CallToAction })));

export default function Home() {
  return (
    <Box width="100%" overflow="hidden">
      <Suspense fallback={<LoadingSpinner size="xl" fullscreen />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TrustedBySection />
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
        <UserStatsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>
    </Box>
  )
} 