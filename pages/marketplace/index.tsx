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

  const events = useGetEvents()
  const eventsWithTickets = useMemo(() => {
    if (!events || !tickets || !Array.isArray(events.events) || !Array.isArray(tickets)) return []
    return events.events.map((event: any) => ({
      ...event,
      tickets: tickets.filter((ticket) => event.nfts.includes(Number(ticket.metadata.id))),
    }))
  }, [events, tickets])
  /* const eventsWithTickets = [
    {
      name: 'Tomorrowland 2023',
      organizator: 'tomorrowland',
      date: '21/07/2023 - 30/07/2023',
      location: 'Belgique',
      description:
        'Tomorrowland est un festival de musique électronique organisé au mois de juillet sur le site du domaine provincial De Schorre à Boom en Belgique.',
      image: 'https://ipfs-2.thirdwebcdn.com/ipfs/QmYNw6WvutaxeZfrJ9ioMhTAikmAaiS6C7GRg1grCKsRVK/event1.jpg',
      nfts: [0, 1],
      tickets: [
        {
          owner: '0x0000000000000000000000000000000000000000',
          metadata: {
            name: 'Full Madness Pass',
            description: 'Accès (Comfort) à Tomorrowland le vendredi, samedi et dimanche.',
            image: 'https://ipfs.thirdwebcdn.com/ipfs/QmTgAExN6sA6H8gAK8xLAETvo65ZMyF9fQ3MTgaXdQ1tb2/0.jpg',
            id: '0',
            uri: 'ipfs://Qma8xubycKRerbwhnFyMchQ37nPrMEtRB2HA61ozfLKopS/0',
          },
          type: 'ERC1155',
          supply: '0',
        },
        {
          owner: '0x0000000000000000000000000000000000000000',
          metadata: {
            name: 'Day Pass',
            description: 'Accès (Comfort) à Tomorrowland pour une journée.',
            image: 'https://ipfs.thirdwebcdn.com/ipfs/QmTgAExN6sA6H8gAK8xLAETvo65ZMyF9fQ3MTgaXdQ1tb2/1.jpg',
            id: '1',
            uri: 'ipfs://Qma8xubycKRerbwhnFyMchQ37nPrMEtRB2HA61ozfLKopS/1',
          },
          type: 'ERC1155',
          supply: '0',
        },
      ],
    },
    {
      name: 'Awakening 2023',
      organizator: 'awakening',
      date: '21/07/2023 - 30/07/2023',
      location: 'Pays-Bas',
      description:
        "Awakenings est un festival de musique techno se déroulant aux Pays-Bas sur deux jours, représentant le point culminant de la scène techno néerlandaise, et peut-être même européenne! Le festival a lieu à la fin juin, à l'ouest d'Amsterdam, à Spaarnwoude, entre Amsterdam et Haarlem. Plus de 90 événements y sont présentés, sur huit scènes et tentes à l'emplacement du festival.",
      image: 'https://ipfs-2.thirdwebcdn.com/ipfs/QmUY1a3mpX9N1ovtZFb9DSoHJ63x6zkXZRdqDn5zxE4jvz/event2.jpg',
      nfts: [2],
      tickets: [
        {
          owner: '0x0000000000000000000000000000000000000000',
          metadata: {
            name: 'Full Pass',
            description: 'Accès à Awakenings le vendredi, samedi et dimanche.',
            image: 'https://ipfs.thirdwebcdn.com/ipfs/QmXfVwBivFF41sKeBpJFhTRG6MWvKTQpv9UhLzbCrW73MV/2.jpg',
            external_url: '',
            background_color: '',
            id: '2',
            uri: 'ipfs://QmPS9Esj1SsFWYiKvXZAaxVFNvxMYugYMyjxCbLJtX1JEs/2',
          },
          type: 'ERC1155',
          supply: '0',
        },
      ],
    },
  ] */

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
