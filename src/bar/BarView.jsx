import { Box } from '@mui/material'
import { BarChart } from '../components/BarChart.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBarQuery } from '../api.js'

const BarView = () => {
  const { data } = useSuspenseQuery(getBarQuery())

  return (
    <Box height='75vh'>
      <BarChart data={data} />
    </Box>
  )
}

export { BarView }
