import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { IoMdStar } from "react-icons/io";
import productsData from "./productsData";
import { TbTruckDelivery } from "react-icons/tb";
import { TbBrandAdobe } from "react-icons/tb";
import { AiFillSnippets } from "react-icons/ai";
import { TbCreditCardPay } from "react-icons/tb";
import Footer from "./Footer";


const AllProject = () => {
    const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const heandler = (product) => {
    setCart([...cart, product]);
    const cart1 = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem("cart", JSON.stringify([...cart1,{...product, quantity:1} ]));
  };

    return (
        <>
        <Navbar />
        <div className="pt-20 flex p-10">
             <div className="h-full w-80 bg-gray-600 text-white p-4 rounded-lg">
                <div className="text-lg">
                <h2 className="text-2xl font-bold">Sort By</h2>
                <p className="border-b-2 mt-4"></p>
                <p className="mt-2">Latest</p>
                <p >Featured</p>
                <p>Top Rated</p>
                <p>Price(Lowest First)</p>
                <p>Price(Highest First)</p>
                </div>
                <div className="mt-6 text-lg">
                <h2 className="text-2xl font-bold">Filter By</h2>
                <p className="border-b-2 mt-4"></p>
                <p className="text-xl mt-2">Brands</p>
                <label className="mt-6">
                <input type="checkbox" name="JBL" id="" /><span className="ml-4">JBL</span>
                </label>
                <br></br>
                <label>
                <input type="checkbox" name="BoAt" id="" /><span className="ml-4">BoAt</span>
                </label>
                <br></br>
                <label>
                <input type="checkbox" name="Sony" id="" /><span className="ml-4">Sony</span>
                </label>
                <br></br>
                <h2 className="text-xl mt-2">Category</h2>
                <label>
                <input type="checkbox" name="Headphoes" id="" /><span className="ml-4">Headphoes</span>
                </label>
                <br></br>
                <label>
                <input type="checkbox" name="Earbuds" id="" /><span className="ml-4">Earbuds</span>
                </label>
                <br></br>
                <label>
                <input type="checkbox" name="Earphones" id="" /><span className="ml-4">Earphones</span>
                </label>
                <br></br>
                <label>
                <input type="checkbox" name="Neckbands" id="" /><span className="ml-4">Neckbands</span>
                </label>
                <br></br>
                
            </div>
            </div> 

            <div>
            <div className="grid grid-cols-3 gap-6  text-white ml-2 ">
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
            </div>
            </div>
        </div>
        <div className="text-center text-white p-10">
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
      <div>
        <Footer></Footer>
      </div>
        </>
    )

     
};

export default AllProject;