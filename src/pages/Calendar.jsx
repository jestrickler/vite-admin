import { Suspense, useState } from 'react'
import { Header } from './Header.jsx'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return [
    {
      id: '1',
      title: 'All-day event',
      date: '2024-04-14'
    },
    {
      id: '2',
      title: 'Timed event',
      date: '2024-04-28'
    }
  ]
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({ data: getData() })

export const Component = () => {
  let deferred = useLoaderData()
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
    <>
      <Header title='Calendar' subtitle='Your Interactive Calendar' />
      <Box mt={3}>
        <Suspense
          fallback={
            <Stack direction='row' spacing={2}>
              <Skeleton variant='rectangular' width='21%' height='75vh' />
              <Skeleton variant='rectangular' width='100%' height='75vh' />
            </Stack>
          }
        >
          <Await resolve={deferred.data}>
            {(data) => (
              <Box display='flex' justifyContent='space-between'>
                <Box flex='1 1 20%' backgroundColor='background.accent' p={2}>
                  <Typography variant='h2'>Events</Typography>
                  <List>
                    {currentEvents.map((event) => (
                      <ListItem
                        key={event.id}
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          mb: 2
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant='h5'
                              component='div'
                              fontWeight='bold'
                            >
                              {event.title}
                            </Typography>
                          }
                          secondary={
                            <Typography variant='h5' component='div'>
                              {formatDate(event.start, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
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
            )}
          </Await>
        </Suspense>
      </Box>
    </>
  )
}

Component.displayName = 'Calendar'
