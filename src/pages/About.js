import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap"
const AboutPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col md={10}>
        <h1>Are you lost?</h1>
    <h4>The page you were looking for couldn't be found</h4>
    <p>You can navigate through our menu or use this search bar:</p>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
        </Col>
      </Row>
    </Container>
    {/* <SEO title="Page two" /> */}
  
  </Layout>
)

export default AboutPage