import Head from 'next/head'
import React, { useState } from 'react'
import { Box, Card, HStack, Image, Img, Select, Text } from '@chakra-ui/react'
import { useContract, useNFTs, useAddress, ThirdwebNftMedia } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import { NextPage } from 'next'

import Container from '../../layouts/Container'
import getReadableDate from '../../helpers/getReadableDate'
import EventCard from '../../components/EventCard'

const Marketplace: NextPage = () => {
  //https://ipfs-2.thirdwebcdn.com/ipfs/QmcYMoffsrBtaBvmVor9N2hcVADehVVCvntZyuWNNGvmbe/events.json
  const address = useAddress()
  console.log('🚀 ~ Marketplace ~ adress:', address)

  const { contract: editionDrop } = useContract(contractAddress)
  const { data, isLoading } = useNFTs(editionDrop)
  console.log('🚀 ~ data:', data)
  const [location, setLocation] = useState('Nantes')
  const [date, setDate] = useState(new Date())

  return (
    <Container
      isLoading={isLoading}
      topNavigation={
        <>
          <Select
            maxWidth={'28%'}
            variant='unstyled'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            icon={<Img src='/icons/chevron-down.svg' />}
            gap={2}
          >
            <option value='Paris'>Paris</option>
            <option value='Nantes'>Nantes</option>
          </Select>

          <HStack gap={2}>
            <Img src='/icons/calendar.svg' />
            <Text>{getReadableDate(date)}</Text>
          </HStack>
        </>
      }
    >
      <Head>
        <title>tixme - marketplace</title>
      </Head>
      <Box flex={1}>
        {data &&
          data.map((sft, index) => {
            return (
              <EventCard
                key={index}
                metadata={sft.metadata}
              />
            )
          })}
      </Box>
    </Container>
  )
}

export default Marketplace
