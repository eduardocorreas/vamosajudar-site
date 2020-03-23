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

import { Provider } from 'react-redux'
import store from '../store'

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
