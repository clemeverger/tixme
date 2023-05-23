import React from 'react'
import BottomNavigation from './navigation/BottomNavigation'
import { Container as ChakraContainer, Stack, Skeleton, Box } from '@chakra-ui/react'
import TopNavigation from './navigation/TopNavigation'

type LayoutProps = {
  children: React.ReactNode
  isLoading?: boolean
  topNavigation?: React.ReactNode
}

const Container = ({ children, isLoading, topNavigation }: LayoutProps) => {
  return (
    <Skeleton
      isLoaded={!isLoading}
      startColor='primary.300'
      endColor='neutral.900'
    >
      <ChakraContainer>
        <Stack height={'100vh'}>
          <TopNavigation>{topNavigation}</TopNavigation>
          <Box
            flex={1}
            overflowY={'scroll'}
          >
            {children}
          </Box>
          <BottomNavigation />
        </Stack>
      </ChakraContainer>
    </Skeleton>
  )
}

export default Container
