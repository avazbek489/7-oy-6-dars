import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../axios";
import { add } from "../redux/cartSlice";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct
      .get(`products/${id}`)
      .then((response) => {
        if (response.status == 200) {
          const productData = response.data?.data;
          setProduct(productData);
          setSelectedColor(productData.attributes.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleColorSelect(color) {
    setSelectedColor(color);
  }

  function handleAddToBag() {    
    dispatch(
      add({
        image: product.attributes.image,
        company: product.attributes.company,
        title: product.attributes.title,
        price: product.attributes.price,
        color: selectedColor,
        quantity: amount,
      })
    );
  }

  return (
    <article className="mb-10 mt-12 container mx-auto px-4">
      {product ? (
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <img
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
            src={product.attributes.image}
            alt=""
          />
          <div className="w-full md:w-2/3">
            <h1 className="capitalize text-3xl font-bold">
              {product.attributes.title}
            </h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {product.attributes.company}
            </h4>
            <h3 className="mt-3 text-xl">${(product.attributes.price / 100).toFixed(2)}</h3>
            <p className="leading-8 mt-6 w-[515px]">
              {product.attributes.description}
            </p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Colors
              </h4>
              <div className="flex items-center gap-3 mt-2">
                {product.attributes.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                      selectedColor == color ? "border-black" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></span>
                ))}
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-2">
              <label
                htmlFor="amount"
                className="text-md font-medium -tracking-wider capitalize"
              >
                Amount
              </label>
              <select
                id="amount"
                className="select focus:outline-none select-primary w-full max-w-xs"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              >
                {[...Array(20)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn btn-secondary hover:bg-blue-950 border-none mt-8 text-slate-300 btn-md bg-blue-900"
              onClick={handleAddToBag}
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      )}
    </article>
  );
}

export default Details;
