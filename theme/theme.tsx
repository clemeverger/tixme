import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'neutral.900',
      },
    },
  },
  colors: {
    primary: {
      100: '#EBEFFF',
      200: '#B9C4FF',
      300: '#8FA0FF',
      400: '#6E82FE',
      500: '#556AEB',

      600: '#354ACB',
      700: '#1D2F99',
      800: '#0C1A66',
      900: '#020A33',
    },
    neutral: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',

      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    },
  },
  components: {
    Button: Button,
    Input: Input,
  },
})