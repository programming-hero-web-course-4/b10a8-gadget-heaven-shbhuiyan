import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProducts from "../Components/HomeNested/AllProducts/AllProducts";
import Laptop from "../Components/HomeNested/Laptop/Laptop";
import MacBook from "../Components/HomeNested/MacBook/MacBook";
import Iphone from "../Components/HomeNested/Iphone/Iphone";
import Android from "../Components/HomeNested/Android/Android";
import SmartWatches from "../Components/HomeNested/SmartWatches/SmartWatches";
import Accessories from "../Components/HomeNested/Accessories/Accessories";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<AllProducts></AllProducts>
                    },
                    {
                        path:'/laptop',
                        element:<Laptop></Laptop>
                    },
                    {
                        path:'/mac',
                        element:<MacBook></MacBook>
                    },
                    {
                        path:'/ios',
                        element:<Iphone></Iphone>
                    },
                    {
                        path:'/android',
                        element:<Android></Android>
                    },
                    {
                        path:'/watch',
                        element:<SmartWatches></SmartWatches>
                    },
                    {
                        path:'/accessories',
                        element:<Accessories></Accessories>
                    },
                ]
            }
        ]
    }
])


export default router;