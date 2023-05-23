import { Flex } from '@chakra-ui/react'
import { type } from 'os'
import React from 'react'

type TopNavigationProps = {
  children?: React.ReactNode
}
const TopNavigation = ({ children }: TopNavigationProps) => {
  return (
    <Flex
      width={'full'}
      justify={'space-evenly'}
      background={'neutral.900'}
    >
      navigation
    </Flex>
  )
}

export default TopNavigation
