import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-icons'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import React from 'react'
import Calendar from 'react-calendar'

function App() {
  return (
    <BrowserRouter>
        <RoutesApp/>
    </BrowserRouter>
  )
}

export default App;
