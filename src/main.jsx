import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import ErrorPage from './pages/errorpage/ErrorPage'
import HomePage from './pages/homepage/HomePage'
import TimeLine from './pages/timeline/TimeLine'
import Stats from './pages/stats/Stats'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
        loader: () => fetch('/data.json')
      },
      {
        path: '/timeline',
        Component: TimeLine
      },
      {
        path: '/stats',
        Component: Stats
      }
    ],
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />

  </StrictMode>,
)
