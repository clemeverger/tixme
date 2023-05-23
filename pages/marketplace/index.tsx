import Head from 'next/head'
import React, { useState } from 'react'
import { Box, HStack, Img, Select, Text } from '@chakra-ui/react'
import { useContract, useNFTs, useAddress } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import { NextPage } from 'next'

import Container from '../../layouts/Container'
import getReadableDate from '../../helpers/getReadableDate'

const Marketplace: NextPage = () => {
  const address = useAddress()
  console.log('🚀 ~ Marketplace ~ adress:', address)

  const { contract: editionDrop } = useContract(contractAddress)
  const { data, isLoading } = useNFTs(editionDrop)
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
            icon={<Img src='/icons/dropdown.svg' />}
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
              <div key={index}>
                <h1>{sft.metadata.name}</h1>
                <img src={sft.metadata.image!} />
              </div>
            )
          })}
      </Box>
    </Container>
  )
}

export default Marketplace
