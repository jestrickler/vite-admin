import { defer } from 'react-router-dom'
import { getLineQuery } from '../api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getLineQuery())
  })
}
