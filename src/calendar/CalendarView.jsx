import { useState } from 'react'
import { Box } from '@mui/material'
import { EventsList } from './EventsList.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getEventsQuery } from '../api/api.js'
import { EventsCalendar } from './EventsCalendar.jsx'

const CalendarView = () => {
  const { data } = useSuspenseQuery(getEventsQuery())
  const [events, setEvents] = useState([])

  return (
    <Box display='flex' justifyContent='space-between'>
      <EventsList events={events} />
      <EventsCalendar initialEvents={data} setEvents={setEvents} />
    </Box>
  )
}

export { CalendarView }
