import {Header} from "./components";

import "./scss/app.scss";
import React from "react";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import {Route, Routes} from "react-router-dom";

export const Context = React.createContext();

function App() {

    const [searchInputValue, setSearchInputValue] = React.useState('')

    return (
        <Context.Provider value={[searchInputValue, setSearchInputValue]}>
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
