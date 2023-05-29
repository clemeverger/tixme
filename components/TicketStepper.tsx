import { HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const TicketStepper = () => {
  const [ticket, setTicket] = useLocalStorage('ticket', 0)
  return <HStack></HStack>
}

export default TicketStepper
