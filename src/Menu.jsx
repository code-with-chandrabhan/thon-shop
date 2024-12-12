import { useState } from "react";
import productsData from "./productsData";
import { IoMdStar } from "react-icons/io";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbBrandAdobe } from "react-icons/tb";
import { AiFillSnippets } from "react-icons/ai";
import { TbCreditCardPay } from "react-icons/tb";

const Menu = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const heandler = (product) => {
    setCart([...cart, product]);
    const cart1 = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem("cart", JSON.stringify([...cart1,{...product, quantity:1} ]));
  };

  
 
  const filter = (category) => {
    const updatedProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <p className="text-3xl font-bold text-center text-white pt-20">
        Top Products
      </p>

      <div className="flex gap-10 justify-center text-white font-bold pt-10">
        <button
          className=" hover:bg-red-700   py-2 px-4 rounded mt-4 "
          onClick={() => setProducts(productsData)}
        >
          All
        </button>
        <button
          className=" hover:bg-red-700  py-2 px-4 rounded mt-4  "
          onClick={() => filter("Headphones")}
        >
          Headphone
        </button>
        <button
          className=" hover:bg-red-700  py-2 px-4 rounded mt-4  "
          onClick={() => filter("Earbuds")}
        >
          Earbuds
        </button>
        <button
          className=" hover:bg-red-700 py-2 px-4 rounded mt-4  "
          onClick={() => filter("Earphones")}
        >
          Earpones
        </button>
        <button
          className="hover:bg-red-700  py-2 px-4 rounded mt-4  "
          onClick={() => filter("Neckbands")}
        >
          Neckbands
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10 pt-10 text-white ">
        {products.map((product) => (
          <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-600 rounded-lg" key={product.id}>
            <figure className="px-10 pt-10 bg-gray-600">
              <img
                src={product.images[0]} 
                alt="Shoes"
                className=" h-50 w-60 "
              />
            </figure>
            <div className="card-body pt-4 p-4">
              <p className="flex text-xl text-red-600">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </p>
              <h2 className="card-title font-bold text-2xl">{product.title}</h2>
              <p className="text-lg text-gray-600">{product.info}</p>
              <p className="text-lg text-gray-600">{product.category}</p>
              <p className="border-2 border-gray-800 mt-4"></p>
              <p className="text-2xl mt-4 ">
                ${product.originalPrice}
                <span className="line-through ml-3 text-lg text-gray-600">
                  ${product.finalPrice}
                </span>
              </p>

              <div className="card-actions justify-end text-center pt-2">
                <button
                 
                  type="button"
                  className="cursor-pointer text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-20 py-2.5 text-center"
                  onClick={() => heandler(product)}
                  >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className=" w-96 border-2 h-full border-gray-600 rounded-xl text-center pt-60 text-2xl">
          <a href="AllProject"><p className="cursor-pointer hover:text-red-600 font-bold">
            Browse All
            <br></br> Products →
          </p></a>
        </div>
      </div>
      <div className="text-center text-white">
        <p className="text-3xl font-bold pt-20">Our Advantages</p>
        <div className="flex justify-between text-xl text-white font-bold pt-10">
          <div>
            <TbTruckDelivery className="text-5xl text-red-600" />
            <p>
              Express Delivery <br></br>
              <span className="text-lg text-gray-600">Ships In 24 Hours</span>
            </p>
          </div>
          <div>
            <TbBrandAdobe className="text-5xl text-red-600" />
            <p>
              Brand Warranty<br></br>
              <span className="text-lg text-gray-600">
                100% Original Products
              </span>
            </p>
          </div>
          <div>
            <AiFillSnippets className="text-5xl text-red-600" />
            <p>
              Exciting Deals<br></br>{" "}
              <span className="text-lg text-gray-600">
                On All Arepaid orders
              </span>
            </p>
          </div>
          <div>
            <TbCreditCardPay className="text-5xl text-red-600" />
            <p>
              Secure Payment<br></br>{""}
              <span className="text-lg text-gray-600">
                SSL/Secure Certificate
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
