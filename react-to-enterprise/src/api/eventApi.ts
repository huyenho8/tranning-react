import { Event } from '@/components/EventsManager/eventsTypes'
import api from './api'

export const fetchEvents = () => {
  return api
    .get<{
      events: Event[]
    }>('events/all')
    .then((res) => res.data.events)
}

export const createEvents = (event: Event) => {
  return api.post<boolean>('event', event)
}
