import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App'
import Projects from './pages/Projects'
import Car from './pages/Car'
import AppCar from './pages/apps/AppCar'

function BasicRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/outs' element={<Projects />} />
                <Route path='/query_car' element={<Car />} />
                <Route path='/app_car' element={<AppCar />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <BasicRoute />
  </React.StrictMode>,
  document.getElementById('root')
)
