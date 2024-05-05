import { Grid } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getDashboardQuery } from '../api.js'
import { StatsBoxGrid } from './StatsBoxGrid.jsx'
import { RevenueGraph } from './RevenueGraph.jsx'
import { TransactionsList } from './TransactionsList.jsx'
import { CampaignGraph } from './CampaignGraph.jsx'
import { SalesChart } from './SalesChart.jsx'
import { TrafficChart } from './TrafficChart.jsx'

const DashboardView = () => {
  const { data } = useSuspenseQuery(getDashboardQuery())

  return (
    <Grid container spacing={2}>
      <StatsBoxGrid stats={data.stats} />
      <RevenueGraph revenue={data.revenue} />
      <TransactionsList transactions={data.transactions} />
      <CampaignGraph campaign={data.campaign} />
      <SalesChart sales={data.sales} />
      <TrafficChart traffic={data.traffic} />
    </Grid>
  )
}

export { DashboardView }
