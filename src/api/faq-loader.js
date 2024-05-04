import { defer } from 'react-router-dom'
import { getFaqsQuery } from './api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getFaqsQuery())
  })
}
