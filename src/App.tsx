import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/index'
import { ErrorBoundary } from './components/error/ErrorBoundary'
import { Layout } from './components/layout/Layout'
import Home from './app/page'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Layout>
          <Home />
        </Layout>
      </ErrorBoundary>
    </ChakraProvider>
  )
}
