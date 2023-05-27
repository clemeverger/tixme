import { Stack, Text } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import React from 'react'

const PrimarySalesTickets = ({ metadata }: any) => {
  return (
    <>
      {metadata.tickets.map((ticket: any, index: number) => (
        <Stack key={index}>
          <ThirdwebNftMedia
            metadata={ticket.metadata}
            width='100%'
            height='auto'
            style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
          />
          <Text>{metadata.name}</Text>
        </Stack>
      ))}
    </>
  )
}

export default PrimarySalesTickets
