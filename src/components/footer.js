import React from "react"

import "./layout.scss"
import "./footer.scss"

import goldPartner from '../images/xero-Gold-partner-badge.png';
import saicaLogo from '../images/saica.jpg';
import saitLogo from '../images/sait.jpg';
import accfinLogo from '../images/accfin.jpg';
import sageLogo from '../images/sage.png';
import casewareLogo from '../images/caseware.jpg';

const Footer = () => (
    <footer className={"footer"}>
        <hr/>
        <div className={"footer-container "}>
            <div>
                <h3>Registration and Partners</h3>
                <div className={"logo-container"}>
                <img src={goldPartner} alt="Gold Partner" />
                <img src={saicaLogo} alt="SAICA Logo" />
                <img src={saitLogo} alt="SAIT Logo" />
                </div>
                
            
            </div>
            <div>
                <h3>Software Partners</h3>
                <div className={"logo-container"}>
                <img src={accfinLogo} alt="ACCFIN Logo" />
                <img src={sageLogo} alt="Sage Logo" />
                <img src={casewareLogo} alt="Caseware Logo" />
                </div>

            </div>
        </div>
        <hr/>
        <div className={"footnote"}>
        © {new Date().getFullYear()}, Developed and Designed by
          {` `}
          <a href="https://www.mgcreations.co.za">MG Creations</a>
        </div>
    </footer>
)

export default Footer
