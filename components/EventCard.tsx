import { useDisclosure, Text, Button, Drawer, DrawerContent, DrawerBody, DrawerFooter, HStack, Image, Box, Stack } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import TicketsDrawer from './TicketsDrawer'

const EventCard = ({ metadata }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack
        onClick={onOpen}
        mb={8}
        gap={0.5}
      >
        <ThirdwebNftMedia
          metadata={metadata}
          width='100%'
          height='auto'
          style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
        />

        <Text fontSize={'lg'}>{metadata.name}</Text>
        <HStack
          width={'full'}
          justify={'space-between'}
          align={'flex-start'}
          mt={'0!important'}
        >
          <Stack gap={0.5}>
            <Text
              fontSize={'sm'}
              color={'neutral.500'}
            >
              @{metadata.organizator}
            </Text>
            <HStack mt={'0!important'}>
              <Image
                src='/icons/calendar-primary-300.svg'
                alt='calendar icon'
              />
              <Text color={'primary.300'}>{metadata.date}</Text>
            </HStack>
          </Stack>
          <Box>
            <HStack
              background={'primary.500'}
              borderRadius={'full'}
              paddingX={2.5}
              paddingY={0.5}
              fontSize={'md'}
              spacing={1.5}
            >
              <Image
                width={4}
                src='/icons/tickets-inactive.svg'
                alt='tickets icon'
              />
              <Text>20 €</Text>
            </HStack>
          </Box>
        </HStack>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        size={'full'}
      >
        <DrawerContent>
          <HStack
            px={4}
            justify={'space-between'}
          >
            <Image
              src='/icons/chevron-down.svg'
              onClick={onClose}
              alt='chevron down icon'
              width={6}
              height={6}
            />
            <Image
              src='/icons/share.svg'
              onClick={onClose}
              alt='chevron down icon'
              width={6}
              height={6}
            />
          </HStack>

          <DrawerBody>
            <ThirdwebNftMedia
              metadata={metadata}
              width='100%'
              height='auto'
              style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
            />
            <Text fontSize={'lg'}>{metadata.name}</Text>
            <Box
              width={'full'}
              mt={'0!important'}
            >
              <Stack gap={0.5}>
                <Text
                  fontSize={'sm'}
                  color={'neutral.500'}
                >
                  @{metadata.organizator}
                </Text>
                <HStack mt={'0!important'}>
                  <Image
                    src='/icons/calendar-primary-300.svg'
                    alt='calendar icon'
                  />
                  <Text color={'primary.300'}>{metadata.date}</Text>
                </HStack>
                <HStack mt={'0!important'}>
                  <Image
                    src='/icons/calendar-primary-300.svg'
                    alt='calendar icon'
                  />
                  <Text color={'primary.300'}>{metadata.location}</Text>
                </HStack>
              </Stack>
            </Box>
            <Text fontSize={'lg'}>Description</Text>
            <Text>{metadata.description}</Text>
          </DrawerBody>
          <DrawerFooter>
            <TicketsDrawer metadata={metadata} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default EventCard
/* 
{metadata.tickets.map((ticket: any, index: number) => (
              <ThirdwebNftMedia
                key={index}
                metadata={ticket.metadata}
                width='100%'
                height='auto'
                style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
              />
            ))}
*/
