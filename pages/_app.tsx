import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ThirdwebProvider, magicLink, metamaskWallet } from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { theme } from '../theme/theme'

// This is the chain the dApp will work on.
const activeChain = ChainId.Mumbai

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[magicLink({ apiKey: 'pk_live_D0AD559CD1C86861' }), metamaskWallet()]}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
