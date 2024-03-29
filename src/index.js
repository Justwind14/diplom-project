import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from "./context/Context";
import ContextForCart from "./context/ContextForCart";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <ContextForCart>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </ContextForCart>
    </Context>
);
