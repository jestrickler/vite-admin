import { defer } from 'react-router-dom'
import { getTeamQuery } from './api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getTeamQuery())
  })
}
