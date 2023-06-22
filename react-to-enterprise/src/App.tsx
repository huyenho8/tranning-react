import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import EventManager from './components/EventsManager/EventsManager'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
        <EventManager />
      </div>
    </QueryClientProvider>
  )
}

export default App
