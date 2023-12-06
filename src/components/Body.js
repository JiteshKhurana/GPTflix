import React from 'react'
import Browse from './Browse'
import Login from './Login'
import Error from './Error'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MovieDetails from './MovieDetails'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/error",
      element:<Error/>
    },
    {
      path:"browse/:id",
      element:<MovieDetails/>
    },
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
    
  )
}

export default Body