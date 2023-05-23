import React from 'react'
import BottomNavigation from './navigation/BottomNavigation'
import { Container, Stack, Skeleton, Box } from '@chakra-ui/react'
import TopNavigation from './navigation/TopNavigation'

type LayoutProps = {
  children: React.ReactNode
  isLoading?: boolean
  topNavigation?: React.ReactNode
}

const Layout = ({ children, isLoading, topNavigation }: LayoutProps) => {
  return (
    <Skeleton
      isLoaded={!isLoading}
      startColor='primary.300'
      endColor='neutral.900'
    >
      <Container>
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
      </Container>
    </Skeleton>
  )
}

export default Layout
