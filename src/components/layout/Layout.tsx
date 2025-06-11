import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      width="100%" 
      maxWidth="100vw"
      overflow="hidden"
      margin={0}
      padding={0}
    >
      <Header />
      <Box as="main" flex="1" width="100%" maxWidth="100vw" overflow="hidden">
        {children}
      </Box>
      <Footer />
    </Box>
  )
} 