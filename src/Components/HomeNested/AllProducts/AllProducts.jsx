import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";
import { useEffect, useState } from "react";


const AllProducts = () => {
    const [products , setProducts] = useState([])
    const allProducts = useLoaderData();
    
    useEffect(()=>{
        const show9Products = allProducts.slice(0,9);
        setProducts(show9Products);
    },[allProducts])


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {
                    products.map(product => <Card key={product.product_id} product={product} ></Card>)
                }
            </div>
            <button onClick={()=>setProducts(allProducts)} className={`${products.length <= 9 ? "text-3xl font-bold text-white bg-purple-700 px-6 py-3 rounded-full hover:scale-105 duration-500" : "hidden"}`}>Show All Products</button>
        </>
    );
};

export default AllProducts;