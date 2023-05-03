import { useAddress, useThirdwebAuthContext, useThirdwebConnectedWalletContext, useThirdwebWallet } from '@thirdweb-dev/react'

import type { NextPage } from 'next'
import Wallet from './Wallet'

const Home: NextPage = () => {
  const address = useAddress()
  return (
    <main>
      <Wallet />
    </main>
  )
}

export default Home
