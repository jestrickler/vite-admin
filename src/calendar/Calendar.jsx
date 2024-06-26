import { Suspense } from 'react'
import { Header } from '../components/Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { CalendarSkeleton } from '../skeletons/CalendarSkeleton.jsx'
import { CalendarView } from './CalendarView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Calendar' subtitle='Your Interactive Calendar' />
      <Box mt={3}>
        <Suspense fallback={<CalendarSkeleton />}>
          <Await resolve={deferred.data}>
            <CalendarView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Calendar'
