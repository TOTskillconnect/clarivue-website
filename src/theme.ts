import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E6F0FF',
      100: '#CCE0FF',
      200: '#99C2FF',
      300: '#66A3FF',
      400: '#3385FF',
      500: '#4178DB', // Our main blue
      600: '#0047B3',
      700: '#003380',
      800: '#001F4D',
      900: '#000C1A',
    },
    gray: {
      50: '#F2F9FF',
      100: '#F6F9FC',
      600: '#565D6D',
      700: '#171A1F',
    }
  },
  fonts: {
    heading: `'Archivo', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'primary.50',
          color: 'primary.600',
          borderRadius: '16px',
          fontSize: '23px',
          height: '81px',
          px: '8',
          _hover: {
            bg: 'primary.100',
          }
        },
        secondary: {
          bg: 'transparent',
          color: 'gray.600',
          fontSize: '18px',
          _hover: {
            color: 'primary.500',
          }
        }
      }
    }
  }
})

export default theme 