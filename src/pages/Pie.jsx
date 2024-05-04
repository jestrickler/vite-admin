import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Box, Skeleton } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { PieChart } from '../components/PieChart.jsx'
import { mockPieData } from '../data/mockData.js'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockPieData
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Pie Chart' subtitle='Simple Pie Chart' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Box
              width='100%'
              height='75vh'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Skeleton variant='circular' width={600} height={600} />
            </Box>
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
              <Box height='75vh'>
                <PieChart data={data} />
              </Box>
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Pie'
