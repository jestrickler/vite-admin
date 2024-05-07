import { Box, Grid, Typography } from '@mui/material'
import { BarChart } from '../components/BarChart.jsx'
import PropTypes from 'prop-types'

const SalesChart = ({ sales }) => (
  <Grid item xs={4}>
    <Box p={2} backgroundColor='background.accent' height={270}>
      <Typography variant='h5' component='h2' fontWeight='600'>
        {sales.title}
      </Typography>
      <Box height='100%' m={-4} mt={1}>
        <BarChart data={sales.data} isDashboard />
      </Box>
    </Box>
  </Grid>
)

SalesChart.propTypes = {
  sales: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  })
}

export { SalesChart }
