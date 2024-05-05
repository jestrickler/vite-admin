import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Layout } from './layouts/Layout.jsx'
import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        index
        loader={async () => {
          let { loader } = await import('./dashboard/dashboard-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./dashboard/Dashboard.jsx')}
      />
      <Route
        path='team'
        loader={async () => {
          let { loader } = await import('./team/team-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./team/Team.jsx')}
      />
      <Route
        path='contacts'
        loader={async () => {
          let { loader } = await import('./contacts/contacts-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./contacts/Contacts.jsx')}
      />
      <Route
        path='invoices'
        loader={async () => {
          let { loader } = await import('./invoices/invoices-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./invoices/Invoices.jsx')}
      />
      <Route path='profile' lazy={() => import('./profile/Profile.jsx')} />
      <Route
        path='bar'
        loader={async () => {
          let { loader } = await import('./bar/bar-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./bar/Bar.jsx')}
      />
      <Route
        path='pie'
        loader={async () => {
          let { loader } = await import('./pie/pie-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./pie/Pie.jsx')}
      />
      <Route
        path='line'
        loader={async () => {
          let { loader } = await import('./line/line-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./line/Line.jsx')}
      />
      <Route
        path='faq'
        loader={async () => {
          let { loader } = await import('./faq/faq-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./faq/Faq.jsx')}
      />
      <Route
        path='calendar'
        loader={async () => {
          let { loader } = await import('./calendar/calendar-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./calendar/Calendar.jsx')}
      />
      <Route
        path='geography'
        loader={async () => {
          let { loader } = await import('./geography/geography-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./geography/Geography.jsx')}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
