import type { ImageProps as ChakraImageProps } from '@chakra-ui/react';

export interface ResponsiveImageProps extends Omit<ChakraImageProps, 'onError' | 'onLoad'> {
  fallbackIcon?: React.ElementType;
  showLoadingState?: boolean;
  priority?: boolean;
  blurDataURL?: string;
}

export interface OptimizedImage {
  optimizedPath: string;
  blurDataURL: string;
} 