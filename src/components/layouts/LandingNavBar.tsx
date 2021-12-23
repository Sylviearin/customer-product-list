//Base imports
import { Button } from '@mui/material';
import React from 'react';
import {NavLink} from "react-router-dom";


export const LandingNavBar: React.FC = () => {


    return (
        <header>
            <nav id="landing-navbar">
                <Button variant="main" className="ml-20 mr-20">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </Button>
                <Button variant="main">
                    <NavLink to="/about" end>
                        About
                    </NavLink>
                </Button>
            </nav>
        </header>
    )
}
