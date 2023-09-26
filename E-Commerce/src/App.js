import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getCategories } from "./fetcher";

import ProductDetail from "./components/productDetail";
import Basket from "./components/basket";
import Checkout from "./components/checkout";
import Category from "./components/category";
import Home from "./components/home";
import OrderConfirmation from "./components/orderconfirmation";
import Layout from "./components/layout";
import SearchResults from "./components/searchResults";

function App() {
    const [categories, setCategories] = useState({
        errorMessage: "",
        data: [],
    });

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        };
        fetchData();
    }, []);//katfaeal marra wahda w sf f lowel, kan initialisiw categories

    return (//ROUTES
        <> {/* bash teqdar eeml bzf tags */}
            <BrowserRouter> {/* khas t installer react router, katbda b browserrouter f routes f chaque route kad qol ha element li ghay t afficha la emlna had path*/}
                <Routes>
                    <Route
                        path="/"
                        element={ // bash l header footer etc ybano dima paths /, w ayyi haja akhra ghatban fin kayen Outlet 
                            <Layout
                                categories={categories}
                            />
                        }
                    >
                        <Route index element={<Home />} />{/* khass ykono inside tag d layout */}
                        <Route path="basket" element={<Basket />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="orderconfirmation" element={<OrderConfirmation />} />
                        <Route path="search" element={<SearchResults /> } />
                        <Route
                            path="categories/:categoryId" /* hayda kan passiw var */
                            element={<Category />}
                        />
                        <Route
                            path="products/:productId"
                            element={<ProductDetail />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
