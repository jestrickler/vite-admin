import { Suspense } from 'react'
import { Header } from '../pages/Header.jsx'
import { Await, useLoaderData } from 'react-router-dom'
import { Box } from '@mui/material'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'
import { ContactsGrid } from './ContactsGrid.jsx'

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Contacts' subtitle='Manage Your Contacts' />
      <Box mt={3}>
        <Suspense fallback={<TableSkeleton />}>
          <Await resolve={deferred.data}>
            <ContactsGrid />
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Contacts'
