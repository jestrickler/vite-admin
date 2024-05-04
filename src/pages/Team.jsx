import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Await, useLoaderData } from 'react-router-dom'
import { Box, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { TableSkeleton } from '../skeletons/TableSkeleton.jsx'
import { getEmployeesQuery } from '../api/api.js'
import { useSuspenseQuery } from '@tanstack/react-query'

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
