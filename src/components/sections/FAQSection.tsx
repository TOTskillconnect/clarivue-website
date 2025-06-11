import {
  Box,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { FAQ_ITEMS } from '../../constants/content';

export const FAQSection = () => {
  return (
    <Box 
      as="section"
      py={{ base: 10, md: 12, lg: 16 }} 
      bg="#F2F9FF"
      role="region"
      aria-labelledby="faq-heading"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 8, md: 10, lg: 12 }} align="stretch">
          {/* Header Section */}
          <Box textAlign="center">
            <Heading
              as="h2"
              id="faq-heading"
              fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
              fontWeight="700"
              color="primary.500"
              letterSpacing="-0.02em"
              mb={{ base: 3, md: 4 }}
              px={{ base: 2, sm: 0 }}
              lineHeight={{ base: "1.2", md: "1.1" }}
            >
              Frequently Asked Questions
            </Heading>
            <Text
              fontSize={{ base: "16px", sm: "17px", md: "18px" }}
              color="gray.600"
              maxW="600px"
              mx="auto"
              px={{ base: 4, sm: 2, md: 0 }}
              lineHeight="1.5"
            >
              Everything you need to know about Clarivue's AI interview platform
            </Text>
          </Box>

          {/* FAQ Content */}
          <Box 
            maxW={{ base: "100%", md: "800px", lg: "900px" }} 
            mx="auto" 
            position="relative"
            w="100%"
          >
            {/* Enhanced Gradient Border Container */}
            <Box
              position="absolute"
              top={{ base: -2, md: -3, lg: -4 }}
              left={{ base: -2, md: -3, lg: -4 }}
              right={{ base: -2, md: -3, lg: -4 }}
              bottom={{ base: -2, md: -3, lg: -4 }}
              background="linear-gradient(45deg, #98F2B3, #87CEEB, #98F2B3, #87CEEB)"
              backgroundSize="400% 400%"
              borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
              animation="gradientShift 8s ease infinite"
              sx={{
                '@keyframes gradientShift': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: { base: '2px', md: '3px' },
                left: { base: '2px', md: '3px' },
                right: { base: '2px', md: '3px' },
                bottom: { base: '2px', md: '3px' },
                backgroundColor: '#F2F9FF',
                borderRadius: { base: '14px', md: '17px', lg: '21px' },
                zIndex: 1,
              }}
            />
            
            {/* FAQ Accordion */}
            <Accordion 
              allowToggle 
              position="relative" 
              zIndex={2}
              p={{ base: 3, md: 4, lg: 5 }}
            >
              {FAQ_ITEMS.map((item, index) => {
                const buttonId = `faq-button-${index}`;
                const panelId = `faq-panel-${index}`;
                
                return (
                  <AccordionItem
                    key={index}
                    border="none"
                    mb={{ base: 2, md: 3 }}
                  >
                    <h3>
                      <AccordionButton
                        id={buttonId}
                        aria-controls={panelId}
                        bg="white"
                        py={{ base: 4, md: 5 }}
                        px={{ base: 4, md: 5, lg: 6 }}
                        borderRadius={{ base: "12px", md: "14px", lg: "16px" }}
                        boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
                        border="1px solid"
                        borderColor="gray.100"
                        _hover={{ 
                          bg: 'gray.50',
                          transform: 'translateY(-1px)',
                          boxShadow: '0px 6px 28px rgba(0, 0, 0, 0.12)'
                        }}
                        _expanded={{
                          bg: 'primary.50',
                          color: 'primary.700',
                          borderBottomRadius: '0',
                          transform: 'none',
                        }}
                        _active={{
                          transform: 'translateY(0px)'
                        }}
                        transition="all 0.2s ease"
                        minH={{ base: "60px", md: "70px" }}
                        cursor="pointer"
                      >
                        <Box flex="1" textAlign="left">
                          <Text
                            fontSize={{ base: "15px", sm: "16px", md: "17px", lg: "18px" }}
                            fontWeight="600"
                            color="inherit"
                            letterSpacing="-0.01em"
                            lineHeight="1.4"
                            noOfLines={2}
                          >
                            {item.question}
                          </Text>
                        </Box>
                        <AccordionIcon 
                          color="inherit" 
                          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                          transition="transform 0.2s ease"
                        />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel
                      id={panelId}
                      aria-labelledby={buttonId}
                      pb={{ base: 4, md: 5 }}
                      px={{ base: 4, md: 5, lg: 6 }}
                      pt={{ base: 3, md: 4 }}
                      bg="primary.50"
                      borderBottomRadius={{ base: "12px", md: "14px", lg: "16px" }}
                      boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
                      border="1px solid"
                      borderTop="none"
                      borderColor="gray.100"
                    >
                      <Text 
                        fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                        color="gray.700"
                        lineHeight="1.6"
                        fontWeight="400"
                      >
                        {item.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}; 