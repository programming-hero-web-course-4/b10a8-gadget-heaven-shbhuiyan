import { NavLink, Outlet } from "react-router-dom";
import './Home.css'


const Home = () => {



    return (
        <div className="p-5 space-y-10">
            <h1 className="text-3xl md:text-6xl font-bold text-center">Explore Cutting Edge Gadgets</h1>
            <div className="md:flex justify-center items-start gap-6">
                <div id="categories" className="w-1/4 text-2xl font-semibold p-8  text-gray-700 border-2 rounded-xl flex flex-col gap-5">
                    <NavLink to='/' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">All Products</NavLink>
                    <NavLink to='/laptop' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Laptop</NavLink>
                    <NavLink to='/mac' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Mac Book</NavLink>
                    <NavLink to='/ios' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Iphone</NavLink>
                    <NavLink to='/android' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Android</NavLink>
                    <NavLink to='/watch' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Smart Watches</NavLink>
                    <NavLink to='/accessories' className="px-6 py-3 bg-base-300 rounded-full hover:scale-105 duration-500 hover:border-2 hover:border-purple-500 border-2 border-transparent">Accessories</NavLink>
                </div>
                <div className="w-3/4 border-2 rounded-xl">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;