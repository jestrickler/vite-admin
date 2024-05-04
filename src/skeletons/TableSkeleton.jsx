import { Skeleton, Stack } from '@mui/material'
import PropTypes from 'prop-types'

const TableSkeleton = ({ rows = 10 }) => (
  <Stack spacing={1}>
    {[...Array(rows).keys()].map((item) => (
      <Skeleton key={item} variant='rectangular' width='100%' height={50} />
    ))}
  </Stack>
)

TableSkeleton.propTypes = {
  rows: PropTypes.number
}

export { TableSkeleton }
