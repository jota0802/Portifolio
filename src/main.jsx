import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/error/Error.jsx'
import Home from './routes/home/Home.jsx'

const router = createBrowserRouter([{


  path: '/', element: <App />,
  errorElement: <Error/>,


  children:[
    {path: '/',element:<Home/>}

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
