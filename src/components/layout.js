/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"

import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          // margin: `0 auto`,
          maxWidth: 1350,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/* <footer>
        <div className="row" style={{ backgroundColor: "#343a40", fontWeight: "bold" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
              <p className="h6 bold" style={{ fontSize: "15px", fontWeight: "400" }}>
                © {new Date().getFullYear()}, Built with &
            {` `}
                <a href="http://jellyglass.com/" className="text-center text-white">jellyglass Software Pvt Ltd</a>
                <a className="text-green ml-2" href="https://www.sunlimetech.com"></a></p>
            </div>
          </div>
        </footer> */}
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
