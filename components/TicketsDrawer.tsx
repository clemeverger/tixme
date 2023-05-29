import {
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  useDisclosure,
  Image,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import React from 'react'
import PrimarySalesTickets from './PrimarySalesTickets'

const TicketsDrawer = ({ metadata }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        width={'full'}
        variant='primary'
        onClick={onOpen}
        leftIcon={
          <Image
            src='/icons/tickets-inactive.svg'
            alt='tickets icon'
            width={6}
          />
        }
      >
        à partir de 0.0 MATIC
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack justifyContent={'space-between'}>
              <Image
                src='/icons/chevron-left.svg'
                alt='tickets icon'
                width={4}
                height={4}
                onClick={onClose}
              />
              <Text fontSize={'md'}>Tickets</Text>
              <Image
                src='/icons/bag.svg'
                alt='tickets icon'
                width={4}
                height={4}
                opacity={0.4}
              />
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Tabs variant={'neutral'}>
              <TabList>
                <Tab flex={1}>Marché principale</Tab>
                <Tab flex={1}>Marché secondaire</Tab>
              </TabList>
              <TabPanels>
                <TabPanel px={0}>
                  <PrimarySalesTickets tickets={metadata.tickets} />
                </TabPanel>
                <TabPanel>
                  <Text>Not implemented yet</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TicketsDrawer
