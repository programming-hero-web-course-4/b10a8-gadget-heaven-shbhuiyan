import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();
  const AllProducts = useLoaderData();

  useEffect(() => {
    const productDetail = AllProducts.find(
      (product) => product.product_id === id
    );
    setDetail(productDetail);
  }, [AllProducts, id]);

  const { product_image, product_title, price, availability,description,Specification,rating} = detail;

  return (

    <div className="relative -top-48 bg-white mx-4 md:mx-10 max-w-5xl xl:mx-auto max-md:space-y-4 md:flex gap-10 p-4 border-2 rounded-xl shadow-xl">
      <div className="border-2 rounded-xl p-4 flex items-center">
        <img src={product_image} alt="" />
      </div>
      <div className="flex flex-col justify-between items-start gap-4 py-4">
        <h1 className="text-3xl font-bold text-black">{product_title}</h1>
        <p className="text-xl font-semibold text-gray-600">Price : $ {price}</p>
        <span className={`${availability ? "py-1 px-4 border-2 border-green-500 text-green-500 text-sm font-bold bg-green-50 rounded-full" : "py-1 px-4 border-2 border-red-500 text-red-500 text-sm font-bold bg-red-50 rounded-full" }`}>{`${availability  ? "In Stock" : "Out Stock"}`}</span>
        <p className="text-lg font-semibold text-gray-600">{description}</p>
        <div className="">
            <span className="text-xl font-semibold text-black">Specification :</span>
            <ul className="list-decimal ml-8 p-4">
              {
                Specification?.map((specific, i) => <li key={i}>{specific}</li>)
              }
            </ul>
        </div>
        <div className="text-black text-xl font-semibold">Rating 🌟
              <div className=" flex items-center gap-3 py-2">
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
                </div>
                <small className="bg-base-300 py-1 px-2 rounded-full">{rating}</small>
              </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-4 font-semibold text-lg px-6 py-2 bg-purple-600 text-white rounded-full hover:scale-105 duration-500">Add To Cart <BsCart4 className="text-xl" /></button>
          <button className="text-xl p-2 border-2 bg-white rounded-full hover:border-purple-600 duration-500"><FaRegHeart /></button>
        </div>
      </div>
    </div>

  )
};

export default Details;




