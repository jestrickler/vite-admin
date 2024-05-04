import { Suspense } from 'react'
import { Header } from './Header.jsx'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { Box, Chip, Skeleton, Stack } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { mockDataTeam } from '../data/mockData.js'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return mockDataTeam
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

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

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Header title='Team' subtitle='Manage Your Team Members' />
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
                sx={{ fontSize: 'h4.fontSize' }}
              />
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Team'
