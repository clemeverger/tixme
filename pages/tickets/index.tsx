import React, { useMemo } from 'react'
import Head from 'next/head'
import Container from '../../layouts/Container'
import { Image, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import TicketsOwnedDrawer from '../../components/tickets/TicketsOwned'
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { contractAddress } from '../../configs/contracts'
import useGetEvents from '../../hooks/useGetEvents'

const Tickets = () => {
  const address = useAddress()
  const { contract: editionDrop } = useContract(contractAddress)
  const { data: tickets, isLoading } = useOwnedNFTs(editionDrop, address)

  const events = useGetEvents()

  const upcomingTickets = useMemo(() => {
    if (!events || !tickets || !Array.isArray(events.events) || !Array.isArray(tickets)) return []
    const upcomingTickets = tickets.filter((ticket: any) => {
      const event = events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))
      let date = event.date.replaceAll(' ', '')
      if (date.includes('-')) date = date.split('-')[0]
      const day = date.split('/')[0]
      const month = date.split('/')[1]
      const year = date.split('/')[2]
      date = `${year}/${month}/${day}`
      const eventDate = new Date(date)
      if (eventDate > new Date()) return ticket
    })
    return upcomingTickets.map((ticket: any) => ({
      ...ticket,
      name: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.name,
      organizator: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.organizator,
      date: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.date,
      location: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.location,
    }))
  }, [events, tickets])

  const pastTickets = useMemo(() => {
    if (!events || !tickets || !Array.isArray(events.events) || !Array.isArray(tickets)) return []
    const pastTickets = tickets.filter((ticket: any) => {
      const event = events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))
      let date = event.date.replaceAll(' ', '')
      if (date.includes('-')) date = date.split('-')[0]
      const day = date.split('/')[0]
      const month = date.split('/')[1]
      const year = date.split('/')[2]
      date = `${year}/${month}/${day}`
      const eventDate = new Date(date)
      if (eventDate < new Date()) return ticket
    })
    return pastTickets.map((ticket: any) => ({
      ...ticket,
      name: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.name,
      organizator: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.organizator,
      date: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.date,
      location: events.events.find((event: any) => event.nfts.includes(Number(ticket.metadata.id)))?.location,
    }))
  }, [events, tickets])

  return (
    <Container
      topNavigation={
        <>
          <Text>Mes tickets</Text>
          <Image
            src='/icons/message.svg'
            alt='icon message'
          />
        </>
      }
      isLoading={isLoading}
    >
      <Head>
        <title>tixme - tickets</title>
      </Head>
      <Tabs variant={'neutral'}>
        <TabList>
          <Tab flex={1}>À venir</Tab>
          <Tab flex={1}>Passées</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TicketsOwnedDrawer tickets={upcomingTickets} />
          </TabPanel>
          <TabPanel>
            <Skeleton
              isLoaded={!isLoading}
              startColor='primary.300'
              endColor='neutral.900'
              mt={'0!important'}
            >
              <TicketsOwnedDrawer tickets={pastTickets} />
            </Skeleton>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default Tickets
