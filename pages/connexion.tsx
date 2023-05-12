import React, { ChangeEvent, useEffect, useState } from 'react'
import { ConnectWallet, useAddress, useDisconnect } from '@thirdweb-dev/react'
import { useMagic } from '@thirdweb-dev/react/evm/connectors/magic'
import { Button, FormControl, FormLabel, Input, FormHelperText, Stack, Center, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Wallet = () => {
  const [email, setEmail] = useState('')

  const disconnectWallet = useDisconnect()
  const connectWithMagic = useMagic()

  const address = useAddress()
  console.log('🚀 ~ Wal ~ address:', address)
  const { push } = useRouter()
  useEffect(() => {
    if (address) push('/nft')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  return (
    <Container>
      <Stack
        justify={'space-evenly'}
        minHeight={'100vh'}
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
            <FormControl>
              <FormLabel px={4}>Email</FormLabel>
              <Input
                type='email'
                placeholder='Votre email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value)
                }}
              />
              <FormHelperText px={4}>Nous ne partagerons jamais votre email.</FormHelperText>
            </FormControl>
            {/*  <Button
              onClick={() => {
                connectWithMagic({ email })
              }}
            >
              Connexion
            </Button> */}
            <ConnectWallet />
          </Stack>
        </Center>
      </Stack>
    </Container>
  )
}

export default Wallet
