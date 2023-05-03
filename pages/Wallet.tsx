import React, { useState } from 'react'
import { useAccount, useAddress, useDisconnect, useNetwork, useUser } from '@thirdweb-dev/react'
import { useMagic } from '@thirdweb-dev/react/evm/connectors/magic'
import Mint from './Mint'

function Wallet() {
  const address = useAddress()

  const disconnectWallet = useDisconnect()
  const connectWithMagic = useMagic()

  const test = useUser()
  console.log('🚀 ~ Wallet ~ test:', test)

  const [email, setEmail] = useState('')
  if (address)
    return (
      <div>
        <h1>Connected as {address}</h1>
        <button
          onClick={() => {
            disconnectWallet()
          }}
        >
          Logout
        </button>
        <Mint />
      </div>
    )

  return (
    <div>
      <h1>Login With Email</h1>

      <input
        type='email'
        placeholder='Your Email Address'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />

      <button
        onClick={() => {
          connectWithMagic({ email })
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Wallet
