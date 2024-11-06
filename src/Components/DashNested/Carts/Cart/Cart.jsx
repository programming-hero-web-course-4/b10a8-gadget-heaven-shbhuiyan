import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({cart,handleRemove}) => {

    const { product_image, product_title, price,description,product_id} = cart;

    return (
        <div className="rounded-xl p-4 border-2 shadow-md flex justify-between">
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
            <TiDeleteOutline onClick={()=>handleRemove(product_id)} title="delete" className="text-4xl text-red-600 lg:hover:scale-110 duration-500" />
        </div>
    );
};



Cart.propTypes = {
    cart:PropTypes.object.isRequired,
    handleRemove:PropTypes.func.isRequired,
}

export default Cart;