import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from "./context/Context";
import ContextForCart from "./context/ContextForCart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextForCart>
        <Context>
            <App/>
        </Context>
    </ContextForCart>
);
