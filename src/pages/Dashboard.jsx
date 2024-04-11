import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header.jsx'
import { Box, Button, Grid, Skeleton } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { StatBox } from '../components/StatBox.jsx'
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic
} from '@mui/icons-material'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return {
    stats: {
      email: {
        title: 'Emails Sent',
        count: '12,361',
        progress: '0.75',
        increase: '+14%'
      },
      sales: {
        title: 'Sales Obtained',
        count: '431,225',
        progress: '0.50',
        increase: '+21%'
      },
      clients: {
        title: 'New Clients',
        count: '32,441',
        progress: '0.30',
        increase: '+5%'
      },
      traffic: {
        title: 'Traffic Received',
        count: '1,325,134',
        progress: '0.80',
        increase: '+43%'
      }
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
          color='secondary'
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
                  <Skeleton variant='rectangular' width='100%' height={110} />
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
                    <StatBox
                      title={data.stats[category].count}
                      subtitle={data.stats[category].title}
                      progress={data.stats[category].progress}
                      increase={data.stats[category].increase}
                      icon={icons[category]}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Dashboard'
