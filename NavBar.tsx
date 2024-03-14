import {NavLink} from "react-router-dom";
import React from 'react';



export function NavBar() {

    return (
        <nav className="navbar-container">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        );
}
