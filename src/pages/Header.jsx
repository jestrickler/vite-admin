import { Box, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Header = ({ title, subtitle }) => (
  <Box component='header' ml={2}>
    <Typography variant='h1'>{title}</Typography>
    <Typography variant='h5' component='div' color='primary.main'>
      {subtitle}
    </Typography>
  </Box>
)

export { Header }
