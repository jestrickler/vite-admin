import { defer } from 'react-router-dom'
import { getGeographyQuery } from './api.js'

export const loader = async ({ queryClient }) => {
  return defer({
    response: queryClient.ensureQueryData(getGeographyQuery())
  })
}
