import React, { ChangeEvent, useState } from 'react'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'
import { useMagic } from '@thirdweb-dev/react/evm/connectors/magic'
import { Button, FormControl, FormLabel, Input, FormHelperText, Stack, Center } from '@chakra-ui/react'
import Image from 'next/image'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'

function Wallet() {
  const [email, setEmail] = useState('')

  const disconnectWallet = useDisconnect()
  const connectWithMagic = useMagic()

  const address = useAddress()

  const { push } = useRouter()

  return (
    <Stack
      justify={'center'}
      minHeight={'100vh'}
      gap={8}
      padding={8}
    >
      <Center>
        <Image
          src={'/logo.svg'}
          alt='logo'
          width={200}
          height={39}
        ></Image>
      </Center>
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
        <Button
          onClick={() => {
            connectWithMagic({ email })
          }}
        >
          Connexion
        </Button>
      </Stack>
    </Stack>
  )
}

export default Wallet
