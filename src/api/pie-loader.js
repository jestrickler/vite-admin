import { defer } from 'react-router-dom'
import { getPieQuery } from './api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getPieQuery())
  })
}
