import { Suspense } from 'react'
import { Header } from '../Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { BoxSkeleton } from '../skeletons/BoxSkeleton.jsx'
import { LineView } from './LineView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Line Chart' subtitle='Simple Line Chart' />
      <Box mt={3}>
        <Suspense fallback={<BoxSkeleton />}>
          <Await resolve={deferred.data}>
            <LineView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Line'
