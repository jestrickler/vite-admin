import { Box } from '@mui/material'
import { LineChart } from '../components/LineChart.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getLineQuery } from '../api.js'

const LineView = () => {
  const { data } = useSuspenseQuery(getLineQuery())

  return (
    <Box height='75vh'>
      <LineChart data={data} />
    </Box>
  )
}

export { LineView }
