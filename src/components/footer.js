import React from "react"

import "./layout.scss"
import "./footer.scss"

const Footer = () => (
    <footer className={"footer"}>
        © {new Date().getFullYear()}, Developed by
          {` `}
          <a href="https://www.mgcreations.co.za">MG Creations</a>
    </footer>
)

export default Footer
