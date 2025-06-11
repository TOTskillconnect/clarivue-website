'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon-clarivue/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon-clarivue/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-clarivue/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/favicon-clarivue/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon-clarivue/site.webmanifest" />
        <meta name="theme-color" content="#1076D1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clarivue - AI Interview Assistant</title>
      </head>
      <body style={{ backgroundColor: 'lightyellow' }}>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
} 