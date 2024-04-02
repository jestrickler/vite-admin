import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import Header from './Header.jsx'
import { Box, Button, Skeleton, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 3000))
  return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet fugiat in iste laboriosam neque nostrum perspiciatis similique? Architecto ducimus earum ipsam iure, minima non odit omnis porro quae rerum.'
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Helmet>
        <title>Dashboard - Adminis </title>
      </Helmet>
      <Header title='Dashboard' subtitle='Welcome to your dashboard' />
      <Button>Focus</Button>
      <Box m={2}>
        <Suspense
          fallback={<Skeleton variant='rectangular' width='100%' height={50} />}
        >
          <Await resolve={deferred.data}>
            {(data) => <Typography>{data}</Typography>}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Dashboard'
