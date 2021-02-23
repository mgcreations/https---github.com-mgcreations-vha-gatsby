import React from "react"
import Link from "gatsby-link"

import "./header.scss"

const Menu = () => (
    <div className={"mobile-menu"}>
        <label htmlFor="show-menu" className="show-menu">
            <span>Menu</span>
            <div className="lines"></div>
        </label>
        <input type="checkbox" id="show-menu" />
        <ul id="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/blog">Articles</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
)

export default Menu