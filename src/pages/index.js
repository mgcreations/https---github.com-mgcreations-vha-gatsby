import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

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
      <div>
        <h3>Accounting Services</h3>
      </div>
      <div>
        <h3>Tax Services</h3>
      </div>
      <div>
        <h3>Income Tax Returns</h3>
      </div>
      <div>
        <h3>Statutory CIPC Registration</h3>
      </div>
    </div>
    <p>
      We take time to understand the nature of your business, environment and the challenges that your business face with. We also understand that in South Africa we face changing times and we are proud to be a BEE level 1 contributor.
Our initial consultant with you is free of charge as we see this as a "value add service."
    </p>
    
    
  </Layout>
)

export default IndexPage
