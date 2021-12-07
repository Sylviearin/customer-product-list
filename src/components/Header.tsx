//Base imports
import React from 'react';
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {

    return (
        <nav id="navbar" className="navbar-wrapper">
            <ul className="navbar-links-wrapper">
                <li className="navbar-item">
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}
