import { Box, Skeleton } from '@mui/material'

const CircleSkeleton = () => (
  <Box
    width='100%'
    height='75vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Skeleton variant='circular' width={600} height={600} />
  </Box>
)
export { CircleSkeleton }
