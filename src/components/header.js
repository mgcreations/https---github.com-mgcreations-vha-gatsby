import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"
import "./header.scss"

import Logo from '../images/logo.png';

const Header = ({ siteTitle }) => (
  <header className={"header"} >
    <h1 className={"logo"}>
      <Link 
        to="/"
      >
        <img src={Logo} alt="VHA Accounting" />
      </Link>
    </h1>
    <nav>
      <Menu />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
