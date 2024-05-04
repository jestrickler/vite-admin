import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Box, Skeleton } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { LineChart } from '../components/LineChart.jsx'
import { mockLineData } from '../data/mockData.js'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockLineData
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Line Chart' subtitle='Simple Line Chart' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Skeleton variant='rectangular' width='100%' height='75vh' />
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
              <Box height='75vh'>
                <LineChart data={data} />
              </Box>
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Line'
