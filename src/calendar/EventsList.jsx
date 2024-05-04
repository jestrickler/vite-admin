import PropTypes from 'prop-types'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import { formatDate } from '@fullcalendar/core'

const EventsList = ({ currentEvents }) => {
  return (
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
                <Typography variant='h5' component='div' fontWeight='bold'>
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
  )
}

EventsList.propTypes = {
  currentEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
}

export { EventsList }
