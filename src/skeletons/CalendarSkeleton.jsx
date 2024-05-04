import { Skeleton, Stack } from '@mui/material'

const CalendarSkeleton = () => (
  <Stack direction='row' spacing={2}>
    <Skeleton variant='rectangular' width='21%' height='75vh' />
    <Skeleton variant='rectangular' width='100%' height='75vh' />
  </Stack>
)
export { CalendarSkeleton }
