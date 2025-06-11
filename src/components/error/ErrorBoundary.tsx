import React from 'react';
import { Box, Heading, Text, Button, VStack, Container } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxW="container.xl" py={20}>
          <VStack spacing={6} align="center" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="primary.500"
            >
              Oops! Something went wrong
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              We apologize for the inconvenience. Please try refreshing the page.
            </Text>
            {import.meta.env.DEV && this.state.error && (
              <Box
                bg="gray.50"
                p={4}
                borderRadius="md"
                width="100%"
                maxW="600px"
                overflowX="auto"
              >
                <Text fontFamily="mono" fontSize="sm" color="red.500">
                  {this.state.error.toString()}
                </Text>
              </Box>
            )}
            <Button
              onClick={this.handleReset}
              colorScheme="blue"
              size="lg"
              mt={4}
            >
              Refresh Page
            </Button>
          </VStack>
        </Container>
      );
    }

    return this.props.children;
  }
} 