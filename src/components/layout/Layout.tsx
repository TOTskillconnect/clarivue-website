import { Box } from '@chakra-ui/react'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh">
      <Header />
      <Box as="main" py={8} px={4}>
        <Box maxW="1200px" mx="auto">
          {children}
        </Box>
      </Box>
    </Box>
  )
} 