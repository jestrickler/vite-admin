import { Box } from '@mui/material'
import { PieChart } from '../components/PieChart.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getPieQuery } from '../api.js'

const PieView = () => {
  const { data } = useSuspenseQuery(getPieQuery())

  return (
    <Box height='75vh'>
      <PieChart data={data} />
    </Box>
  )
}

export { PieView }
