const Button = {
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'medium',
  },
  variants: {
    primary: { bg: 'primary.500', color: 'white', _focus: { bg: 'primary.600' } },
    secondary: { bg: 'neutral.800', color: 'neutral.500', _focus: { bg: 'neutral.700' } },
  },
  defaultProps: {
    variant: 'primary',
  },
}
export default Button
