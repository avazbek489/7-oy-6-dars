import React, { useEffect, useState } from "react";
import { getProduct } from "../axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct
      .get("products")
      .then((response) => {
        if (response.status == 200) {
          setProduct(response.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  function handleRedirect(product) {
    if (product.id) {
      navigate(`/details/${product.id}`);
    }
  }

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-14">
      {product.length > 0 &&
        product.map((product, index) => {
          return (
            <div
              onClick={() => handleRedirect(product)}
              key={index}
              className="cursor-pointer card flex flex-col items-center gap-5 p-3 w-full shadow-xl hover:shadow-2xl transition duration-300"
            >``
              <img
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                src={product.attributes.image}
                alt=""
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">
                  {product.attributes.title}
                </h2>
                <h6 className="text-gray-800">
                  ${(product.attributes.price / 100).toFixed(2)}
                </h6>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Products;
