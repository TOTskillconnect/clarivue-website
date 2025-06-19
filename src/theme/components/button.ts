import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: '16px',
    _focus: {
      boxShadow: 'outline',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 6,
      height: '81px',
    },
  },
  variants: {
    primary: {
      bg: 'brand.primary',
      color: 'white',
      _hover: {
        bg: 'brand.dark',
        transform: 'translateY(-2px)',
      },
    },
    secondary: {
      bg: 'transparent',
      color: 'brand.primary',
      border: '2px solid',
      borderColor: 'brand.primary',
      _hover: {
        bg: 'brand.light',
      },
    },
    gradient: {
      bgGradient: 'linear(135deg, #10B981, #3B82F6)',
      color: 'white',
      _hover: {
        bgGradient: 'linear(135deg, #059669, #2563EB)',
      },
    },
    outline: {
      border: '2px solid',
      borderColor: 'primary.500',
      color: 'primary.500',
      _hover: {
        bg: 'primary.50',
      },
      _active: {
        bg: 'primary.100',
      },
    },
    ghost: {
      color: 'primary.500',
      _hover: {
        bg: 'primary.50',
      },
      _active: {
        bg: 'primary.100',
      },
    },
    link: {
      color: 'primary.500',
      textDecoration: 'none',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}; 