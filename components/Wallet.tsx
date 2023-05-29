import React, { useEffect } from 'react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import { Stack, Center, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Wallet = () => {
  const address = useAddress()
  const { push } = useRouter()

  useEffect(() => {
    if (address != undefined) push('/marketplace')
  }, [address, push])

  return (
    <Container>
      <Stack
        justify={'space-evenly'}
        minHeight={'100dvh'}
      >
        <Center>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={200}
            height={40}
          ></Image>
        </Center>
        <Center>
          <Stack gap={2}>
            <ConnectWallet btnTitle='Connexion' />
          </Stack>
        </Center>
      </Stack>
    </Container>
  )
}

export default Wallet
