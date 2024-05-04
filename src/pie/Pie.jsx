import { Suspense } from 'react'
import { Header } from '../Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { CircleSkeleton } from '../skeletons/CircleSkeleton.jsx'
import { PieView } from './PieView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Pie Chart' subtitle='Simple Pie Chart' />
      <Box mt={3}>
        <Suspense fallback={<CircleSkeleton />}>
          <Await resolve={deferred.data}>
            <PieView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Pie'
