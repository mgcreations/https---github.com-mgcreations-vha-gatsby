import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBraille,
  faChartBar,
  faChartPie, faCogs, faCoins, faFileContract,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"
import { faUniregistry } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={"hero-box"}>
      <div className={"hero-overlay"}>
      <div className={"hero-text"}>
      <h1>Quality accounting, tax services, bookkeeping, and business services at an affordable cost and with the utmost integrity.</h1>
    <p>VHA Accounting Solutions' primary focus is forging healthy client relationships. We posess unsurpassed expertise, integrated with the capacity to offer our valued clients an unparalleled customer experience.</p>
    <p>Professional applications of decisive strategic advice affords us the privledge to provide our clients with the best possible professional accounting solutions.</p>
      </div>
      </div>
    
    </div>
    <div className={"services"}>
    <div className={"service-box"}>
    <FontAwesomeIcon className={"service-icon"} icon={faChartPie} size="4x" />
    <h3>Accounting Services</h3>
      </div>
      
      <div className={"service-box"}>
      <FontAwesomeIcon className={"service-icon"} icon={faCoins} size="4x" />
        <h3>Tax Services</h3>
      </div>
      <div className={"service-box"}>
      <FontAwesomeIcon className={"service-icon"} icon={faFileContract} size="4x" />
        <h3>Income Tax Returns</h3>
      </div>
      <div className={"service-box"}>
      <FontAwesomeIcon className={"service-icon"} icon={faUniregistry} size="4x" />
        <h3>Statutory CIPC Registration</h3>
      </div>
    </div>
    <div className={"statement-box"}>
    <h2>
    We are committed to assisting our clients in achieving their financial and growth objectives. 
    </h2>
    <h4>Our ethical business practice and commitment to our clients solidifies our position as the leaders in the accounting industry. <br/> You are paramount, your financial health is our priority. <br/><span className={"bold-text"}>How can we assist you?</span></h4>
    </div>
    <p>
      We take time to understand the nature of your business, environment and the challenges that your business face with. We also understand that in South Africa we face changing times and we are proud to be a BEE level 1 contributor.
Our initial consultant with you is free of charge as we see this as a "value add service."
    </p>
    
    <div className={"focus-box"}>
    <h4><FontAwesomeIcon icon={faBraille}/> Mission</h4>
    <p>To be the best in our field of expertise and provide the client with a great overall service!</p>
    <h4><FontAwesomeIcon icon={faCogs}/> Skills</h4>
    <p>Our skill base not only includes intellectual knowledge but the use of the latest Tax and Accounting software.</p>
    <h4><FontAwesomeIcon icon={faChartBar}/> Clients</h4>
    <p>Satisfied clients thanks to our experience.</p>
    </div>
    
  </Layout>
)

export default IndexPage
