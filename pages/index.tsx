import type { NextPage } from 'next'
import Wallet from '../components/Wallet'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tixme</title>
      </Head>
      <Wallet />
    </>
  )
}

export default Home
