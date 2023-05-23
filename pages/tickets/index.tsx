import React from 'react'
import Head from 'next/head'
import Container from '../../layouts/Container'
import { Image, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Container
      topNavigation={
        <>
          <Text>Mes tickets</Text>
          <Image src='/icons/message.svg' />
        </>
      }
    >
      <Head>
        <title>tixme - tickets</title>
      </Head>
      Tickets
    </Container>
  )
}

export default index
