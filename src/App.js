import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./companents/Home/Home";
import Header from "./companents/Header/Header";
import Footer from "./companents/Footer/Footer";
import ShopDetails from "./companents/Details/shopDetails";
import Basket from "./companents/Basket/Basket";
import Categories from "./companents/card/Categories";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="/shop-details/:id" element={< ShopDetails/>}/>
                <Route path="/shop-basket" element={<Basket/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/shop-category/:idCategory" element={<Categories/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
