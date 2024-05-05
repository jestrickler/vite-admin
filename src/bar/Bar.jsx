import { Suspense } from 'react'
import { Header } from '../components/Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { BoxSkeleton } from '../skeletons/BoxSkeleton.jsx'
import { BarView } from './BarView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Bar Chart' subtitle='Simple Bar Chart' />
      <Box mt={3}>
        <Suspense fallback={<BoxSkeleton />}>
          <Await resolve={deferred.data}>
            <BarView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Bar'
