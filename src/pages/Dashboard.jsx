import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header.jsx'
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Skeleton,
  Typography
} from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { StatBox } from '../components/StatBox.jsx'
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic
} from '@mui/icons-material'
import { LineChart } from '../components/LineChart.jsx'
import {
  mockBarData,
  mockGeographyData,
  mockLineData,
  mockTransactions
} from '../data/mockData.js'
import { ProgressCircle } from '../components/ProgressCircle.jsx'
import { BarChart } from '../components/BarChart.jsx'
import { GeographyChart } from '../components/GeographyChart.jsx'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return {
    stats: {
      email: {
        title: 'Emails Sent',
        amount: '12,361',
        progress: '0.75',
        increase: '+14%'
      },
      sales: {
        title: 'Sales Obtained',
        amount: '431,225',
        progress: '0.50',
        increase: '+21%'
      },
      clients: {
        title: 'New Clients',
        amount: '32,441',
        progress: '0.30',
        increase: '+5%'
      },
      traffic: {
        title: 'Traffic Received',
        amount: '1,325,134',
        progress: '0.80',
        increase: '+43%'
      }
    },
    revenue: {
      title: 'Revenue Generated',
      amount: '$59,342.32',
      data: mockLineData
    },
    transactions: {
      title: 'Recent Transactions',
      data: mockTransactions
    },
    campaign: {
      title: 'Campaign',
      subtitle: '$48,352 revenue generated',
      details: 'Includes extra misc expenditures and costs'
    },
    sales: {
      title: 'Sales Quantity',
      data: mockBarData
    },
    traffic: {
      title: 'Geography Based Traffic',
      data: mockGeographyData
    }
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()
  const icons = {
    email: <Email sx={{ color: 'primary.main', fontSize: 26 }} />,
    sales: <PointOfSale sx={{ color: 'primary.main', fontSize: 26 }} />,
    clients: <PersonAdd sx={{ color: 'primary.main', fontSize: 26 }} />,
    traffic: <Traffic sx={{ color: 'primary.main', fontSize: 26 }} />
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - Adminis</title>
      </Helmet>
      <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
        <Header title='Dashboard' subtitle='Welcome to your dashboard' />
        <Button
          variant='contained'
          color='primary'
          startIcon={<DownloadOutlined />}
        >
          Download Reports
        </Button>
      </Box>
      <Box mt={3}>
        <Suspense
          fallback={
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
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
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
                        <Typography
                          variant='h3'
                          component='div'
                          color='primary.main'
                        >
                          {data.revenue.amount}
                        </Typography>
                      </Box>
                      <IconButton
                        color='primary'
                        aria-label='download revenue data'
                      >
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
                          <Typography
                            variant='h5'
                            component='div'
                            color='primary.main'
                          >
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
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      mt={2}
                    >
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
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Dashboard'
