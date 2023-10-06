import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home";
import Products from "../../Pages/Products/Products";
import Services from "../../Pages/Services/Services";
import Root from "../Root/Root";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            }
        ]
    }



])

export default myCreateRoute;