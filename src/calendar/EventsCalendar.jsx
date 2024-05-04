import { useState } from 'react'
import { Box } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { EventsList } from './EventsList.jsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getEventsQuery } from '../api/api.js'

const EventsCalendar = () => {
  const { data } = useSuspenseQuery(getEventsQuery())
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt('Enter a title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box display='flex' justifyContent='space-between'>
      <EventsList currentEvents={currentEvents} />
      <Box flex='1 1 100%' ml={2}>
        <FullCalendar
          height='75vh'
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={setCurrentEvents}
          initialEvents={data}
        />
      </Box>
    </Box>
  )
}

export { EventsCalendar }
