import { useState } from "react";
import { footMenu } from "./footerData";
import { footSocial } from "./footerData";
import React from "react";


const Footer = () => {  
    const [active, setActive] = useState(0);
    return (
        <footer className="bg-black text-white py-8 pt-10 mt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                    <p className="text-lg font-bold mb-2">Tech-Shop</p>
                    <p className="text-gray-400">subscribe to our Email alerts to receive  <br></br>early discounts offer, and new products<br></br> info.</p>
                    <input type="text" placeholder="Enter your email*" className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 mt-4 cursor-pointer" />
                    <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded mt-4">Subscribe</button>
                    </div>
                    {footMenu.map((item) => (
                        <div key={item.id}>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <ul>
                                {item.menu.map((menu) => (
                                    <li key={menu.id} className="mb-2">
                                        <a href={menu.path} className="text-gray-400 hover:text-white">{menu.link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-600 mt-4"></div>
                <div className="flex justify-between mt-4">
                    <div>
                    <p>2024 | All rights reserved.Built by|CHANDRABHAN AHIRWAR</p>
                    </div>
                    {footSocial.map((item) => (
                        <div key={item.id} className="flex items-center">
                            <a href={item.path} className="text-gray-400 hover:text-white mr-4">
                                {item.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;


