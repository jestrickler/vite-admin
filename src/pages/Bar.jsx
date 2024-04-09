import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header.jsx'
import { Box, Skeleton } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { BarChart } from '../components/BarChart.jsx'
import { mockBarData } from '../data/mockData.js'

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
      <Helmet>
        <title>Bar Chart - Adminis</title>
      </Helmet>
      <Header title='Bar Chart' subtitle='Simple Bar Chart' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Skeleton variant='rectangular' width='100%' height='75vh' />
          }
        >
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
