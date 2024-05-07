import { Box, Typography } from '@mui/material'
import { ProgressCircle } from './ProgressCircle'

// eslint-disable-next-line react/prop-types
const StatBox = ({ title, subtitle, icon, progress, increase }) => (
  <Box
    width='100%'
    height='100%'
    px={4}
    py={2}
    backgroundColor='background.accent'
    borderRadius={2}
    align-items='center'
  >
    <Box display='flex' justifyContent='space-between'>
      <Box>
        {icon}
        <Typography variant='h4' component='div' fontWeight='bold'>
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={progress} />
      </Box>
    </Box>
    <Box display='flex' justifyContent='space-between' mt='2'>
      <Typography variant='h5' component='h2' sx={{ color: 'primary.main' }}>
        {subtitle}
      </Typography>
      <Typography
        variant='h5'
        component='div'
        fontStyle='italic'
        sx={{ color: 'primary.main' }}
      >
        {increase}
      </Typography>
    </Box>
  </Box>
)

export { StatBox }
