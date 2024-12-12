import { useEffect, useState } from "react";
import React from "react";
import { MdDelete } from "react-icons/md";
import Navbar from "./Navbar";
import { Table } from "flowbite-react";
import Footer from "./Footer";



const Cart = () => {
    const [cart, setCart] = useState([]);
    const addtoCart = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cartitems();
    }
    const addform = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1
                    > 0 ? item.quantity - 1 : 1
                    
                 };  

            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cartitems();
    }
   const totalAmount = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.finalPrice * item.quantity;
        
        });
        return total;
    }

    const cartitems =() =>{
        const cart = JSON.parse(localStorage.getItem("cart"));
        setCart(cart);

    }
    useEffect(() => {
        cartitems();
    }, []);
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cartitems();
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

   const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
   }
 

    

    return (
    
    
        
        <div>
        <Navbar />
        
                <p className="pt-20 text-3xl font-bold text-center border-b-2 text-white">Cart</p>
           
            <Table hoverable={true} className="w-1/2 h-full mt-2 ">
                
                <Table.Body className="">
                {cart.map((item) => (
                    <Table.Row key={item.id}>
                    <Table.Cell className="w-1/2">
                    <div className="flex border-b-2 border-gray-500">
                    <img src={item.images[0]} alt={item.images[0]} className="h-40 w-50" />
                    <div className="flex flex-col">
                    <span className="text-lg ml-2">{item.title} {item.info} <button className="ml-4 mt-4" onClick={() => removeItem(item.id)}><MdDelete  className=""/></button></span>

                    <p className=" text-xl mt-6 ml-2">${item.finalPrice}<span className="ml-2 text-lg line-through">${item.originalPrice}</span></p>
                    <div className="ml-2 mt-2 ">
                    <button onClick={() => addform(item.id)} className="text-2xl bg-gray-600 text-white px-4 rounded">-</button>
                    <span className="  px-3 py-1 text-xl ">{item.quantity}</span>
                    <button onClick={() => addtoCart(item.id)} className="text-2xl bg-gray-600 text-white px-3 rounded">+</button>
                    </div>
                    </div>
                    </div>
                   
                    </Table.Cell>
                    </Table.Row>
                    
                ))}
                
                </Table.Body>
                
            </Table>
                
        
                <div>
                   {cart.map((item) => (
                     <div  key={item.id} className="absolute right-0 top-20 mr-80 text-xl bg-white mt-14 h-1/8 w-1/4 text-gray-600 p-4 rounded-lg">
                    
                    
                    <p className="text-2xl">Order Summary ({item.quantity}items) </p>
                    <p className="mt-4 ">Original Price<span className="ml-40">${item.originalPrice}</span></p>
                    <p className="mt-2">Discount<span className="absolute right-0 mr-10 text-red-600">${item.finalPrice}</span></p>
                    <p className="mt-2">Delivery<span className="absolute right-0 mr-12 text-red-600">free</span></p>
                    <p className="border-b-2 border-gray-600 mt-6"></p>
                    <p className="mt-6">Total Price<span className="absolute right-0 mr-12">${totalAmount()}</span></p>
                    <button onClick={clearCart} className="mt-6 cursor-pointer text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm  py-2.5 text-center w-full">Checkout</button>
                    </div> 
                ))}
            
                </div>
                
                
               <div className="mt-96"> <Footer/></div> 
        </div>
      
      
       
        
        
    
    );
};

export default Cart;