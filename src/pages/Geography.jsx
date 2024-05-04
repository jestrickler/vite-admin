import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Box, Skeleton } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { GeographyChart } from '../components/GeographyChart.jsx'
import { mockGeographyData } from '../data/mockData.js'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockGeographyData
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Geography Chart' subtitle='Simple Geography Chart' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Skeleton variant='rectangular' width='100%' height='75vh' />
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
              <Box height='75vh'>
                <GeographyChart data={data} />
              </Box>
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Geography'
