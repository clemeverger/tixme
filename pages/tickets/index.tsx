import React from 'react'
import Head from 'next/head'
import Container from '../../layouts/Container'
import { Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

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
      <Tabs variant={'neutral'}>
        <TabList>
          <Tab flex={1}>Marchée principale</Tab>
          <Tab flex={1}>Marchée secondaire</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default index
