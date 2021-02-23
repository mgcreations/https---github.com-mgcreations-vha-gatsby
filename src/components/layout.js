/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

import Hero from "./hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Hero />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main className="main">{children}</main>
        <footer
          style={{
            marginTop: `1rem`,
          }}
        >
          © {new Date().getFullYear()}, Developed by
          {` `}
          <a href="https://www.mgcreations.co.za">MG Creations</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
