import { Box, Chip, Grid, IconButton, Typography } from '@mui/material'
import { StatBox } from '../components/StatBox.jsx'
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic
} from '@mui/icons-material'
import { LineChart } from '../components/LineChart.jsx'
import { ProgressCircle } from '../components/ProgressCircle.jsx'
import { BarChart } from '../components/BarChart.jsx'
import { GeographyChart } from '../components/GeographyChart.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getDashboardQuery } from '../api.js'

const DashboardView = () => {
  const { data } = useSuspenseQuery(getDashboardQuery())

  const icons = {
    email: <Email sx={{ color: 'primary.main', fontSize: 26 }} />,
    sales: <PointOfSale sx={{ color: 'primary.main', fontSize: 26 }} />,
    clients: <PersonAdd sx={{ color: 'primary.main', fontSize: 26 }} />,
    traffic: <Traffic sx={{ color: 'primary.main', fontSize: 26 }} />
  }

  return (
    <Grid container spacing={2}>
      {['email', 'sales', 'clients', 'traffic'].map((category) => (
        <Grid key={category} item xs={3}>
          <Box height={115}>
            <StatBox
              title={data.stats[category].amount}
              subtitle={data.stats[category].title}
              progress={data.stats[category].progress}
              increase={data.stats[category].increase}
              icon={icons[category]}
            />
          </Box>
        </Grid>
      ))}
      <Grid item xs={8}>
        <Box p={2} backgroundColor='background.accent' height={275}>
          <Box
            display='flex '
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h5' component='div'>
                {data.revenue.title}
              </Typography>
              <Typography variant='h3' component='div' color='primary.main'>
                {data.revenue.amount}
              </Typography>
            </Box>
            <IconButton color='primary' aria-label='download revenue data'>
              <DownloadOutlined />
            </IconButton>
          </Box>
          <Box height='100%' m={-4}>
            <LineChart data={data.revenue.data} isDashboard />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          p={2}
          backgroundColor='background.accent'
          height={275}
          overflow='auto'
        >
          <Typography
            variant='h5'
            component='div'
            pb={2}
            borderBottom={1}
            borderColor='primary.main'
          >
            {data.transactions.title}
          </Typography>
          {data.transactions.data.map((item) => (
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
      <Grid item xs={4}>
        <Box p={2} backgroundColor='background.accent' height={270}>
          <Typography variant='h5' fontWeight='600'>
            {data.campaign.title}
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt={2}>
            <ProgressCircle size={125} />
            <Typography variant='h5' color='primary.main' mt={2}>
              {data.campaign.subtitle}
            </Typography>
            <Typography>{data.campaign.details}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box p={2} backgroundColor='background.accent' height={270}>
          <Typography variant='h5' fontWeight='600'>
            {data.sales.title}
          </Typography>
          <Box height='100%' m={-4} mt={1}>
            <BarChart data={data.sales.data} isDashboard />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box p={2} backgroundColor='background.accent' height={270}>
          <Typography variant='h5' fontWeight='600'>
            {data.traffic.title}
          </Typography>
          <Box height='100%' m={-1}>
            <GeographyChart data={data.traffic.data} isDashboard />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export { DashboardView }
