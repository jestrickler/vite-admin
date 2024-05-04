import { Suspense } from 'react'
import { Header } from '../pages/Header.jsx'
import { Await, useLoaderData } from 'react-router-dom'
import { Box } from '@mui/material'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'
import { InvoicesGrid } from './InvoicesGrid.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Invoices' subtitle='List of Invoice Balances' />
      <Box mt={3}>
        <Suspense fallback={<TableSkeleton />}>
          <Await resolve={deferred.data}>
            <InvoicesGrid />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Invoices'
