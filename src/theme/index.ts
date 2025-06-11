import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors';
import { typography } from './foundations/typography';
import { Button } from './components/button';

const theme = extendTheme({
  ...typography,
  colors,
  components: {
    Button,
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: { base: '4', md: '6' },
      },
    },
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
      },
      '#root': {
        width: '100%',
        overflowX: 'hidden',
      },
      body: {
        bg: 'white',
        color: 'gray.800',
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
      },
    },
  },
  layerStyles: {
    card: {
      bg: 'white',
      borderRadius: '16px',
      boxShadow: 'lg',
      p: 6,
    },
    gradientBg: {
      bgGradient: 'linear(180deg, secondary.700 0%, secondary.500 65%, primary.100 100%)',
    },
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: ['56px', '80px'],
      color: 'white',
    },
    h2: {
      fontSize: ['40px', '48px'],
      fontWeight: '700',
      lineHeight: ['48px', '56px'],
      color: 'primary.500',
    },
    body: {
      fontSize: ['18px', '20px'],
      lineHeight: ['28px', '32px'],
      color: 'gray.600',
    },
  },
});

export { theme }; 