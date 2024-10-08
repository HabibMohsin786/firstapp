import { useEffect, useState } from "react";
import Card from "./componants/Card";
import CardDetail from "./componants/CardDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./componants/Header";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SingIUp";


function App() {
  return (
    <>

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/signIN' element ={<SignIn/>} />
          <Route path='/signUp' element ={<SignUp/>} />
          <Route path='/products' element ={<Products/>} />
          <Route path='/products/:id' element ={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
