import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";


const Android = () => {

    const [products, setProducts] = useState([]);
    const allProducts = useLoaderData();

    useEffect(()=>{
        const onlyLaptop = allProducts.filter(product => product.category === "Android")
        setProducts(onlyLaptop)
    },[allProducts])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
    );
};

export default Android;