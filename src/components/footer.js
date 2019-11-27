import React, { Component } from "react"
import "../components/footer.css"
import { Row, Col } from "react-bootstrap"
import { MdMail } from "react-icons/md"
// import '../components/footer'

import { 
    FaLocationArrow,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram
 } from "react-icons/fa"
import { Link } from "gatsby"

export default class Footer extends Component {
  render() {
    return (
      <div className="Container-fluid footer text-light">
        <Row className="m-0 p-0">
          <Col>
            <address>
              <div className="col-md-8 m-5">
                <div className="col-md-12 foundation text-light">
                  <h3>LOGO</h3>
                  <div className="col-md-12">
                    <ul>
                      <small>
                        <li>
                          
                          <Link to="">
                            <MdMail /> consult@aiqrate.ai
                          </Link>
                        </li>
                        <li>
                          
                          <FaLocationArrow /> Bangalore | Delhi | Hyderabad
                        </li>
                        <li className="text-center">
                          Privacy Policy | Terms of Use
                        </li>
                      </small>
                    </ul>
                  </div>
                </div>
              </div>
            </address>
          </Col>
          <Col>
                <h5 className="align-self-center">QUICK LINKS</h5>
                <ul className="text-light">
                    <li className="quick-links">
                        <Link to="">AIQRATE Engagement Model  |</Link>
                        <Link to="">AIQRATIONS  |</Link>
                        <Link to="">AIQRATE Team  | </Link>
                        <Link to="">Contact Us </Link>
                    </li>
                </ul>
                <ul className="align-self-center d-flex  mt-0">
                    <li className="d-flex text-dark">
                        <Link to=""> <FaFacebook /> </Link>
                        <Link to=""> <FaTwitter /> </Link>
                        <Link to=""> <FaLinkedin /> </Link>
                        <Link to=""> <FaInstagram /> </Link>
                    </li>
                </ul>
          </Col>
        </Row>
        <Row  className="m-0 p-0" style={{background:'#419d78'}}>
        <p className="align-self-center my-0"> <small>  © {new Date().getFullYear()}, <span>AIQRATE ADVISORY & CONSULTING PRIVATE LIMITED</span></small></p>

        </Row>
      </div>
    )
  }
}
