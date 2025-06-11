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
      py={20} 
      bg="gray.50"
      role="region"
      aria-labelledby="faq-heading"
    >
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            id="faq-heading"
            textStyle="h2"
            mb={4}
          >
            Frequently Asked Questions
          </Heading>
        </Box>

        <Box maxW="900px" mx="auto">
          <Accordion allowToggle>
            {FAQ_ITEMS.map((item, index) => {
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;
              
              return (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={4}
                >
                  <h3>
                    <AccordionButton
                      id={buttonId}
                      aria-controls={panelId}
                      bg="white"
                      p={6}
                      borderRadius="16px"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{ bg: 'gray.100' }}
                      _expanded={{
                        bg: 'white',
                        borderBottomRadius: '0',
                        boxShadow: 'md'
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          fontSize="20px"
                          fontWeight="600"
                          color="gray.800"
                        >
                          {item.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="primary.500" fontSize="24px" />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel
                    id={panelId}
                    aria-labelledby={buttonId}
                    pb={6}
                    px={6}
                    pt={4}
                    bg="white"
                    borderBottomRadius="16px"
                    boxShadow="md"
                    border="1px solid"
                    borderTop="none"
                    borderColor="gray.200"
                  >
                    <Text textStyle="body">
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