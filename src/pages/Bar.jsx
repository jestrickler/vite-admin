import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Box } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { BarChart } from '../components/BarChart.jsx'
import { mockBarData } from '../data/mockData.js'
import { BoxSkeleton } from '../skeletons/BoxSkeleton.jsx'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockBarData
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Bar Chart' subtitle='Simple Bar Chart' />
      <Box mt={3}>
        <Suspense fallback={<BoxSkeleton />}>
          <Await resolve={deferred.data}>
            {(data) => (
              <Box height='75vh'>
                <BarChart data={data} />
              </Box>
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Bar'
