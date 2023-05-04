import React from 'react'
import Layout from '../../layouts/layout'
import { Box } from '@chakra-ui/react'
import { useUnclaimedNFTs, useContract, useNFTs, useAddress, useNFT } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import { NextPage } from 'next'

const Marketplace: NextPage = () => {
  const address = useAddress()
  console.log('🚀 ~ Marketplace ~ adress:', address)

  const { contract: editionDrop } = useContract(contractAddress)
  const { data } = useNFTs(editionDrop)

  console.log('🚀 ~ Marketplace ~ data:', data)

  return (
    <Layout>
      <Box flex={1}>index</Box>
    </Layout>
  )
}

export default Marketplace
