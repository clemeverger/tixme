import React from 'react'
import TicketCard from './TicketCard'
import { Stack } from '@chakra-ui/react'
type Tickets = { tickets: Ticket[] }

const PrimarySalesTickets = ({ tickets }: Tickets) => {
  return (
    <Stack
      gap={8}
      mt={4}
    >
      {tickets.map((ticket: any, index: number) => (
        <TicketCard
          key={index}
          ticket={ticket}
        />
      ))}
    </Stack>
  )
}

export default PrimarySalesTickets
