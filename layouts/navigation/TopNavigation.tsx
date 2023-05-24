import { Flex, HStack } from '@chakra-ui/react'
import { type } from 'os'
import React from 'react'

type TopNavigationProps = {
  children?: React.ReactNode
}
const TopNavigation = ({ children }: TopNavigationProps) => {
  return (
    <HStack
      width={'full'}
      justify={'space-between'}
      paddingTop={12}
      paddingBottom={4}
      background={'neutral.900'}
    >
      {children}
    </HStack>
  )
}

export default TopNavigation
