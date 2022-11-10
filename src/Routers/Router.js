import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/Service/AddService";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Services from "../Pages/Service/Services";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "../Routers/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://service-review-server-six.vercel.app/services/${params.id}`)
            }
        ]
    }
])