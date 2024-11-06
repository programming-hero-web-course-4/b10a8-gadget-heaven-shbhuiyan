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
        alert(id,"exist")
    }
    else{
        storedCarts.push(id);
        alert('added')
        const storedCartsStr = JSON.stringify(storedCarts);
        localStorage.setItem("carts", storedCartsStr)
    }
}



// remove item from cart

const removeCartFromLS = (id) => {
    const carts = getStoredCarts();
    const remainingCarts = carts.filter(cartId => cartId !== id);
    localStorage.setItem("carts",remainingCarts)
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
        alert(id,"exist")
    }else{
        storedWishlist.push(id);
        alert('added');
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem("wishlist", storedWishlistStr);
    }
}



// remove item from wishlist

const removeWishlistFromLS = (id) => {
    const wishlist = getStoredWishlist();
    const remainingWL = wishlist.filter(listId => listId !== id);
    localStorage.setItem("wishlist",remainingWL)
}






export {addToStoredCarts, getStoredCarts, addStoredWishlist,getStoredWishlist,removeCartFromLS,removeWishlistFromLS};