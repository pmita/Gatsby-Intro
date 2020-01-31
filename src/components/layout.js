

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"

import Navbar from './Globals/Navbar.js'; //We are importing the navbar in the layout section so that it is reusable 
//by my gatsby application. Then I can simply introduce the <Navbar /> component to within the return fragment

/*We are defining the main layout of our website on top of which (in fact it's more like within) each of our
components will be positioned. For now we are just initiating the Layout and simply return all the children 
elements (future components) as a fragement. This is still react and we need to return something.*/
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
