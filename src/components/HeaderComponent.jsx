import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css"
import miIcono from "../assets/post-it.png";

function HeaderComponent() {
    return (
        <div className="container">
            <header className="header">
                <img src={miIcono} alt=""  width={50} height={50} />
                <ul className="nav-list">
                    <li ><NavLink className="link" to="/">Home</NavLink> </li>
                    <li ><NavLink className="link" to="/notes">Notes</NavLink> </li>
                </ul>

            </header>
        </div>

    )
}

export default HeaderComponent;