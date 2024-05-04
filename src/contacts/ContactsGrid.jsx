import { useSuspenseQuery } from '@tanstack/react-query'
import { getContactsQuery } from '../api/api.js'
import { DataGrid } from '@mui/x-data-grid/DataGrid'

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

const ContactsGrid = () => {
  const { data } = useSuspenseQuery(getContactsQuery())
  return (
    <DataGrid rows={data} columns={columns} sx={{ fontSize: 'h4.fontSize' }} />
  )
}

export { ContactsGrid }
