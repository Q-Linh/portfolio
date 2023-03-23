import React from "react";
import "./Header.css";
import NavBar from "./NavBar";
import logo from "../../assets/images/programming.svg";

function Header() {
    return (
        <header className="header">
            <div className="header-title">
                <img src={logo} className='logo' alt='logo' />
                <h1 className="main-heading">Personal Portfolio</h1>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;