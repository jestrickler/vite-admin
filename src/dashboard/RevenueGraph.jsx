import { Box, Grid, IconButton, Typography } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import { LineChart } from '../components/LineChart.jsx'
import PropTypes from 'prop-types'

const RevenueGraph = ({ revenue }) => {
  return (
    <Grid item xs={8}>
      <Box p={2} backgroundColor='background.accent' height={275}>
        <Box display='flex ' justifyContent='space-between' alignItems='center'>
          <Box>
            <Typography variant='h5' component='div'>
              {revenue.title}
            </Typography>
            <Typography variant='h3' component='div' color='primary.main'>
              {revenue.amount}
            </Typography>
          </Box>
          <IconButton color='primary' aria-label='download revenue data'>
            <DownloadOutlined />
          </IconButton>
        </Box>
        <Box height='100%' m={-4}>
          <LineChart data={revenue.data} isDashboard />
        </Box>
      </Box>
    </Grid>
  )
}

RevenueGraph.propTypes = {
  revenue: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  })
}

export { RevenueGraph }
