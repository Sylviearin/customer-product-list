//Base imports
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// Screens import
import HomeView from "../screens/HomeView";
import LandingLayout from "../layouts/LandingLayout";
import AboutView from "../screens/AboutView";
import ProductItemView from "../screens/ProductItemView";

export const PublicRouter: React.FC = () => {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LandingLayout />}>
                    <Route
                        index
                        element={<HomeView />}
                    />
                    <Route
                        path="product"
                        element={<ProductItemView />}
                    />
                    <Route
                        path="about"
                        element={<AboutView />}
                    />
                    <Route
                        path="*"
                        element={<HomeView />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

