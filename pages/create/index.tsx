import { useAddress } from '@thirdweb-dev/react'
import React from 'react'

const Create = () => {
  const address = useAddress()
  return <div>{address}</div>
}

export default Create
