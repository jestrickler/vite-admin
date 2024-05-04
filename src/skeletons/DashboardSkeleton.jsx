import { Grid, Skeleton } from '@mui/material'

const DashboardSkeleton = () => (
  <Grid container spacing={2}>
    {[...Array(4).keys()].map((item) => (
      <Grid key={item} item xs={3}>
        <Skeleton variant='rectangular' width='100%' height={115} />
      </Grid>
    ))}
    <Grid item xs={8}>
      <Skeleton variant='rectangular' width='100%' height={275} />
    </Grid>
    <Grid item xs={4}>
      <Skeleton variant='rectangular' width='100%' height={275} />
    </Grid>
    {[...Array(3).keys()].map((item) => (
      <Grid key={item} item xs={4}>
        <Skeleton variant='rectangular' width='100%' height={270} />
      </Grid>
    ))}
  </Grid>
)
export { DashboardSkeleton }
