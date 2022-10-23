import "./scss/app.scss";
import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import Preloader from "./components/Preloader";


const Home = lazy(() => import("./components/Pages/Home"))
const Cart = lazy(() => import("./components/Pages/Cart"))
const PizzaInfo = lazy(() => import("./components/PizzaInfo"))


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
