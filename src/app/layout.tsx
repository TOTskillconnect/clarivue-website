'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import { ErrorBoundary } from '../components/error/ErrorBoundary'
import { SITE } from '../constants/site'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SITE.DESCRIPTION} />
        <meta name="theme-color" content={theme.colors.primary[500]} />
        
        {/* OpenGraph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.URL} />
        <meta property="og:title" content={`${SITE.NAME} - AI Interview Assistant`} />
        <meta property="og:description" content={SITE.DESCRIPTION} />
        <meta property="og:image" content={SITE.IMAGE} />
        <meta property="og:site_name" content={SITE.NAME} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.NAME} - AI Interview Assistant`} />
        <meta name="twitter:description" content={SITE.DESCRIPTION} />
        <meta name="twitter:image" content={SITE.IMAGE} />
        <meta name="twitter:site" content={SITE.SOCIAL.TWITTER} />

        {/* Favicon links */}
        <link rel="icon" type="image/x-icon" href="/favicon-clarivue/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon-clarivue/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-clarivue/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/favicon-clarivue/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon-clarivue/site.webmanifest" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": SITE.NAME,
            "applicationCategory": "BusinessApplication",
            "description": SITE.DESCRIPTION,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Real-time interview notes",
              "Live follow-up question suggestions",
              "Tone and confidence analysis",
              "Automated candidate scoring",
              "Enterprise-grade security"
            ]
          })}
        </script>

        <title>{SITE.NAME} - AI Interview Assistant</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ChakraProvider theme={theme}>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ChakraProvider>
      </body>
    </html>
  )
} 