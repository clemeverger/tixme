import React from 'react'
import Layout from '../../layouts/Layout'
import { Box } from '@chakra-ui/react'
import { useContract, useNFTs, useAddress } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import { NextPage } from 'next'

const Marketplace: NextPage = () => {
  const address = useAddress()
  console.log('🚀 ~ Marketplace ~ adress:', address)

  const { contract: editionDrop } = useContract(contractAddress)
  const { data, isLoading } = useNFTs(editionDrop)

  console.log('🚀 ~ Marketplace ~ data:', data)

  return (
    <Layout isLoading={isLoading}>
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
    </Layout>
  )
}

export default Marketplace
