import { NavLink, Outlet, useLocation } from "react-router-dom";
import './dashboard.css'
import { useEffect } from "react";

const Dashboard = () => {

    const location = useLocation();

    useEffect(()=>{

    },[])

    return (
        <div>
            <div id="dashboard" className="text-center text-white bg-purple-600 py-10 rounded-xl px-4 space-y-5">
                <h1 className="text-3xl font-semibold">Product Details</h1>
                <p className="max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4">
                    <NavLink to='/dashboard' className={`${location.pathname === "/dashboard/wishlist" ?"py-2 px-8 text-xl font-semibold border  border-white rounded-full pending" :"active py-2 px-8 text-xl font-semibold border  border-white rounded-full"}`}>Cart</NavLink>
                    <NavLink to='./wishlist' className="py-2 px-8 text-xl font-semibold border  border-white rounded-full">Wishlist</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;