import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

const Header = () => {
    return (
        <div className="text-white md:rounded-xl bg-gradient-to-t from-purple-700 to-purple-500 md:px-10 mb-64">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;