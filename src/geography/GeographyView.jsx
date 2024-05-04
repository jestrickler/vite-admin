import { Box } from '@mui/material'
import { GeographyChart } from '../components/GeographyChart.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getGeographyQuery } from '../api.js'

const GeographyView = () => {
  const { data } = useSuspenseQuery(getGeographyQuery())

  return (
    <Box height='75vh'>
      <GeographyChart data={data} />
    </Box>
  )
}

export { GeographyView }
