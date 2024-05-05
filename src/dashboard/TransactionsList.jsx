import { Box, Chip, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const TransactionsList = ({ transactions }) => (
  <Grid item xs={4}>
    <Box p={2} backgroundColor='background.accent' height={275} overflow='auto'>
      <Typography
        variant='h5'
        component='div'
        pb={2}
        borderBottom={1}
        borderColor='primary.main'
      >
        {transactions.title}
      </Typography>
      {transactions.data.map((item) => (
        <Box
          key={item.txId}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          borderBottom={1}
          borderColor='primary.main'
          py={2}
        >
          <Box>
            <Typography variant='h5' component='div' color='primary.main'>
              {item.txId}
            </Typography>
            <Typography>{item.user}</Typography>
          </Box>
          <Typography>{item.date}</Typography>
          <Chip label={'$' + item.cost} color='primary' />
        </Box>
      ))}
    </Box>
  </Grid>
)

TransactionsList.propTypes = {
  transactions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  })
}

export { TransactionsList }
