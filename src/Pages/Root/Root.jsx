import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
            <div className="container md:w-11/12 mx-auto font-lora">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <ToastContainer></ToastContainer>
            </div>
    );
};

export default Root;