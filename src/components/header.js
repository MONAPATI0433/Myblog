import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'
import {Navbar,Nav } from 'react-bootstrap'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
  <Navbar bg="dark" expand="lg" fixed="top">
  <Navbar.Brand href="#home" className="text-white">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
      <Link to="/"><Nav.Link className="text-white" href="#home">Home</Nav.Link></Link>
      <Link to="/About"><Nav.Link className="text-white" href="#link">About</Nav.Link></Link>
      <Link to="/Blog"><Nav.Link className="text-white" href="#link">Blog</Nav.Link></Link>
      <Link to="/Blog"><Nav.Link className="text-white" href="#link">Services</Nav.Link></Link>
      <Link to="/Contact"><Nav.Link className="text-white" href="#link">Contact</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Image />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
