import { Flex, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
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
      paddingTop={2}
      paddingBottom={2}
    >
      <Link href={'/marketplace'}>
        <VStack>
          <Image
            src={router.pathname === '/marketplace' ? 'icons/marketplace-active.svg' : 'icons/marketplace-inactive.svg'}
            width={24}
            height={24}
            alt='marketplace'
          />
          <Text fontSize={'xs'}>marketplace</Text>
        </VStack>
      </Link>
      <Link href={'/tickets'}>
        <VStack>
          <Image
            src={router.pathname === '/tickets' ? 'icons/tickets-active.svg' : 'icons/tickets-inactive.svg'}
            width={24}
            height={24}
            alt='tickets'
          />
          <Text fontSize={'xs'}>tickets</Text>
        </VStack>
      </Link>
      <Link href={'/profile'}>
        <VStack>
          <Image
            src={router.pathname === '/profile' ? 'icons/profile-active.svg' : 'icons/profile-inactive.svg'}
            width={24}
            height={24}
            alt='profile'
          />
          <Text fontSize={'xs'}>profile</Text>
        </VStack>
      </Link>
    </Flex>
  )
}

export default BottomNavigation