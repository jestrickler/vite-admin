import { defer } from 'react-router-dom'
import { getBarQuery } from '../api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getBarQuery())
  })
}
