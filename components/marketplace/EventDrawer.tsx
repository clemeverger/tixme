import { useDisclosure, Text, Button, Drawer, DrawerContent, DrawerBody, DrawerFooter, HStack, Image, Box, Stack, DrawerHeader, VStack } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import TicketsDrawer from './TicketsDrawer'
import { useRef } from 'react'

const EventCard = ({ metadata }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box onClick={onOpen}>
        <ThirdwebNftMedia
          metadata={metadata}
          width='100%'
          height='auto'
          style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
        />

        <Text
          fontSize={'lg'}
          mt={1}
        >
          {metadata.name}
        </Text>
        <HStack
          width={'full'}
          justify={'space-between'}
          align={'flex-start'}
          mt={'0!important'}
        >
          <Stack gap={1}>
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
              <Text>0 €</Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
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

            <Text
              fontSize={'xl'}
              color={'primary.300'}
              textTransform={'uppercase'}
              mt={1}
            >
              {metadata.name}
            </Text>
            <Text
              fontSize={'sm'}
              color={'neutral.500'}
              mb={4}
            >
              @{metadata.organizator}
            </Text>
            <HStack mb={1}>
              <Image
                src='/icons/calendar-primary-200.svg'
                width={6}
                height={6}
                alt='calendar icon'
              />
              <Text color={'primary.200'}>{metadata.date}</Text>
            </HStack>
            <HStack mb={4}>
              <Image
                src='/icons/location-primary-200.svg'
                alt='calendar icon'
                width={6}
                height={6}
              />
              <Text color={'primary.200'}>{metadata.location}</Text>
            </HStack>
            <Text
              fontSize={'lg'}
              color={'primary.300'}
              mb={1}
            >
              Description
            </Text>
            <Text lineHeight={6}>{metadata.description}</Text>
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
