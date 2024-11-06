import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist, removeWishlistFromLS } from "../../Utilites/Utilites";
import Cart from "../Carts/Cart/Cart";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const allProducts = useLoaderData();

  useEffect(()=>{
    const getId = getStoredWishlist();
    const addToWishlist = allProducts.filter(product =>getId.includes(product.product_id))
    setWishlist(addToWishlist)
  },[allProducts])

  const handleRemove = (id) => {
    removeWishlistFromLS(id)
    const newWishlist = wishlist.filter(product => product.product_id !== id);
    setWishlist(newWishlist)
    toast.warning('Delete your product from Wishlist',{position:"top-right"})
  }


    return (
      <div className="md:w-10/12 mx-auto my-10 space-y-10">
        <h3 className="text-2xl font-bold">Wishlist</h3>
        <div className="space-y-5">
        {
          wishlist.map((cart, i)=> <Cart key={i} cart={cart} handleRemove={handleRemove}></Cart>)
        }
      </div>
      </div>
    );
};

export default Wishlist;