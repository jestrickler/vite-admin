import { Suspense } from 'react'
import { Header } from '../Header.jsx'
import { Box } from '@mui/material'
import { Await, useLoaderData } from 'react-router-dom'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'
import { FaqView } from './FaqView.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='FAQ' subtitle='Frequently Asked Questions' />
      <Box mt={3}>
        <Suspense fallback={<TableSkeleton rows={5} />}>
          <Await resolve={deferred.data}>
            <FaqView />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Faq'
