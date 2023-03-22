import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jsp from './components/jsp'
import Task from './components/texit/Main'

// import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/Jsp',
    element: <Jsp />,
  },
  {
    path: '/task',
    element: <Task />,
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
