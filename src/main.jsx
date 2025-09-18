import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout.jsx'
import Orders from './pages/Orders.jsx'
import Traking from './pages/Traking.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/checkout", element: <Checkout /> },
            { path: "/orders", element: <Orders /> },
            { path: "/traking", element: <Traking /> },
            { path: "*", element: <ErrorPage /> }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
