import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { MagicConnector } from '@thirdweb-dev/react/evm/connectors/magic'
import '../styles/globals.css'
import { ChainId } from '@thirdweb-dev/sdk'

// This is the chain the dApp will work on.
const activeChain = ChainId.Mumbai

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    rpcUrls: {
      [ChainId.Mumbai]: 'https://rpc-mumbai.maticvigil.com',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      walletConnectors={[magicLinkConnector, 'metamask']}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
