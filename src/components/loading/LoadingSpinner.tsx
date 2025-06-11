import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullscreen?: boolean;
}

export const LoadingSpinner = ({ 
  size = 'lg', 
  text = 'Loading...', 
  fullscreen = false 
}: LoadingSpinnerProps) => {
  const spinnerSizes = {
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem'
  };

  const content = (
    <VStack spacing={4}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size={size}
        width={spinnerSizes[size]}
        height={spinnerSizes[size]}
      />
      {text && (
        <Text color="gray.600" fontSize={size === 'sm' ? 'sm' : 'md'}>
          {text}
        </Text>
      )}
    </VStack>
  );

  if (fullscreen) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(255, 255, 255, 0.9)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={9999}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      width="100%"
    >
      {content}
    </Box>
  );
}; 