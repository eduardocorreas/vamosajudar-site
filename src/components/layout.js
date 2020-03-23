/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="mt-3 text-center bg-red-500 text-white p-5 text-sm">
          <span className="font-bold">Com</span> 🧡
          {` `}
          <a className="font-bold" href="https://www.flatcodesm.com">
            Flatcode
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
