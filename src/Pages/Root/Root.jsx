import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="font-lora">
            <div className="container md:w-11/12 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;