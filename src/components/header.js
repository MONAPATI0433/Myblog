import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'
import {Navbar,Nav,NavDropdown,Container, Breadcrumb, } from 'react-bootstrap'
import './header.css'
import { MdMail } from "react-icons/md"

const Header = ({ siteTitle }) => (
  <header>
<Container>
  <Navbar bg="dark" expand="lg" fixed="top">
  <Navbar.Brand href="#home" className="text-white">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-4">
      <Link to="/"><Nav.Link className="text-white" href="#home">ADVISORY</Nav.Link></Link>
      <Link to="/About"><Nav.Link className="text-white" href="#link">CONSULTING</Nav.Link></Link>
      <Link to="/Blog"><Nav.Link className="text-white" href="#link">AIQRATIONS</Nav.Link></Link>
      <Nav.Link className="text-white" href="#link"></Nav.Link>
      <NavDropdown title="ABOUT US" id="basic-nav-dropdown" style={{color:'white'}}>
      <Link to="/Approach"><NavDropdown.Item href="#action/3.1">Our Approach</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.2">AIQRATE Team</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.3">Why We Exist</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.3">In The News</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item></Link>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>

<Container style={{marginTop:"50px",marginBottom:"-18px"}}>
    <Breadcrumb>
    <strong  className="mt-1" style={{fontSize:'15px'}}>AI Strategy:&nbsp;</strong><Breadcrumb.Item active href="#"  className="mt-1">Transformation |</Breadcrumb.Item>
  <Breadcrumb.Item active  className="mt-1" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Innovation |
  </Breadcrumb.Item>
  <Breadcrumb.Item active className="mt-1">Disruption</Breadcrumb.Item>
</Breadcrumb>
    </Container>
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
