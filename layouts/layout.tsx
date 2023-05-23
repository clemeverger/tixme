import React from 'react'
import BottomNavigation from './navigation/BottomNavigation'
import { Container, Stack, Skeleton, Box } from '@chakra-ui/react'
import TopNavigation from './navigation/TopNavigation'

type LayoutProps = {
  children: React.ReactNode
  isLoading?: boolean
}

const Layout = ({ children, isLoading }: LayoutProps) => {
  return (
    <Container>
      <Skeleton
        isLoaded={!isLoading}
        startColor='primary.900'
        endColor='neutral.900'
      >
        <Stack height={'100vh'}>
          <TopNavigation />
          <Box
            flex={1}
            overflowY={'scroll'}
          >
            {children}
          </Box>

          <BottomNavigation />
        </Stack>
      </Skeleton>
    </Container>
  )
}

export default Layout
