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
      <Route index lazy={() => import('./pages/Dashboard.jsx')} />
      <Route
        path='team'
        loader={async () => {
          let { loader } = await import('./team/team-loader.js')
          return loader({ queryClient })
        }}
        lazy={() => import('./team/Team.jsx')}
      />
      <Route path='contacts' lazy={() => import('./pages/Contacts.jsx')} />
      <Route path='invoices' lazy={() => import('./pages/Invoices.jsx')} />
      <Route path='profile' lazy={() => import('./pages/Profile.jsx')} />
      <Route path='bar' lazy={() => import('./pages/Bar.jsx')} />
      <Route path='pie' lazy={() => import('./pages/Pie.jsx')} />
      <Route path='line' lazy={() => import('./pages/Line.jsx')} />
      <Route path='faq' lazy={() => import('./pages/Faq.jsx')} />
      <Route path='calendar' lazy={() => import('./pages/Calendar.jsx')} />
      <Route path='geography' lazy={() => import('./pages/Geography.jsx')} />
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
