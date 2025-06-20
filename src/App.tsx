import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './theme/index'
import { ErrorBoundary } from './components/error/ErrorBoundary'
import { Layout } from './components/layout/Layout'
import { PerformanceMonitor } from './components/common/PerformanceMonitor'
import Home from './app/page'
import BookDemo from './pages/BookDemo'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <PerformanceMonitor />
        <Router>
          <Box width="100%" minHeight="100vh" overflow="hidden">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </Layout>
          </Box>
        </Router>
      </ErrorBoundary>
    </ChakraProvider>
  )
}
