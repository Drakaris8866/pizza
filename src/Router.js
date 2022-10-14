import React from 'react';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const MyComponent = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
};

export default MyComponent;
