import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../data/mockData.js'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockDataContacts
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

const columns = [
  { field: 'registrarId', headerName: 'Registrar Id', flex: 2 },
  { field: 'name', headerName: 'Name', flex: 3 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    flex: 1
  },
  { field: 'phone', headerName: 'Phone', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 4 },
  { field: 'address', headerName: 'Address', flex: 3 },
  { field: 'city', headerName: 'City', flex: 2 },
  { field: 'state', headerName: 'State', flex: 1 },
  { field: 'zipCode', headerName: 'Zip', flex: 1 }
]

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Contacts' subtitle='Manage Your Contacts' />
      <Box mt={3}>
        <Suspense fallback={<TableSkeleton />}>
          <Await resolve={deferred.data}>
            {(data) => (
              <DataGrid
                rows={data}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                sx={{ fontSize: 'h4.fontSize' }}
              />
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Contacts'
