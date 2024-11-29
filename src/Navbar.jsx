import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaChild } from "react-icons/fa";
import IMG11 from './images/boat110-1.png'






const Navbar = () => {
    return (
       
      <div>
        <div className=" flex justify-between p-4">
            <a href="#" className="text-3xl  text-white font-bold">Tech-shop</a>
           
        <div className="flex gap-6 text-white "> 
        <input type="text" placeholder=""className="w-96  rounded-full bg-black"/>
        <CiSearch  className="text-3xl mr-1 absolute right-32 top-4 "/>
        <FiShoppingCart className="text-3xl mr-1" />
        <FaChild className="text-3xl" />
        </div>
        </div>

      <img src={IMG11} alt="" className="w-96 h-96"  />


      </div>
      
        
    );
}

export default Navbar;