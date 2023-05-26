import { useStorage } from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'

const useGetEvents = () => {
  const storage = useStorage()

  const [events, setEvents] = useState<any>([])
  useEffect(() => {
    const download = async () => {
      const events = await storage!.downloadJSON('ipfs://QmTU9bej6JfgK7Wv5t36dFPJgizbhBJNvewH6JdquEFnCa/events.json')
      setEvents(events)
    }
    download()
  }, [storage])

  return events
}
export default useGetEvents
