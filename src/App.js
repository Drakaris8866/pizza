import {Header} from "./components";

import "./scss/app.scss";
import React from "react";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import {Route, Routes} from "react-router-dom";
import PizzaInfo from "./components/PizzaInfo";


function App() {

    return (
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/pizza/:id" element={<PizzaInfo/>}/>
                </Routes>
            </div>
    );
}

export default App;
