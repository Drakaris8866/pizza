import "./scss/app.scss";
import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import Preloader from "./components/Preloader";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import PizzaInfo from "./components/PizzaInfo";

// const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./components/Pages/Home"))
// const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ "./components/Pages/Cart"))
// const PizzaInfo = lazy(() => import(/* webpackChunkName: "PizzaInfo" */ "./components/PizzaInfo"))


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/pizza/:id" element={<PizzaInfo/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
