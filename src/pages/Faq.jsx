import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header.jsx'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Skeleton,
  Typography
} from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { ExpandMore } from '@mui/icons-material'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return [
    {
      id: 1,
      q: 'An Important Question',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut laboriosam molestiae numquam quis! Deserunt dicta.'
    },
    {
      id: 2,
      q: 'Another Important Question',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, cumque harum illo inventore.'
    },
    {
      id: 3,
      q: 'Your Favorite Question',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto beatae cum, eaque in itaque maiores maxime.'
    },
    {
      id: 4,
      q: 'Some Random Question',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consequatur corporis cupiditate delectus.'
    },
    {
      id: 5,
      q: 'The Final Question',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, nisi quam? Adipisci asperiores atque dicta eligendi est, explicabo, inventore.'
    }
  ]
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()

  return (
    <>
      <Helmet>
        <title>FAQ - Adminis</title>
      </Helmet>
      <Header title='FAQ' subtitle='Frequently Asked Questions' />
      <Box mt={3}>
        <Suspense
          fallback={
            <>
              {[...Array(5).keys()].map((item) => (
                <Box key={item}>
                  <Skeleton variant='h4' width={250} sx={{ mt: 6 }} />
                  <Skeleton width={800} sx={{ mt: 4 }} />
                </Box>
              ))}
            </>
          }
        >
          <Await resolve={deferred.data}>
            {(data) =>
              data.map((item) => (
                <Accordion key={item.id} defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                      variant='h4'
                      component='div'
                      color='primary.main'
                    >
                      {item.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Faq'
