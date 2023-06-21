import React from 'react'
import './App.css'
import EventManager from './components/EventsManager/EventsManager'

function App() {
  return (
    <div className="App mx-auto max-w-6xl text-center my-8">
      <h1 className="font-semibold text-2xl">React - The Road To Enterprise</h1>
      <EventManager />
    </div>
  )
}

export default App
