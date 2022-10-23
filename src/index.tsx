import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

const rootElem = document.getElementById('root')
if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}


