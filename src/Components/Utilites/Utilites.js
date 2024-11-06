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

export {addToStoredCarts, getStoredCarts};