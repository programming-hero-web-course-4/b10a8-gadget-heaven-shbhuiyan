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
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DetailsBanner from "../Components/Details/DetailsBanner";
import Carts from "../Components/DashNested/Carts/Carts";
import Wishlist from "../Components/DashNested/Wishlist/Wishlist";
import Another from "../Pages/FAQPage/FAQPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("/Products.json"),
            element: <AllProducts></AllProducts>,
          },
          {
            path: "/laptop",
            loader: () => fetch("/Products.json"),
            element: <Laptop></Laptop>,
          },
          {
            path: "/mac",
            loader: () => fetch("/Products.json"),
            element: <MacBook></MacBook>,
          },
          {
            path: "/ios",
            loader: () => fetch("/Products.json"),
            element: <Iphone></Iphone>,
          },
          {
            path: "/android",
            loader: () => fetch("/Products.json"),
            element: <Android></Android>,
          },
          {
            path: "/watch",
            loader: () => fetch("/Products.json"),
            element: <SmartWatches></SmartWatches>,
          },
          {
            path: "/accessories",
            loader: () => fetch("/Products.json"),
            element: <Accessories></Accessories>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            loader: () => fetch("/Products.json"),
            element: <Carts></Carts>,
          },
          {
            path: "/dashboard/wishlist",
            loader: () => fetch("/Products.json"),
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path:'/FAQPage',
        element:<Another></Another>
      },
      {
        path: "/details/:id",
        loader: () => fetch("/Products.json"),
        element: <DetailsBanner></DetailsBanner>,
      },
    ],
  },
]);

export default router;
