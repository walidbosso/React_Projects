import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CartContextProvider from "./contexts/cartContext";

ReactDOM.render(
    <React.StrictMode> {/* hadi deja katji mea React install, hia w App w getElemeent */}
        <CartContextProvider> {/* hadi dial createContexte bash nqro npassiw values l gae components w mashi sefha wahda, shof cartContext */}
            <App />
        </CartContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
