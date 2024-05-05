import { Box, Grid } from '@mui/material'
import { StatBox } from '../components/StatBox.jsx'
import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import PropTypes from 'prop-types'

const StatsBoxGrid = ({ stats }) => {
  const icons = {
    email: <Email sx={{ color: 'primary.main', fontSize: 26 }} />,
    sales: <PointOfSale sx={{ color: 'primary.main', fontSize: 26 }} />,
    clients: <PersonAdd sx={{ color: 'primary.main', fontSize: 26 }} />,
    traffic: <Traffic sx={{ color: 'primary.main', fontSize: 26 }} />
  }

  return ['email', 'sales', 'clients', 'traffic'].map((category) => (
    <Grid key={category} item xs={3}>
      <Box height={115}>
        <StatBox
          title={stats[category].amount}
          subtitle={stats[category].title}
          progress={stats[category].progress}
          increase={stats[category].increase}
          icon={icons[category]}
        />
      </Box>
    </Grid>
  ))
}

const StatPropType = PropTypes.shape({
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  increase: PropTypes.string.isRequired
})

StatsBoxGrid.propTypes = {
  stats: PropTypes.shape({
    email: StatPropType,
    sales: StatPropType,
    clients: StatPropType,
    traffic: StatPropType
  }).isRequired
}

export { StatsBoxGrid }
