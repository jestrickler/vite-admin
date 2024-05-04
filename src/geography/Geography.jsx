import { Suspense } from 'react'
import { Header } from '../Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { BoxSkeleton } from '../skeletons/BoxSkeleton.jsx'
import { GeographyView } from './GeographyView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Geography Chart' subtitle='Simple Geography Chart' />
      <Box mt={3}>
        <Suspense fallback={<BoxSkeleton />}>
          <Await resolve={deferred.data}>
            <GeographyView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Geography'
