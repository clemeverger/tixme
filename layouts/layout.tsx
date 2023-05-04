import React from 'react'
import Navigation from './navigation'
import { Container, Flex, HStack, Stack } from '@chakra-ui/react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Stack height={'100vh'}>
        {children}
        <Navigation />
      </Stack>
    </Container>
  )
}

export default Layout
