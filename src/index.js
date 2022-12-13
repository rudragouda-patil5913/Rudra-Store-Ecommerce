import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/productcontext";
import { FilterContextProvider } from "./Context/FilterContext";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./Context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;

root.render(
    <Auth0Provider
    domain="dev-pzg7ckf2oux0jznl.us.auth0.com"
    clientId="Rzdi59X4r0z9Ngwsn3paENL6ulJnHhuH"
    redirectUri={window.location.origin}
    >
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
        </Auth0Provider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
