import { Stack, Text } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import React from 'react'
import TicketStepper from './TicketStepper'

type Tickets = { tickets: Ticket[] }

const PrimarySalesTickets = ({ tickets }: Tickets) => {
  return (
    <>
      {tickets.map((ticket: any, index: number) => (
        <Stack key={index}>
          <ThirdwebNftMedia
            metadata={ticket.metadata}
            width='100%'
            height='auto'
            style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
          />
          <Text
            textTransform={'uppercase'}
            fontSize={'lg'}
          >
            {ticket.metadata.name}
          </Text>
          <Text color={'neutral.500'}>{ticket.metadata.description}</Text>
          <Text color={'primary.300'}>20€</Text>
          <TicketStepper />
        </Stack>
      ))}
    </>
  )
}

export default PrimarySalesTickets
