import { Suspense } from 'react'
import { Header } from '../Header.jsx'
import { Box, Button } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { DownloadOutlined } from '@mui/icons-material'
import { DashboardSkeleton } from '../skeletons/DashboardSkeleton.jsx'
import { DashboardView } from './DashboardView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
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
        <Suspense fallback={<DashboardSkeleton />}>
          <Await resolve={deferred.data}>
            <DashboardView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Dashboard'
