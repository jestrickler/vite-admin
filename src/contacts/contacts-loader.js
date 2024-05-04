import { defer } from 'react-router-dom'
import { getContactsQuery } from '../api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getContactsQuery())
  })
}
