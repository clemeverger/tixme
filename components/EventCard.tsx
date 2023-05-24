import { useDisclosure, Text, Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, HStack, Image, Box, Stack } from '@chakra-ui/react'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'

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
              @itslabelleepoque
            </Text>
            <HStack mt={'0!important'}>
              <Image
                src='/icons/calendar-primary-300.svg'
                alt='calendar icon'
              />
              <Text color={'primary.300'}>ven 31 avr. à 23h</Text>
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
        <DrawerOverlay />
        <DrawerContent>
          <Image
            src='/icons/chevron-down.svg'
            onClick={onClose}
            alt='chevron down icon'
          />

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button
              variant='outline'
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default EventCard
