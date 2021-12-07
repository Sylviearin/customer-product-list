import React, {useEffect} from 'react';
import {LandingNavBar} from "../components/layouts/LandingNavBar";
import { Outlet } from "react-router-dom"
import LandingFooter from "../components/layouts/LandingFooter";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {productsFetch} from "../store/reducers/public/products";

const LandingLayout: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(productsFetch());
    }, [])

    return (
        <>
            <LandingNavBar />
            <main>
                <Outlet />
            </main>
            <LandingFooter />
        </>
    );
};

export default LandingLayout;
