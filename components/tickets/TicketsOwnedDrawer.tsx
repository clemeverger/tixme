import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Image, Stack, Text, HStack, IconButton } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import { useRef } from 'react'

type TicketsOwnedDrawerProps = {
  ticket: TicketOwned
}

const TicketsOwnedDrawer = ({ ticket }: TicketsOwnedDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalFocusRef = useRef(null)
  return (
    <>
      <Stack
        onClick={onOpen}
        ref={finalFocusRef}
      >
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
        finalFocusRef={finalFocusRef}
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
                src='/icons/calendar-primary-300-full.svg'
                width={6}
                height={6}
                alt='calendar icon'
              />
              <Text color={'primary.300'}>{ticket.date}</Text>
            </HStack>
            <HStack mb={4}>
              <Image
                src='/icons/location-primary-300-full.svg'
                alt='calendar icon'
                width={6}
                height={6}
              />
              <Text color={'primary.300'}>{ticket.location}</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <IconButton
                height={16}
                width={16}
                bg={'neutral.800'}
                aria-label='set alarm'
                icon={
                  <Image
                    src='/icons/alarm.svg'
                    alt='alarm icon'
                    width={8}
                    height={8}
                  />
                }
              />
              <IconButton
                height={16}
                width={16}
                bg={'neutral.800'}
                aria-label='send ticket'
                icon={
                  <Image
                    src='/icons/send.svg'
                    alt='send icon'
                    width={8}
                    height={8}
                  />
                }
              />
              <IconButton
                height={16}
                width={16}
                bg={'neutral.800'}
                aria-label='sell ticket'
                icon={
                  <Image
                    src='/icons/sell.svg'
                    alt='sell icon'
                    width={8}
                    height={8}
                  />
                }
              />
              <IconButton
                height={16}
                width={16}
                bg={'neutral.800'}
                aria-label='use ticket'
                icon={
                  <Image
                    src='/icons/use.svg'
                    alt='use icon'
                    width={8}
                    height={8}
                  />
                }
              />
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TicketsOwnedDrawer
