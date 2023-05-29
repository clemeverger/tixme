import React, { useEffect } from 'react'
import BottomNavigation from './navigation/BottomNavigation'
import { Container as ChakraContainer, Stack, Skeleton, Box } from '@chakra-ui/react'
import TopNavigation from './navigation/TopNavigation'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
  isLoading?: boolean
  topNavigation?: React.ReactNode
}

const Container = ({ children, isLoading, topNavigation }: LayoutProps) => {
  const address = useAddress()
  const { push } = useRouter()

  useEffect(() => {
    if (address === undefined) push('/')
  }, [address, push])

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
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
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
