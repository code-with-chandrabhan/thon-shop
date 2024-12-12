import React, { useEffect, useState } from "react";
// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import AllProject from "./AllProject";


const App = () => {
  

  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />}  />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/allproject" element={<AllProject />} />
        
        
      </Routes>
        
     

    </>
  );
}

export default App;
