import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_image, product_title, price, product_id} = product;

  return (
    <div className="border-2 p-4 rounded-xl flex flex-col justify-between gap-6 shadow-lg">
      <img
        className="rounded-xl border p-4 drop-shadow-lg"
        src={product_image}
        alt=""
      />
      <h3 className="text-3xl font-bold">{product_title}</h3>
      <p className="text-xl font-medium text-gray-600">$ {price}</p>
      <Link to={`/details/${product_id}`} className="px-6 py-2 text-xl font-semibold border-2 border-purple-600 rounded-full text-center hover:bg-purple-600 hover:text-white duration-500 hover:scale-105">
        View Details
      </Link>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
