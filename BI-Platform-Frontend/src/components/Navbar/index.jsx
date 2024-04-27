import React from "react";
import { Link } from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/student">
                        Student
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
    );
};

export default Navbar;
