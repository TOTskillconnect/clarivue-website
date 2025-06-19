'use client'

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useCallback, memo, useMemo } from 'react'

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

// Memoize static data to prevent recreation on every render
const LOGO_DATA = [
  { src: "/brandsocials/KaiOS-Logo.wine.svg", alt: "KaiOS" },
  { src: "/brandsocials/Libra-Logo.wine.svg", alt: "Libra" },
  { src: "/brandsocials/Fitbit-Logo.wine.svg", alt: "Fitbit" },
  { src: "/brandsocials/OnePlus-Logo.wine.svg", alt: "OnePlus" },
  { src: "/brandsocials/Foxtel-Logo.wine.svg", alt: "Foxtel" },
  { src: "/brandsocials/square-logo.wine.svg", alt: "Square" },
  { src: "/brandsocials/plaidlogo.wine.svg", alt: "Plaid" },
  { src: "/brandsocials/nest-labs-logo-svgrepo-com.svg", alt: "Nest Labs" },
  { src: "/brandsocials/brex-1.svg", alt: "Brex" }
] as const;

// Memoize individual logo component to prevent unnecessary re-renders
const LogoItem = memo(({ logo, index }: { logo: (typeof LOGO_DATA)[number]; index: number }) => {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.transform = 'scale(1.05)';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = '0.8';
    e.currentTarget.style.transform = 'scale(1)';
  }, []);

  const logoStyle = useMemo(() => ({
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain' as const,
    filter: 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(204deg) brightness(97%) contrast(105%)',
    opacity: 0.8,
    transition: 'all 0.3s ease',
    willChange: 'transform, opacity'
  }), []);

  return (
    <Box
      key={`${logo.alt}-${index}`}
      height={{ base: "135px", md: "180px" }}
      width={{ base: "270px", md: "360px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        style={logoStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        decoding="async"
      />
    </Box>
  );
});

LogoItem.displayName = 'LogoItem';

// Memoize BrandLogos component to prevent unnecessary re-renders
const BrandLogos = memo(() => {
  const LogoList = memo(() => (
    <Box display="flex" alignItems="center" gap={{ base: 2, md: 3 }} flexShrink={0}>
      {LOGO_DATA.map((logo, index) => (
        <LogoItem key={`${logo.alt}-${index}`} logo={logo} index={index} />
      ))}
    </Box>
  ));

  LogoList.displayName = 'LogoList';

  const containerStyle = useMemo(() => ({
    willChange: 'transform',
    backfaceVisibility: 'hidden' as const,
    WebkitFontSmoothing: 'antialiased' as const
  }), []);

  return (
    <Box 
      width="100%"
      overflow="hidden"
      px={{ base: 4, md: 6 }}
    >
      <Box
        display="flex"
        animation={`${scrollAnimation} 20s linear infinite`}
        style={containerStyle}
      >
        <LogoList />
        <LogoList />
      </Box>
    </Box>
  );
});

BrandLogos.displayName = 'BrandLogos';

export const TrustedBySection = memo(() => {
  const sectionStyle = useMemo(() => ({
    bg: "#F2F9FF",
    pt: { base: 16, md: 20 },
    pb: { base: 12, md: 15 },
    borderTop: "1px solid",
    borderColor: "gray.200"
  }), []);

  const containerStyle = useMemo(() => ({
    maxW: "container.xl",
    textAlign: "center" as const
  }), []);

  return (
    <Box {...sectionStyle}>
      <Container {...containerStyle}>
        {/* Trusted by text */}
        <Text
          fontSize={{ base: "18px", sm: "22px", md: "28px", lg: "32px" }}
          fontWeight="600"
          color="primary.500"
          maxW="800px"
          mx="auto"
          px={{ base: 2, sm: 0 }}
          whiteSpace={{ base: "normal", md: "nowrap" }}
          mb={{ base: 6, md: 9 }}
          lineHeight={{ base: "1.3", md: "1.2" }}
        >
          Loved by recruiters and hiring managers at:
        </Text>

        {/* Brand Logos */}
        <BrandLogos />
      </Container>
    </Box>
  );
});

TrustedBySection.displayName = 'TrustedBySection'; 