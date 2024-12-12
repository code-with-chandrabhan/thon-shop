import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import Menu from "./Menu";
import Footer from "./Footer";

const Home = () => {

    return (
        <div>
        <Navbar />
        <Carousel />
        <Carousel1 />
        <Menu/>
        <Footer/> 
        </div>
    );
};  

export default Home;