import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Image,
  Skeleton,
  Icon,
  type ImageProps as ChakraImageProps
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import imageManifest from '../../image-manifest.json';

interface ResponsiveImageProps extends Omit<ChakraImageProps, 'onError' | 'onLoad'> {
  fallbackIcon?: React.ElementType;
  showLoadingState?: boolean;
  priority?: boolean;
  blurDataURL?: string;
  mobileOptimized?: boolean;
  sizes?: string;
}

// Get optimized image data from manifest
const getOptimizedImage = (src: string) => {
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const imageData = (imageManifest.images as Record<string, { optimizedPath: string; blurDataURL: string }>)[cleanSrc];
  
  if (imageData) {
    return {
      optimizedSrc: `/${imageData.optimizedPath}`,
      blurDataURL: imageData.blurDataURL,
      hasOptimized: true
    };
  }
  
  return {
    optimizedSrc: src,
    blurDataURL: undefined,
    hasOptimized: false
  };
};

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return isIntersecting;
};

// Preload critical images
const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const ResponsiveImage = ({
  src,
  alt,
  fallbackIcon = WarningIcon,
  showLoadingState = true,
  priority = false,
  blurDataURL: providedBlurDataURL,
  mobileOptimized = true,
  sizes,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(showLoadingState);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Get optimized image data
  const { optimizedSrc, blurDataURL: manifestBlurDataURL, hasOptimized } = getOptimizedImage(src || '');
  const finalBlurDataURL = providedBlurDataURL || manifestBlurDataURL;
  
  // Use intersection observer for lazy loading (unless priority)
  const isIntersecting = useIntersectionObserver(imageRef, {
    rootMargin: mobileOptimized ? '100px' : '50px' // Larger margin for mobile
  });

  // Determine if image should load
  useEffect(() => {
    if (priority || isIntersecting) {
      setShouldLoad(true);
    }
  }, [priority, isIntersecting]);

  // Preload critical images
  useEffect(() => {
    if (priority && optimizedSrc) {
      preloadImage(optimizedSrc);
    }
  }, [priority, optimizedSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Error state
  if (hasError) {
    return (
      <Box
        ref={imageRef}
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
    <Box ref={imageRef} position="relative" {...props}>
      {/* Blur placeholder */}
      {finalBlurDataURL && isLoading && shouldLoad && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url(${finalBlurDataURL})`}
          backgroundSize="cover"
          backgroundPosition="center"
          filter="blur(20px)"
          transform="scale(1.1)"
          zIndex={1}
        />
      )}
      
      {/* Main image */}
      {shouldLoad && (
        <Image
          src={optimizedSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes || (mobileOptimized ? 
            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : 
            undefined
          )}
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            willChange: isLoading ? 'opacity' : 'auto',
            zIndex: 2,
            position: 'relative'
          }}
          {...(props as any)}
        />
      )}
      
      {/* Loading skeleton */}
      {isLoading && !finalBlurDataURL && shouldLoad && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          startColor="gray.100"
          endColor="gray.300"
          borderRadius={props.borderRadius}
          zIndex={1}
        />
      )}
      
      {/* Placeholder for non-priority images not yet in viewport */}
      {!shouldLoad && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="gray.50"
          borderRadius={props.borderRadius}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="40%"
            h="40%"
            bg="gray.200"
            borderRadius="md"
            opacity={0.5}
          />
        </Box>
      )}
    </Box>
  );
}; 