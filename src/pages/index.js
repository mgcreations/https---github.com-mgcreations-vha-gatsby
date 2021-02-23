import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Quality accounting, tax services, bookkeeping, and business services at an affordable cost and with the utmost integrity.</h1>
    <p>VHA Accounting Solutions' primary focus is forging healthy client relationships. We posess unsurpassed expertise, integrated with the capacity to offer our valued clients an unparalleled customer experience.</p>
    <p>Professional applications of decisive strategic advice affords us the privledge to provide our clients with the best possible professional accounting solutions.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
