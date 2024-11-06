import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../Utilites/Utilites";
import Cart from "../Carts/Cart/Cart";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const allProducts = useLoaderData();

  useEffect(()=>{
    const getId = getStoredWishlist();
    const addToWishlist = allProducts.filter(product =>getId.includes(product.product_id))
    setWishlist(addToWishlist)

  },[allProducts])


    return (
        <div className="space-y-5 my-10">
        {
          wishlist.map((cart, i)=> <Cart key={i} cart={cart}></Cart>)
        }
      </div>
    );
};

export default Wishlist;