import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getFaqsQuery } from '../api.js'

const FaqView = () => {
  const { data } = useSuspenseQuery(getFaqsQuery())
  const [expanded, setExpanded] = useState(false)

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false)
  }

  return data.map((item) => (
    <Accordion
      key={item.id}
      expanded={expanded === item.id}
      onChange={handleChange(item.id)}
    >
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 0 }}>
        <Typography variant='h4' component='div' color='primary.main'>
          {item.q}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <Typography>{item.a}</Typography>
      </AccordionDetails>
    </Accordion>
  ))
}

export { FaqView }
