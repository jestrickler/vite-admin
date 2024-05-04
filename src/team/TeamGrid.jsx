import { useSuspenseQuery } from '@tanstack/react-query'
import { getEmployeesQuery } from '../api.js'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { Chip } from '@mui/material'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined.js'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined.js'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined.js'

const columns = [
  { field: 'name', headerName: 'Name', flex: 2 },
  { field: 'phone', headerName: 'Phone', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 2 },
  {
    field: 'access',
    headerName: 'Access',
    flex: 1,
    renderCell: ({ row: { access } }) => (
      <Chip
        label={access}
        icon={
          access === 'admin' ? (
            <AdminPanelSettingsOutlinedIcon />
          ) : access === 'manager' ? (
            <SecurityOutlinedIcon />
          ) : (
            <LockOpenOutlinedIcon />
          )
        }
        color='primary'
        sx={{
          width: '100%',
          backgroundColor:
            access === 'admin'
              ? 'primary.dark'
              : access === 'manager'
                ? 'primary.main'
                : 'primary.light',
          fontSize: 'h4.fontSize'
        }}
      />
    )
  }
]

const TeamGrid = () => {
  const { data } = useSuspenseQuery(getEmployeesQuery())
  return (
    <DataGrid rows={data} columns={columns} sx={{ fontSize: 'h4.fontSize' }} />
  )
}

export { TeamGrid }
