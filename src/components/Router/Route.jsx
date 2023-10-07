import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home";
import Shop from "../../Pages/Shop/Shop";
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
                path:'/shop',
                element:<Shop></Shop>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>,
            },
            {
                path:'/faq',
                element:<Faq></Faq>,
            }
        ]
    }



])

export default myCreateRoute;