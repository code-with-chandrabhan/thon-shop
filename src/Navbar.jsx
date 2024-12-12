import { useState, useEffect } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Dropdown } from "flowbite-react";
import productsData from "./productsData";

const Navbar = () => {
  
  const [products, setProducts] = useState(productsData);
  const [items, setItems] = useState({
    quantity: 0,
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setItems({
        quantity: cart.reduce((acc, item) => acc + item.quantity, 0),
      });
    }else{
      setItems({
        quantity: 0
      });
    }

    })

 const handalsearch = (e) => {
    const value = e.target.value;
    const filtered = products.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(filtered);
 }

  return (
    <div className="text-white fixed top-0 w-full z-50">
      <div className=" flex justify-between p-4">
        <a href="/" className="text-3xl  text-white font-bold">
          Tech-shop
        </a>

        <div className="flex gap-6 text-white relative ">
          <input
            type="text"
            placeholder=""
            className="w-96  rounded-full bg-gray-600 border-2 border-gray-500 cursor-pointer"  onChange={handalsearch}
          />
           <CiSearch className="text-3xl mr-8 absolute right-32  top-1 cursor-pointer " /> 
          <a href="Cart"><FiShoppingCart className="text-3xl mr-4 hover:text-red-600 cursor-pointer" />
          <button className="text-lg mr-4 hover:text-red-600 cursor-pointer absolute bottom-6 right-20">{items.quantity}</button>
          </a>
          <Dropdown className="border-none bg-gray-600 cursor-pointer">
            <Dropdown.Header className="gap-8">
              <a href="Login"><p className="text-lg font-bold text-white cursor-pointer hover:text-red-600">
                Login
              </p></a>
              <br></br>
              <a href="Signup"><span className="text-lg font-bold text-white cursor-pointer hover:text-red-600">
                Sign up
              </span></a>
            </Dropdown.Header>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
