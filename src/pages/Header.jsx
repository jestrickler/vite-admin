import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line react/prop-types
const Header = ({ title, subtitle }) => (
  <Box component='header'>
    <Helmet>
      <title>{title} - Adminis</title>
    </Helmet>
    <Typography variant='h1'>{title}</Typography>
    <Typography variant='h5' component='div' color='primary.main'>
      {subtitle}
    </Typography>
  </Box>
)

export { Header }
