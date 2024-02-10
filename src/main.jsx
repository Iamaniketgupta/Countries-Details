import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CardDetails from './components/CardDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { DataProvider } from './context/DataContext.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },

  {
    path: "/:country",
    element: <CardDetails />,
    errorElement:<ErrorPage/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
     <RouterProvider router={router} />
     </DataProvider>
  </React.StrictMode>,
)
