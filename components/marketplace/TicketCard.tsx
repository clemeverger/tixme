import { ThirdwebNftMedia, useClaimConditions, useContract } from '@thirdweb-dev/react'
import { Box, Skeleton, Text } from '@chakra-ui/react'
import ClaimConditions from './ClaimConditions'
import { contractAddress } from '../../configs/contracts'

const TicketCard = ({ ticket }: any) => {
  const { id: tokenId } = ticket.metadata
  const { contract: editionDrop } = useContract(contractAddress)
  const { isLoading: isLoadingClaimConditions, data: claimConditions } = useClaimConditions(editionDrop, tokenId)
  return (
    <Box>
      <ThirdwebNftMedia
        metadata={ticket.metadata}
        width='100%'
        height='auto'
        style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '16/9' }}
      />
      <Text
        textTransform={'uppercase'}
        fontSize={'lg'}
        mt={1}
        mb={1}
      >
        {ticket.metadata.name}
      </Text>
      <Text
        color={'neutral.500'}
        mb={1}
      >
        {ticket.metadata.description}
      </Text>
      <Skeleton
        isLoaded={!isLoadingClaimConditions}
        startColor='primary.300'
        endColor='neutral.900'
        mt={'0!important'}
      >
        {Array.isArray(claimConditions) && claimConditions.length ? (
          <ClaimConditions tokenId={tokenId} />
        ) : (
          <Text color={'primary.300'}>Non disponible à la vente</Text>
        )}
      </Skeleton>
    </Box>
  )
}

export default TicketCard
