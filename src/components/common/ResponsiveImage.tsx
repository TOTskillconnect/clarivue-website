import { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Skeleton,
  Icon,
  type ImageProps as ChakraImageProps
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

interface ResponsiveImageProps extends Omit<ChakraImageProps, 'onError' | 'onLoad'> {
  fallbackIcon?: React.ElementType;
  showLoadingState?: boolean;
  priority?: boolean;
  blurDataURL?: string;
}

const generateBlurPlaceholder = async (src: string): Promise<string> => {
  // Simple placeholder for demo - in production, use a proper image processing service
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="#f0f0f0" filter="url(#blur)"/>
    </svg>`
  )}`;
};

export const ResponsiveImage = ({
  src,
  alt,
  fallbackIcon = WarningIcon,
  showLoadingState = true,
  priority = false,
  blurDataURL,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(showLoadingState);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState(blurDataURL);

  useEffect(() => {
    if (!blurDataURL && src) {
      let isCurrent = true;
      generateBlurPlaceholder(src).then((data) => {
        if (isCurrent) setPlaceholder(data);
      });
      return () => {
        isCurrent = false; // abort stale update
      };
    }
  }, [src, blurDataURL]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        borderRadius="md"
        p={4}
        {...props}
      >
        <Icon
          as={fallbackIcon}
          color="gray.400"
          boxSize={props.boxSize || '2rem'}
          aria-label={`Failed to load image: ${alt}`}
        />
      </Box>
    );
  }

  return (
    <Box position="relative" {...props}>
      {placeholder && isLoading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url(${placeholder})`}
          backgroundSize="cover"
          backgroundPosition="center"
          filter="blur(20px)"
          transform="scale(1.1)"
        />
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
        {...props}
      />
      {isLoading && !placeholder && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          startColor="gray.100"
          endColor="gray.300"
          borderRadius={props.borderRadius}
        />
      )}
    </Box>
  );
}; 