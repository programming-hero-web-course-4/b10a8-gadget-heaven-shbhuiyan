import { useLoaderData } from "react-router-dom";
import { clearItemsFromCart, getStoredCarts, removeCartFromLS } from "../../Utilites/Utilites";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import popup from '../../../assets/Group.png'

const Carts = () => {
  const [carts, setCarts] = useState([]);

  const allProducts = useLoaderData();

  useEffect(()=>{
    const getId = getStoredCarts();
    const addToCart = allProducts.filter(product =>getId.includes(product.product_id))
    setCarts(addToCart)
  },[allProducts])

  const handleRemove = (id) => {
    removeCartFromLS(id)
    const remainingCart = carts.filter(product => product.product_id !== id);
    setCarts(remainingCart);
  }

  const handlePurchase = () => {
    clearItemsFromCart()
    if(carts.length > 0) {
      document.getElementById('my_modal_5').showModal();
      setCarts([]);
    }else{
      alert("please chose your products")
    }
  }

  const totalPrice = carts.reduce((sum,item) => sum + item.price,0);

  const sortByPrice = () => {
    const sortBy = [...carts].sort((a,b)=> a.price - b.price)
    setCarts(sortBy)
  }

  return (
    <div className="md:w-10/12 mx-auto my-10 space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Cart</h3>
        <div className="flex items-center gap-10">
          <h3 className="text-2xl font-bold text-gray-600">Total Cost: <span className="text-amber-600">{totalPrice.toFixed(2)} $</span></h3>
          <div className="flex justify-start items-center gap-4">
            <div className=" bg-gradient-to-b from-purple-600 to to-orange-400 rounded-full p-px hover:scale-105 duration-500">
              <button onClick={sortByPrice} className="px-6 py-2  text-lg font-semibold rounded-full bg-white ">
                Sort By Price
              </button>
            </div>
            <button onClick={handlePurchase} className="hover:scale-105 duration-500 px-6 py-2 rounded-full bg-gradient-to-b from-purple-600 to to-orange-400 text-lg font-semibold text-white">
              Purchase
            </button>
          </div>

        {/* Modal Show in Purchase */}
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
           <div className="modal-box w-96 mx-auto text-center">
            <img className="mx-auto" src={popup} alt="" />
             <h3 className="font-bold text-2xl">Payment Successfully</h3>
             <p className="py-4">Thanks for purchasing.</p>
             <div className="modal-action block">
               <form method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                 <button className="btn w-full rounded-full">Close</button>
               </form>
             </div>
           </div>
          </dialog>



        </div>
      </div>
      <div className="space-y-5">
        {
          carts.map((cart, i)=> <Cart key={i} cart={cart} handleRemove={handleRemove}></Cart>)
        }
      </div>
    </div>
  );
};

export default Carts;
