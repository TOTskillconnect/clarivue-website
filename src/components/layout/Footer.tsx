import { Box, Container, Grid, VStack, Text, Link, Image, HStack, SimpleGrid } from '@chakra-ui/react'

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <VStack align="flex-start" spacing={2}>
    <Text fontSize="11px" color="gray.600" mb={2}>
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
    <Box py={16} width="100%" bg="gray.50">
      <Container maxW="100%" px={4}>
        <Box
          borderRadius={{ base: 0, md: "10px" }}
          p={{ base: 4, md: 8 }}
          mx={{ base: 0, md: 4 }}
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

            {/* Product Links */}
            <FooterSection title="Product">
              <FooterLink href="#">Interview Notes</FooterLink>
              <FooterLink href="#">Intake & Debrief Notes</FooterLink>
              <FooterLink href="#">AI Job Posts</FooterLink>
              <FooterLink href="#">Assistant</FooterLink>
              <FooterLink href="#">Reports</FooterLink>
              <FooterLink href="#">Privacy & Security</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
            </FooterSection>

            {/* Resources Links */}
            <FooterSection title="Resources">
              <FooterLink href="#">Interview Quality Evaluation</FooterLink>
              <FooterLink href="#">Interview Questions Hub</FooterLink>
              <FooterLink href="#">Other Resources</FooterLink>
              <FooterLink href="#">Compare</FooterLink>
              <FooterLink href="#">Metaview vs. Microsoft Copilot</FooterLink>
              <FooterLink href="#">Metaview vs. Zoom AI Companion</FooterLink>
            </FooterSection>

            {/* Customers Links */}
            <FooterSection title="Customers">
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Wall of Love</FooterLink>
              <FooterLink href="#">Recruiting Jobs Board</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </FooterSection>

            {/* Additional Links */}
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <FooterLink href="#">Product</FooterLink>
                <FooterLink href="#">Resources</FooterLink>
                <FooterLink href="#">Customers</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
              </Box>
              <Box>
                <FooterLink href="#">Case Studies</FooterLink>
                <FooterLink href="#">Wall of Love</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </Box>
            </SimpleGrid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
} 