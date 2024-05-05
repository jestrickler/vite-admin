import { Box, Grid, Typography } from '@mui/material'
import { ProgressCircle } from '../components/ProgressCircle.jsx'
import PropTypes from 'prop-types'

const CampaignGraph = ({ campaign }) => (
  <Grid item xs={4}>
    <Box p={2} backgroundColor='background.accent' height={270}>
      <Typography variant='h5' fontWeight='600'>
        {campaign.title}
      </Typography>
      <Box display='flex' flexDirection='column' alignItems='center' mt={2}>
        <ProgressCircle size={campaign.size} />
        <Typography variant='h5' color='primary.main' mt={2}>
          {campaign.subtitle}
        </Typography>
        <Typography>{campaign.details}</Typography>
      </Box>
    </Box>
  </Grid>
)

CampaignGraph.propTypes = {
  campaign: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  })
}

export { CampaignGraph }
