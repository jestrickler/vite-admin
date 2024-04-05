import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Layout } from './layouts/Layout.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index lazy={() => import('./pages/Dashboard.jsx')} />
      <Route path='team' lazy={() => import('./pages/Team.jsx')} />
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
    <RouterProvider router={router} />
  </React.StrictMode>
)
