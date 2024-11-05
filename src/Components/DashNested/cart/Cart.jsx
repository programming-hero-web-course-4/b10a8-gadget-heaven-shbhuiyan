
const Cart = () => {
    return (
        <div className="md:w-10/12 mx-auto my-10">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Cart</h3>
                <div className="flex items-center gap-10">
                    <h3 className="text-2xl font-bold">Total Cost:</h3>
                    <div className="flex justify-start items-center gap-4">
                    <div className=" bg-gradient-to-b from-purple-600 to to-orange-400 rounded-full p-px hover:scale-105 duration-500"><button className="px-6 py-2  text-lg font-semibold rounded-full bg-white ">Sort By Price</button></div>
                    <button className="hover:scale-105 duration-500 px-6 py-2 rounded-full bg-gradient-to-b from-purple-600 to to-orange-400 text-lg font-semibold text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;