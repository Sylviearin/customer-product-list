//Base imports
import React, {useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {productsFetch} from "../store/reducers/public/products";

// Screens import
import {HomeView} from "../screens/HomeView/HomeView";
import {ProductItemView} from "../screens/ProductItemView/ProductItemView";
import {useAppDispatch} from "../hooks/useAppDispatch";



export const PublicRouter: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(productsFetch());
    }, [])

    return (

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>

                <Route path="/" element={<HomeView />} />
                <Route path="/product" element={<ProductItemView />} />
                <Route path="*" element={<HomeView />} />

            </Routes>
        </BrowserRouter>
    )
}
