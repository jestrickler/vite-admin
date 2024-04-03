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
import Invoices from './pages/Invoices.jsx'
import Profile from './pages/Profile.jsx'
import Bar from './pages/Bar.jsx'
import Pie from './pages/Pie.jsx'
import Line from './pages/Line.jsx'
import Faq from './pages/Faq.jsx'
import Calendar from './pages/Calendar.jsx'
import Geography from './pages/Geography.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index lazy={() => import('./pages/Dashboard.jsx')} />
      <Route path='team' lazy={() => import('./pages/Team.jsx')} />
      <Route path='contacts' lazy={() => import('./pages/Contacts.jsx')} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='profile' element={<Profile />} />
      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='faq' element={<Faq />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='geography' element={<Geography />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
