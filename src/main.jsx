import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Projects from './routes/Projects/Projects.jsx'
import App from './App.jsx'


const router = createBrowserRouter([{

  path: '/', element: <App />,
  errorElement: <Error />, 

  children:[
    {path: '/', element: <Home />},
    {path: '/About', element: <About />},
    {path: '/Projects', element: <Projects />},
  ]

}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
