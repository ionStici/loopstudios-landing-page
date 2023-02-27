import React, { useRef } from "react";
import logo from "./../images/logo.svg";
import iconClose from "./../images/icon-close.svg";
import iconOpen from "./../images/icon-hamburger.svg";
import "./Header.scss";

export const Header = function () {
    const header = useRef(null);
    const menuIcon = useRef(null);

    const toggleNav = function () {
        const body = document.querySelector("body");

        if (!header.current.classList.contains("open")) {
            header.current.classList.add("open");
            menuIcon.current.setAttribute("src", iconClose);
            body.style.overflow = "hidden";
        } else if (header.current.classList.contains("open")) {
            header.current.classList.remove("open");
            menuIcon.current.setAttribute("src", iconOpen);
            body.style.overflow = "revert";
        }
    };

    return (
        <header ref={header} className="header close">
            <nav className="header__nav">
                <img className="header__logo" src={logo} alt="Logo" />

                <div className="header__icon-btn" onClick={toggleNav}>
                    <img
                        className="header__icon-nav"
                        ref={menuIcon}
                        src={iconOpen}
                        alt=""
                    />
                </div>

                <ul className="header__ul">
                    <li className="header__li">
                        <a className="header__link" href=".">
                            About
                        </a>
                    </li>
                    <li className="header__li">
                        <a className="header__link" href=".">
                            Careers
                        </a>
                    </li>
                    <li className="header__li">
                        <a className="header__link" href=".">
                            Events
                        </a>
                    </li>
                    <li className="header__li">
                        <a className="header__link" href=".">
                            Products
                        </a>
                    </li>
                    <li className="header__li">
                        <a className="header__link" href=".">
                            Support
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="header__h1-wrapper">
                <h1 className="h1">Immersive experiences that deliver</h1>
            </div>
        </header>
    );
};
