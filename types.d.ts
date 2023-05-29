type Ticket = {
  owner: string
  metadata: {
    name: string
    description: string
    image: string
    id: string
    uri: string
  }
  type: string
  supply: string
}

type EventWithTicket = {
  name: string
  organizator: string
  date: string
  location: string
  description: string
  image: string
  nfts: number[]
  tickets: Ticket[]
}
