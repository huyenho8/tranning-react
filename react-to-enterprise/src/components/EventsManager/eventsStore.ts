import create, { GetState, SetState } from 'zustand'
import {
  StoreApiWithDevtools,
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { events } from './eventsData'
import type { Event } from './eventsTypes'

export type EventsState = {
  events: typeof events
  selectedEvent: Event['id']
  selectEvent: (id: string) => void
  createEvent: (event: Event) => void
}

export const useEventsStore = create<
  EventsState,
  SetState<EventsState>,
  GetState<EventsState>,
  StoreApiWithSubscribeWithSelector<EventsState> &
    StoreApiWithDevtools<EventsState>
>(
  devtools(
    subscribeWithSelector((set) => ({
      events: [...events],
      selectEvent: (id: string) => {
        set({ selectedEvent: id })
      },
      createEvent: (event) => {
        set((state) => ({
          events: [...state.events, event],
        }))
      },
      selectedEvent: '',
    })),
    {
      name: 'Events',
    }
  )
)

export type PastEventsState = { events: typeof events }

export const usePastEventsStore = create<
  PastEventsState,
  SetState<PastEventsState>,
  GetState<PastEventsState>,
  StoreApiWithDevtools<PastEventsState>
>(
  devtools((set) => ({ events: [] }), {
    name: 'PastEvents',
  })
)
useEventsStore.subscribe(
  (state) => state.events,
  (events) => {
    const pastEvents = events.filter((event) => {
      const [day, month, year] = event.endDate
        .split('/')
        .map((item) => parseInt(item))
      const [hour, minute] = event.endTime.split(':')
      return (
        new Date(year, month - 1, day, parseInt(hour), parseInt(minute)) <
        new Date()
      )
    })
    usePastEventsStore.setState({
      events: pastEvents,
    })
  },
  { fireImmediately: true }
)
