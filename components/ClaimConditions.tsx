import {
  useAddress,
  useContract,
  useActiveClaimConditionForWallet,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useTotalCirculatingSupply,
} from '@thirdweb-dev/react'
import { BigNumber, utils } from 'ethers'
import React, { useMemo, useState } from 'react'
import { contractAddress } from '../configs/contracts'
import { parseIneligibility } from '../helpers/parseIneligibility'
import { HStack, IconButton, Image, Text } from '@chakra-ui/react'

const ClaimConditions = () => {
  const address = useAddress()
  const [quantity, setQuantity] = useState(0)
  const { contract: editionDrop } = useContract(contractAddress)

  const tokenId = 0
  const activeClaimCondition = useActiveClaimConditionForWallet(editionDrop, address, tokenId)
  console.log('🚀 ~ TicketCard ~ activeClaimCondition:', tokenId, activeClaimCondition)
  const claimerProofs = useClaimerProofs(editionDrop, address || '', tokenId)
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    editionDrop,
    {
      quantity,
      walletAddress: address || '',
    },
    tokenId
  )

  const claimedSupply = useTotalCirculatingSupply(editionDrop, tokenId)

  const totalAvailableSupply = useMemo(() => {
    try {
      return BigNumber.from(activeClaimCondition.data?.availableSupply || 0)
    } catch {
      return BigNumber.from(1_000_000)
    }
  }, [activeClaimCondition.data?.availableSupply])

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString()
  }, [claimedSupply])

  const numberTotal = useMemo(() => {
    const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data || 0))
    if (n.gte(1_000_000)) {
      return ''
    }
    return n.toString()
  }, [totalAvailableSupply, claimedSupply])

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(activeClaimCondition.data?.currencyMetadata.value || 0)
    return `${utils.formatUnits(bnPrice.mul(quantity).toString(), activeClaimCondition.data?.currencyMetadata.decimals || 18)} ${
      activeClaimCondition.data?.currencyMetadata.symbol
    }`
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ])

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable
    try {
      bnMaxClaimable = BigNumber.from(activeClaimCondition.data?.maxClaimableSupply || 0)
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000)
    }

    let perTransactionClaimable
    try {
      perTransactionClaimable = BigNumber.from(activeClaimCondition.data?.maxClaimablePerWallet || 0)
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000)
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable

    if (snapshotClaimable) {
      if (snapshotClaimable === '0') {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000)
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable)
        } catch (e) {
          // fall back to default case
        }
      }
    }

    let max
    if (totalAvailableSupply.lt(bnMaxClaimable)) {
      max = totalAvailableSupply
    } else {
      max = bnMaxClaimable
    }

    if (max.gte(1_000_000)) {
      return 1_000_000
    }
    return max.toNumber()
  }, [claimerProofs.data?.maxClaimable, totalAvailableSupply, activeClaimCondition.data?.maxClaimableSupply, activeClaimCondition.data?.maxClaimablePerWallet])

  const isSoldOut = useMemo(() => {
    try {
      return (activeClaimCondition.isSuccess && BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(0)) || numberClaimed === numberTotal
    } catch (e) {
      return false
    }
  }, [activeClaimCondition.data?.availableSupply, activeClaimCondition.isSuccess, numberClaimed, numberTotal])

  const canClaim = useMemo(() => {
    return activeClaimCondition.isSuccess && claimIneligibilityReasons.isSuccess && claimIneligibilityReasons.data?.length === 0 && !isSoldOut
  }, [activeClaimCondition.isSuccess, claimIneligibilityReasons.data?.length, claimIneligibilityReasons.isSuccess, isSoldOut])

  const isLoading = useMemo(() => {
    return activeClaimCondition.isLoading || claimedSupply.isLoading || !editionDrop
  }, [activeClaimCondition.isLoading, editionDrop, claimedSupply.isLoading])

  const buttonLoading = useMemo(() => isLoading || claimIneligibilityReasons.isLoading, [claimIneligibilityReasons.isLoading, isLoading])
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return 'Sold Out'
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(activeClaimCondition.data?.currencyMetadata.value || 0)
      if (pricePerToken.eq(0)) {
        return 'Mint (Free)'
      }
      return `Mint (${priceToMint})`
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity)
    }
    if (buttonLoading) {
      return 'Checking eligibility...'
    }

    return 'Claiming not available'
  }, [isSoldOut, canClaim, claimIneligibilityReasons.data, buttonLoading, activeClaimCondition.data?.currencyMetadata.value, priceToMint, quantity])
  return (
    <HStack justify={'space-between'}>
      <Text color={'primary.300'}>{priceToMint}</Text>
      <HStack>
        <IconButton
          aria-label='decrease quantity'
          onClick={() => setQuantity(quantity - 1)}
          isDisabled={quantity <= 1}
          bg={'none'}
          icon={
            <Image
              src='/icons/minus.svg'
              alt='tickets icon'
            />
          }
        >
          -
        </IconButton>
        <h4>{quantity}</h4>
        <IconButton
          aria-label='increase quantity'
          onClick={() => setQuantity(quantity + 1)}
          isDisabled={quantity >= maxClaimable}
          bg={'none'}
          icon={
            <Image
              src='/icons/more.svg'
              alt='tickets icon'
            />
          }
        >
          +
        </IconButton>
      </HStack>
    </HStack>
  )
}

export default ClaimConditions