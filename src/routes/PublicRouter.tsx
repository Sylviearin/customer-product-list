//Base imports
import React, {useEffect} from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import {productsFetch} from "../store/reducers/public/products";
import {useDispatch} from "react-redux";

// Screens import
import {Home} from "../screens/Home";
import {ItemDescription} from "../screens/ItemDescription";



export const PublicRouter: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsFetch());
    }, [])

    return (

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ItemDescription />} />

                <Route path="**"><Navigate to="/"/></Route>

            </Routes>
        </BrowserRouter>
    )
}
