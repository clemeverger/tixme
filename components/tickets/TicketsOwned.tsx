import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import TicketsOwnedDrawer from './TicketsOwnedDrawer'

type TicketsOwnedProps = {
  tickets: TicketOwned[]
}

const TicketsOwned = ({ tickets }: TicketsOwnedProps) => {
  return (
    <Stack
      py={4}
      gap={8}
    >
      {tickets.length >= 1 ? (
        tickets.map((ticket: TicketOwned, index: number) => (
          <TicketsOwnedDrawer
            key={index}
            ticket={ticket}
          />
        ))
      ) : (
        <Text textAlign={'center'}>Vous n&apos;avez pas encore de ticket.</Text>
      )}
    </Stack>
  )
}

export default TicketsOwned
