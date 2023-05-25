import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { Box, HStack, Img, Select, Text } from '@chakra-ui/react'
import { useContract, useNFTs } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import { NextPage } from 'next'
import Container from '../../layouts/Container'
import getReadableDate from '../../helpers/getReadableDate'
import EventCard from '../../components/EventCard'
import useGetEvents from '../../hooks/useGetEvents'

const Marketplace: NextPage = () => {
  const { contract: editionDrop } = useContract(contractAddress)
  const { data: tickets, isLoading: ticketsLoading } = useNFTs(editionDrop)

  const events = useGetEvents()
  const eventsWithTickets = useMemo(() => {
    if (!events || !tickets) return []
    return events.events.map((event: any) => ({
      ...event,
      tickets: tickets.filter((ticket) => event.nfts.includes(Number(ticket.metadata.id))),
    }))
  }, [events, tickets])

  const [location, setLocation] = useState('Nantes')
  const [date, setDate] = useState(new Date())

  return (
    <Container
      isLoading={ticketsLoading}
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
        {eventsWithTickets &&
          eventsWithTickets.map((event: any, index: number) => {
            return (
              <EventCard
                key={index}
                metadata={event}
              />
            )
          })}
      </Box>
    </Container>
  )
}

export default Marketplace
