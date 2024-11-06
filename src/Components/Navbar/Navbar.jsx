import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
import { useEffect, useState } from "react";
import { getStoredCarts } from "../Utilites/Utilites";

const Navbar = () => {
  const [count, setCount] = useState([])

    useEffect(()=>{
      const totalCart = getStoredCarts();
      setCount(totalCart)
    },[])

    const location = useLocation();

    const Links = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/statistics'><li>Statistics</li></NavLink>
        <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
        <NavLink to='/another'><li>Another</li></NavLink>
    </>

  return (
    <div id="navbar" className={`${location.pathname === "/" ? "navbar items-center bg-purple-500 text-white md:px-14 md:rounded-t-xl" : "navbar items-center text-black md:px-14 md:rounded-t-xl"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg font-semibold space-y-3 pl-4 dropdown-content backdrop-blur-2xl rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link to='/' className="text-2xl font-bold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-semibold gap-8">
          {Links}
        </ul>
      </div>
      <div className="navbar-end gap-4 text-black">
        <Link to='/dashboard' className="relative text-xl p-2 border bg-white rounded-full"><FaCartPlus />
        <span className="absolute -top-2 -right-1 text-sm bg-red-600 rounded-full px-2 text-white">{count.length}</span>
        </Link>
        <Link to='/dashboard/wishlist' className="text-xl p-2 border bg-white rounded-full"><FaRegHeart /></Link>
      </div>
    </div>
  );
};

export default Navbar;
