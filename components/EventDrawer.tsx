import React from 'react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Stack, HStack, DrawerFooter, Image, Text, Box, DrawerHeader } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'
import TicketsDrawer from './TicketsDrawer'

const EventDrawer = ({ metadata, isOpen, onClose }: any) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}
      size={'full'}
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
              src='/icons/share.svg'
              alt='share icon'
              width={5}
              height={5}
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
  )
}

export default EventDrawer
