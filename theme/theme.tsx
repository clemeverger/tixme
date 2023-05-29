import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'neutral.900',
      },
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
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
    Text: {
      baseStyle: {
        color: 'white',
        marginTop: '0!important',
        fontWeight: 'medium',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'medium',
      },
      variants: {
        primary: { bg: 'primary.500', color: 'white', _focus: { bg: 'primary.600' } },
        neutral: { bg: 'neutral.800', color: 'neutral.500', _focus: { bg: 'neutral.700' } },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: 'neutral.800',
          color: 'white',
          _placeholder: {
            color: 'neutral.600',
          },
        },
      },
      variants: {
        neutral: {
          field: {
            borderRadius: 'full',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Tabs: {
      variants: {
        neutral: {
          tablist: {
            backgroundColor: 'neutral.800',
            borderRadius: 'full',
          },
          tab: {
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.700',
            _selected: {
              color: 'white',
            },
          },
          tabpanel: {
            px: 0,
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: 'neutral.900',
        },
        header: {
          paddingX: 4,
          paddingTop: 2,
          paddingBottom: 4,
        },
        body: {
          paddingX: 4,
          paddingY: 0,
        },
        footer: {
          paddingX: 4,
          paddingTop: 4,
          paddingBottom: 8,
        },
      },
    },
  },
})
