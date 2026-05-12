import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css"

function HeaderComponent() {
    return (
        <div className="container">
            <header className="header">
                <ul className="nav-list">
                    <li ><NavLink className="link" to="/">Home</NavLink> </li>
                    <li ><NavLink className="link" to="/notes">Notes</NavLink> </li>
                </ul>

            </header>
        </div>

    )
}

export default HeaderComponent;