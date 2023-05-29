import React from 'react'
import { Stack } from '@chakra-ui/react'
import TicketsOwnedDrawer from './TicketsOwnedDrawer'

type TicketsOwnedProps = {
  tickets: TicketOwned[]
}

const TicketsOwned = ({ tickets }: TicketsOwnedProps) => {
  return (
    <Stack py={4}>
      {tickets.map((ticket: TicketOwned, index: number) => (
        <TicketsOwnedDrawer
          key={index}
          ticket={ticket}
        />
      ))}
    </Stack>
  )
}

export default TicketsOwned
