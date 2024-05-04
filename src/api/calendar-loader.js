import { defer } from 'react-router-dom'
import { getEventsQuery } from './api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getEventsQuery())
  })
}
