import { useAddress, useThirdwebAuthContext, useThirdwebConnectedWalletContext, useThirdwebWallet } from '@thirdweb-dev/react'

import type { NextPage } from 'next'
import Connexion from './connexion'

const Home: NextPage = () => {
  return <Connexion />
}

export default Home
