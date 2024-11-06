import PropTypes from "prop-types";

const Cart = ({cart}) => {

    const { product_image, product_title, price,description} = cart;

    return (
        <div className="rounded-xl p-4 border-2 shadow-md">
            <div className="flex justify-start items-center gap-8 rounded-xl">
                <div className="max-w-52 rounded-xl">
                    <img className="rounded-xl p-4 border" src={product_image} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold text-black">{product_title}</h1>
                    <p className="text-lg font-semibold text-gray-500">{description}</p>
                    <p className="text-xl font-semibold text-gray-600">Price: $ {price}</p>
                </div>
            </div>
            <button></button>
        </div>
    );
};



Cart.propTypes = {
    cart:PropTypes.object.isRequired,
}

export default Cart;