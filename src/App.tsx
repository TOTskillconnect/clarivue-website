'use client'

import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from './theme/index'
import { ErrorBoundary } from './components/error/ErrorBoundary'
import { Layout } from './components/layout/Layout'
import { PerformanceMonitor } from './components/common/PerformanceMonitor'
import Home from './app/page'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <PerformanceMonitor />
        <Box width="100%" minHeight="100vh" overflow="hidden">
          <Layout>
            <Home />
          </Layout>
        </Box>
      </ErrorBoundary>
    </ChakraProvider>
  )
}
