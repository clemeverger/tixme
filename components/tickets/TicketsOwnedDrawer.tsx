import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Image, Stack, Text, HStack } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'

type TicketsOwnedDrawerProps = {
  ticket: TicketOwned
}

const TicketsOwnedDrawer = ({ ticket }: TicketsOwnedDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Stack onClick={onOpen}>
        <ThirdwebNftMedia
          metadata={ticket.metadata}
          width='100%'
          height='auto'
          style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
        />
        <HStack justify={'space-between'}>
          <Text
            fontSize={'lg'}
            textTransform={'uppercase'}
          >
            {ticket.metadata.name}
          </Text>
          <Text>
            {ticket.quantityOwned} / {ticket.supply}
          </Text>
        </HStack>
        <Text
          fontSize={'lg'}
          mb={1}
          color={'neutral.500'}
        >
          {ticket.name}
        </Text>
        <HStack>
          <Image
            src='/icons/calendar-primary-300.svg'
            alt='calendar icon'
            width={4}
            height={4}
          />
          <Text color={'primary.300'}>{ticket.date}</Text>
        </HStack>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        size={'full'}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack justify={'space-between'}>
              <Image
                src='/icons/chevron-down.svg'
                onClick={onClose}
                alt='chevron down icon'
                width={6}
                height={6}
              />
              <Image
                src='/icons/dots.svg'
                onClick={onClose}
                alt='chevron down icon'
                width={6}
                height={6}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <ThirdwebNftMedia
              metadata={ticket.metadata}
              width='100%'
              height='auto'
              style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
            />
            <HStack
              justify={'space-between'}
              mt={2}
              mb={2}
            >
              <Text
                fontSize={'lg'}
                textTransform={'uppercase'}
              >
                {ticket.metadata.name}
              </Text>
              <Text>
                {ticket.quantityOwned} / {ticket.supply}
              </Text>
            </HStack>

            <Text
              color={'neutral.500'}
              mb={4}
            >
              {ticket.metadata.description}
            </Text>

            <HStack mb={1}>
              <Image
                src='/icons/calendar-primary-200.svg'
                width={6}
                height={6}
                alt='calendar icon'
              />
              <Text color={'primary.200'}>{ticket.date}</Text>
            </HStack>
            <HStack mb={4}>
              <Image
                src='/icons/location-primary-200.svg'
                alt='calendar icon'
                width={6}
                height={6}
              />
              <Text color={'primary.200'}>{ticket.location}</Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TicketsOwnedDrawer
