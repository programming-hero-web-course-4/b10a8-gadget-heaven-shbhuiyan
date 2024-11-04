import { useEffect, useState } from "react";
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

  return <div>this is details {detail.product_id}</div>;
};

export default Details;
