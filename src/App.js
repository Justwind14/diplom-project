import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Catalog from "./components/pages/Catalog";
import "./styles/style.scss"
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import Cart from "./components/pages/Cart";
import Registration from "./components/pages/Registration";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/UI/subscribtion/Subscribe";
import Product from "./components/pages/Product";

function App() {

  return (
      <BrowserRouter className="App">
          <div className="wrapper">
              <Header/>
              <Routes>
                  <Route path="/catalog" element={<Catalog/>}/>
                  <Route path="/mainpage" element={<MainPage/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/product" element={<Product/>}/>
                  <Route path="/registration" element={<Registration/>}/>
              </Routes>
              <Subscribe/>
              <Footer/>
          </div>
      </BrowserRouter>
);
}

export default App;
