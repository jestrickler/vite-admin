import { Box, Grid, Typography } from '@mui/material'
import { GeographyChart } from '../components/GeographyChart.jsx'
import PropTypes from 'prop-types'

const TrafficChart = ({ traffic }) => (
  <Grid item xs={4}>
    <Box p={2} backgroundColor='background.accent' height={270}>
      <Typography variant='h5' fontWeight='600'>
        {traffic.title}
      </Typography>
      <Box height='100%' m={-1}>
        <GeographyChart data={traffic.data} isDashboard />
      </Box>
    </Box>
  </Grid>
)

TrafficChart.propTypes = {
  traffic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  })
}

export { TrafficChart }
