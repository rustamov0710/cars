import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
