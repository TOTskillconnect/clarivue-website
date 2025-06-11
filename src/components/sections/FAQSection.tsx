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
} from '@chakra-ui/react'
import { FAQ_ITEMS } from '../../constants/content';

export const FAQSection = () => {
  return (
    <Box 
      as="section"
      py={12} 
      bg="gray.50"
      role="region"
      aria-labelledby="faq-heading"
    >
      <Container maxW="container.xl">
        <Box textAlign="center" mb={8}>
          <Heading
            as="h2"
            id="faq-heading"
            fontSize={{ base: "32px", md: "40px" }}
            fontWeight="700"
            color="primary.500"
            letterSpacing="-0.02em"
            mb={2}
          >
            Frequently Asked Questions
          </Heading>
        </Box>

        <Box maxW="800px" mx="auto">
          <Accordion allowToggle>
            {FAQ_ITEMS.map((item, index) => {
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;
              
              return (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={3}
                >
                  <h3>
                    <AccordionButton
                      id={buttonId}
                      aria-controls={panelId}
                      bg="white"
                      py={4}
                      px={5}
                      borderRadius="16px"
                      boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
                      border="1px solid"
                      borderColor="gray.100"
                      _hover={{ bg: 'gray.50' }}
                      _expanded={{
                        bg: 'primary.50',
                        color: 'primary.700',
                        borderBottomRadius: '0',
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          fontSize={{ base: "16px", md: "18px" }}
                          fontWeight="600"
                          color="inherit"
                          letterSpacing="-0.01em"
                        >
                          {item.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="inherit" fontSize="20px" />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel
                    id={panelId}
                    aria-labelledby={buttonId}
                    pb={4}
                    px={5}
                    pt={3}
                    bg="primary.50"
                    borderBottomRadius="16px"
                    boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)"
                  >
                    <Text 
                      fontSize={{ base: "14px", md: "16px" }}
                      color="gray.700"
                      lineHeight="1.6"
                    >
                      {item.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}; 