import { useAddress, useThirdwebAuthContext, useThirdwebConnectedWalletContext, useThirdwebWallet } from '@thirdweb-dev/react'

import type { NextPage } from 'next'
import Wallet from './wallet'

const Home: NextPage = () => {
  return <Wallet />
}

export default Home
