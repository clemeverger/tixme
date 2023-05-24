import { Flex, VStack, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

type BottomNavigationProps = {
  children?: React.ReactNode
}
const BottomNavigation = ({ children }: BottomNavigationProps) => {
  const router = useRouter()
  return (
    <Flex
      width={'full'}
      justify={'space-between'}
      background={'neutral.900'}
      paddingX={12}
      paddingTop={4}
      paddingBottom={12}
    >
      <Link href={'/marketplace'}>
        <VStack>
          <Image
            src={router.pathname === '/marketplace' ? 'icons/marketplace-active.svg' : 'icons/marketplace-inactive.svg'}
            width={6}
            height={6}
            alt='marketplace'
          />
          <Text fontSize={'xs'}>marketplace</Text>
        </VStack>
      </Link>
      <Link href={'/tickets'}>
        <VStack>
          <Image
            src={router.pathname === '/tickets' ? 'icons/tickets-active.svg' : 'icons/tickets-inactive.svg'}
            width={6}
            height={6}
            alt='tickets'
          />
          <Text fontSize={'xs'}>tickets</Text>
        </VStack>
      </Link>
      <Link href={'/profile'}>
        <VStack>
          <Image
            src={router.pathname === '/profile' ? 'icons/profile-active.svg' : 'icons/profile-inactive.svg'}
            width={6}
            height={6}
            alt='profile'
          />
          <Text fontSize={'xs'}>profile</Text>
        </VStack>
      </Link>
    </Flex>
  )
}

export default BottomNavigation
