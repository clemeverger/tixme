import { useDisclosure, Text, Button, Drawer, DrawerContent, DrawerBody, DrawerFooter, HStack, Image, Box, Stack, DrawerHeader, VStack } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import TicketsDrawer from './TicketsDrawer'

const EventCard = ({ metadata }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Stack
        onClick={onOpen}
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
              gap={1.5}
            >
              <Image
                width={4}
                src='/icons/tickets-inactive.svg'
                alt='tickets icon'
              />
              <Text>0.0 MATIC</Text>
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
                src='/icons/share.svg'
                onClick={onClose}
                alt='chevron down icon'
                width={6}
                height={6}
                opacity={0.4}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <ThirdwebNftMedia
              metadata={metadata}
              width='100%'
              height='auto'
              style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
            />

            <Stack
              gap={4}
              my={4}
            >
              <Stack>
                <Text
                  fontSize={'xl'}
                  color={'primary.300'}
                  textTransform={'uppercase'}
                >
                  {metadata.name}
                </Text>
                <Text
                  fontSize={'sm'}
                  color={'neutral.500'}
                >
                  @{metadata.organizator}
                </Text>
              </Stack>
              <Stack
                gap={2}
                mt={'0!important'}
              >
                <HStack
                  mt={'0!important'}
                  gap={1}
                >
                  <Image
                    src='/icons/calendar-primary-200.svg'
                    width={6}
                    height={6}
                    alt='calendar icon'
                  />
                  <Text color={'primary.200'}>{metadata.date}</Text>
                </HStack>
                <HStack
                  mt={'0!important'}
                  gap={1}
                >
                  <Image
                    src='/icons/location-primary-200.svg'
                    alt='calendar icon'
                  />
                  <Text color={'primary.200'}>{metadata.location}</Text>
                </HStack>
              </Stack>
              <Stack>
                <Text lineHeight={6}>{metadata.description}</Text>
              </Stack>
            </Stack>
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
