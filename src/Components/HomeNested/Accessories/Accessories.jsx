import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";
import NoDataFound from "../NoDataFound/NoDataFound";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
    const onlyLaptop = allProducts.filter(
      (product) => product.category === "Accessory"
    );
    setProducts(onlyLaptop);
  }, [allProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) =>
        products.length <= 0 ? (
          <NoDataFound key={product.product_id}></NoDataFound>
        ) : (
          <Card key={product.product_id} product={product}></Card>
        )
      )}
    </div>
  );
};

export default Accessories;
