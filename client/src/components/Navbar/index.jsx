import React from "react";
import { Link } from "react-router-dom";
// import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from "./NavbarElements";
import "./Navbar.css"

const Navbar = () => {
    return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/student"> Student </Link>
                    </li>
                    <li>
                        <Link to="/finance"> Finance </Link>
                    </li>
                    <li>
                        <Link to="/todolist"> TodoList </Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Navbar;
