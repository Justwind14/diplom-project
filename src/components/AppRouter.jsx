import React from 'react';
import {Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Registration from "./pages/Registration";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/mainpage" element={<MainPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
    );
};

export default AppRouter;