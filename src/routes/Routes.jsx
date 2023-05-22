import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../pages/Home"
import CheckOut from "../pages/CheckOut"
import AddService from "../pages/AddService"
import BookService from "../pages/BookService"


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <Home/>
            },
            {
                path: "/services",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Home/>
            },
            {
                path: "/check-out",
                element: <CheckOut/>
            },
            {
                path: "/add-new-service",
                element: <AddService/>
            },
            {
                path: "/booking-service",
                element: <BookService/>
            }
        ]
    }
])

export default Routes