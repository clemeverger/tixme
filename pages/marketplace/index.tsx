import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { Box, HStack, Image, Img, Input, InputGroup, InputLeftElement, Select, Stack, Text } from '@chakra-ui/react'
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

  const [location, setLocation] = useState('Nantes')
  const [date, setDate] = useState(new Date())
  const [search, setSearch] = useState('')

  const events = useGetEvents()

  const eventsWithTickets = useMemo(() => {
    if (!events || !tickets || !Array.isArray(events.events) || !Array.isArray(tickets)) return []
    let eventsFiltered = events.events
    if (search !== '') {
      eventsFiltered = events.events.filter((event: any) => event.name.toLowerCase().includes(search.toLowerCase()))
    }
    return eventsFiltered.map((event: any) => ({
      ...event,
      tickets: tickets.filter((ticket) => event.nfts.includes(Number(ticket.metadata.id))),
    }))
  }, [events, tickets, search])

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
        <InputGroup mb={4}>
          <InputLeftElement>
            <Image
              width={5}
              height={5}
              src='/icons/search.svg'
              alt='search icon'
            />
          </InputLeftElement>
          <Input
            placeholder='Rechercher un événement'
            variant={'neutral'}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Stack
          gap={8}
          py={4}
        >
          {eventsWithTickets &&
            eventsWithTickets.map((event: any, index: number) => {
              return (
                <EventCard
                  key={index}
                  metadata={event}
                />
              )
            })}
        </Stack>
      </Box>
    </Container>
  )
}

export default Marketplace
