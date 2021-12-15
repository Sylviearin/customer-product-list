import React from 'react';
import {LandingNavBar} from "../components/layouts/LandingNavBar";
import { Outlet } from "react-router-dom"
import LandingFooter from "../components/layouts/LandingFooter";


const LandingLayout: React.FC = () => {


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
