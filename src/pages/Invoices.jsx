import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { mockDataInvoices } from '../data/mockData.js'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockDataInvoices
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

const columns = [
  { field: 'name', headerName: 'Name', flex: 3 },
  { field: 'phone', headerName: 'Phone', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 4 },
  { field: 'date', headerName: 'Date', flex: 2 },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    renderCell: ({ row: { cost } }) => <Typography>${cost}</Typography>
  }
]

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Invoices' subtitle='List of Invoice Balances' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Stack spacing={1}>
              {[...Array(10).keys()].map((item) => (
                <Skeleton
                  key={item}
                  variant='rectangular'
                  width='100%'
                  height={50}
                />
              ))}
            </Stack>
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
              <DataGrid
                rows={data}
                columns={columns}
                checkboxSelection
                sx={{ fontSize: 'h4.fontSize' }}
              />
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Invoices'
