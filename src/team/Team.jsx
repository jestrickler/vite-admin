import { Suspense } from 'react'
import { Header } from '../components/Header.jsx'
import { Await, useLoaderData } from 'react-router-dom'
import { Box } from '@mui/material'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'
import { TeamGrid } from './TeamGrid.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Team' subtitle='Manage Your Team Members' />
      <Box mt={3}>
        <Suspense fallback={<TableSkeleton />}>
          <Await resolve={deferred.response}>
            <TeamGrid />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Team'
