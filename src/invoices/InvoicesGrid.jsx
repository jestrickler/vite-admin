import { useSuspenseQuery } from '@tanstack/react-query'
import { getInvoicesQuery } from '../api.js'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { Typography } from '@mui/material'

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

const InvoicesGrid = () => {
  const { data } = useSuspenseQuery(getInvoicesQuery())
  return (
    <DataGrid rows={data} columns={columns} sx={{ fontSize: 'h4.fontSize' }} />
  )
}

export { InvoicesGrid }
