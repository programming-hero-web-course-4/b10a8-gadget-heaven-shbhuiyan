import { toast } from "react-toastify";
// for carts



const getStoredCarts = ()  =>{
    const storedCartsStr = localStorage.getItem("carts");

    if(storedCartsStr){
        const getCartObj = JSON.parse(storedCartsStr);
        return getCartObj;
    }
    else{
        return [];
    }

}


const addToStoredCarts = (id) => {
    const storedCarts = getStoredCarts();
    
    if(storedCarts.includes(id)){
        toast.error('This item already exist',{position:"top-center"})
    }
    else{
        storedCarts.push(id);
        toast.success('Successfully added to your cart',{position:"top-center"})
        const storedCartsStr = JSON.stringify(storedCarts);
        localStorage.setItem("carts", storedCartsStr)
    }
}



// remove item from cart

const removeCartFromLS = (id) => {
    const carts = getStoredCarts();
    const remainingCarts = carts.filter(cartId => cartId !== id);
    localStorage.setItem("carts",JSON.stringify(remainingCarts))
}



// for wishList 

const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem("wishlist")

    if(storedWishlistStr){
        const getWishlistObj = JSON.parse(storedWishlistStr);
        return getWishlistObj;
    }else{
        return [];
    }
}



const addStoredWishlist = (id) => {
    const storedWishlist = getStoredWishlist();

    if(storedWishlist.includes(id)){
        toast.error('this is already exist',{position:"top-center"})
    }else{
        storedWishlist.push(id);
        toast.success('Successfully added to your Wishlist',{position:"top-center"})
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem("wishlist", storedWishlistStr);
    }
}



// remove item from wishlist

const removeWishlistFromLS = (id) => {
    const wishlist = getStoredWishlist();
    const remainingWL = wishlist.filter(listId => listId !== id);
    localStorage.setItem("wishlist",JSON.stringify(remainingWL))
}




const clearItemsFromCart = () => {
    localStorage.removeItem("carts")
}




export {addToStoredCarts, getStoredCarts, addStoredWishlist,getStoredWishlist,removeCartFromLS,removeWishlistFromLS,clearItemsFromCart};