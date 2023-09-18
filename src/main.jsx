import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import UserInfo from './components/UserInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/user/:userID',
        element: <UserInfo />
      }
    ]
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />
  },
  {
    path: '/help',
    element: <Help />,
    errorElement: <Error />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router}/>   

  </React.StrictMode>
)
