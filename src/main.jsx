import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './context/GlobalState.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop.jsx'
import Main from './components/Main.jsx'
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <HomePage />
          },
          {
            path: "shop",
            element: <Shop />,
            
          }
        ]
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>,
)
