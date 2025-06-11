import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

// Track Core Web Vitals
const trackWebVitals = () => {
  const metrics: PerformanceMetrics = {};

  // Track LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        metrics.lcp = lastEntry.startTime;
        
        // Log to console in development
        if (import.meta.env.DEV) {
          console.log('LCP:', metrics.lcp);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metrics.fid = entry.processingStart - entry.startTime;
          
          if (import.meta.env.DEV) {
            console.log('FID:', metrics.fid);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.cls = clsValue;
        
        if (import.meta.env.DEV) {
          console.log('CLS:', metrics.cls);
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }

  // Track navigation timing
  if ('performance' in window && 'getEntriesByType' in performance) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          metrics.fcp = navigation.responseStart - navigation.fetchStart;
          metrics.ttfb = navigation.responseStart - navigation.requestStart;
          
          if (import.meta.env.DEV) {
            console.log('Performance Metrics:', {
              'Time to First Byte (TTFB)': `${metrics.ttfb?.toFixed(2)}ms`,
              'First Contentful Paint (FCP)': `${metrics.fcp?.toFixed(2)}ms`,
              'DOM Content Loaded': `${(navigation.domContentLoadedEventEnd - navigation.fetchStart).toFixed(2)}ms`,
              'Page Load Complete': `${(navigation.loadEventEnd - navigation.fetchStart).toFixed(2)}ms`
            });
          }
        }
      }, 0);
    });
  }

  return metrics;
};

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads: string[] = [
    // Add your critical fonts here if any
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });

  // Preload critical images (handled by ResponsiveImage component)
  
  // DNS prefetch for external resources
  const dnsPrefetchDomains: string[] = [
    // Add external domains you load resources from
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Optimize images based on device capabilities
const optimizeForDevice = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Check connection quality
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g' ||
    connection.saveData
  );

  // Apply optimizations based on device capabilities
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
  }

  if (isSlowConnection) {
    // Reduce image quality for slow connections
    document.documentElement.classList.add('slow-connection');
  }

  return {
    prefersReducedMotion,
    isSlowConnection,
    connectionType: connection?.effectiveType || 'unknown'
  };
};

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Initialize performance monitoring
    trackWebVitals();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize for device capabilities
    const deviceInfo = optimizeForDevice();
    
    if (import.meta.env.DEV) {
      console.log('Device Optimization:', deviceInfo);
    }

    // Cleanup function
    return () => {
      // Clean up any observers if needed
    };
  }, []);

  // This component doesn't render anything
  return null;
};

// Export utility functions for use in other components
export { trackWebVitals, preloadCriticalResources, optimizeForDevice }; 