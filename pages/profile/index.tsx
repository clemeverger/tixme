import React from 'react'
import Head from 'next/head'
import Container from '../../layouts/Container'
import { ConnectWallet } from '@thirdweb-dev/react'
import { Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Container
      topNavigation={
        <>
          <Text>Mon profil</Text>
        </>
      }
    >
      <Head>
        <title>tixme - profil</title>
      </Head>

      <ConnectWallet
        btnTitle='Connexion'
        style={{ width: '100%', justifyContent: 'space-evenly' }}
      />
    </Container>
  )
}

export default index
