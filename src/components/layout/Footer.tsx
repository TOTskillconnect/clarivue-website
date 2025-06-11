import { Box, Container, Grid, VStack, Text, Link, Image, HStack } from '@chakra-ui/react'

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <VStack align="flex-start" spacing={2}>
    <Text fontSize="11px" color="gray.600" fontWeight="bold" mb={2}>
      {title}
    </Text>
    {children}
  </VStack>
)

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    fontSize="11px"
    color="gray.600"
    _hover={{ color: 'primary.500' }}
  >
    {children}
  </Link>
)

export const Footer = () => {
  return (
    <Box py={16} width="100%" bg="primary.500" position="relative" overflow="hidden">
      {/* Decorative Ribbon */}
      <Box
        position="absolute"
        right={0}
        top={0}
        width="100%"
        height="100%"
        zIndex={1}
        opacity={0.8}
      >
        <Image
          src="/decorative-ribbon.png"
          alt="Decorative ribbon"
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          height="120%"
          objectFit="cover"
        />
      </Box>

      <Container maxW="75%" px={4} position="relative" zIndex={2}>
        <Box
          bg="white"
          borderRadius="16px"
          p={{ base: 6, md: 8 }}
          mx={{ base: 0, md: 4 }}
          boxShadow="0px 4px 24px rgba(0, 0, 0, 0.1)"
        >
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
            gap={8}
          >
            {/* Brand Column */}
            <VStack align="flex-start" spacing={4}>
              <Image
                src="/logo-transparent.png"
                alt="Clarivue"
                height="32px"
              />
              <HStack spacing={4} color="gray.600" fontSize="11px" mt={4}>
                <Link href="#">Twitter</Link>
                <Link href="#">LinkedIn</Link>
                <Link href="#">G2</Link>
                <Link href="#">RSS</Link>
              </HStack>
              <Text fontSize="10px" color="gray.600">
                © 2025 Clarivue Technologies, Inc
              </Text>
            </VStack>

            {/* Features Links */}
            <FooterSection title="Features">
              <FooterLink href="#">Live Follow-Up Questions</FooterLink>
              <FooterLink href="#">Automated Scorecards</FooterLink>
              <FooterLink href="#">Interview Notes</FooterLink>
              <FooterLink href="#">Enterprise Grade Privacy</FooterLink>
            </FooterSection>

            {/* Legal Links */}
            <FooterSection title="Legal">
              <FooterLink href="#">Terms and Conditions</FooterLink>
              <FooterLink href="#">Privacy policy</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
              <FooterLink href="#">Disclaimer</FooterLink>
            </FooterSection>

            {/* Resources Links */}
            <FooterSection title="Resources">
              <FooterLink href="#">Blogs</FooterLink>
              <FooterLink href="#">Recruiter Dictionary</FooterLink>
              <FooterLink href="#">Trend Tracker</FooterLink>
              <FooterLink href="#">Other Resources</FooterLink>
            </FooterSection>

            {/* Compare Links */}
            <FooterSection title="Compare">
              <FooterLink href="#">Clarivue vs. Microsoft Copilot</FooterLink>
              <FooterLink href="#">Clarivue vs. Zoom AI Companion</FooterLink>
              <FooterLink href="#">Clarivue vs. Metaview</FooterLink>
              <FooterLink href="#">Clarivue vs. Hirelogic</FooterLink>
            </FooterSection>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
} 