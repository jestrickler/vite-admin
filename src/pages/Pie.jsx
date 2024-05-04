import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Box } from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { PieChart } from '../components/PieChart.jsx'
import { mockPieData } from '../data/mockData.js'
import { CircleSkeleton } from '../skeletons/CircleSkeleton.jsx'

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
        <Suspense fallback={<CircleSkeleton />}>
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
