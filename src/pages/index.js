import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {Container,Row,Col,Button,Card} from 'react-bootstrap'
import Img from "gatsby-image"
import Layout from "../components/layout"
// import TransitionLink from 'gatsby-plugin-transition-link'
// import Link from 'gatsby-plugin-transition-link'
// import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => {

  const data = useStaticQuery(graphql`

    query {

      placeholderImage1: file(relativePath: { eq: "card-1-1-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }


      placeholderImage2: file(relativePath: { eq: "card-2-2-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }



      placeholderImage3: file(relativePath: { eq: "card-3-3-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }



      placeholderImage4: file(relativePath: { eq: "IOCN-HORSE.png" }) {
        childImageSharp {
          fluid(maxWidth:30,quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }



      placeholderImage5: file(relativePath: { eq: "sameer-book.png" }) {
        childImageSharp {
          fluid(maxWidth:300,quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }


    }




  `)


  return (
    <Layout>
    <SEO title="Home" />
    <div style={{ 
      maxWidth: `300px`, 
      marginBottom: `1.45rem` 
      }}
      >
    </div>
    <Container>
      <Row>
        <Col md={4}>
        <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
        <h5 className="text-white" 
        style={{ 
          position: 'absolute', 
          top: '40px', 
          left: '20px' ,
          textAlign:'center'
          }}>
            AI for CXO - Redefining the future of
            <br></br>
                Leadership in the AI Era</h5>
        <Button variant="primary" size="sm" 
        style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '120px' 
          }}>
            Read post
            </Button>
        </Col>

  
        <Col md={4}>
        <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
        <h5 className="text-white" 
        style={{ 
          position: 'absolute', 
          top: '40px', 
          left: '20px' ,
          textAlign:'center'
          }}>
            AI for CXO - Redefining the future of
            <br></br>
                Leadership in the AI Era</h5>
        <Button variant="primary" size="sm" 
        style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '120px' 
          }}>
            Read post
            </Button>
        </Col>
        <Col md={4}>
        <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
        <h5 className="text-white" 
        style={{ 
          position: 'absolute', 
          top: '40px', 
          left: '20px' ,
          textAlign:'center'
          }}>
            AI for CXO - Redefining the future of
            <br></br>
                Leadership in the AI Era</h5>
        <Button variant="primary" size="sm" 
        style={{ 
          position: 'absolute', 
          top: '100px', 
          left: '120px' 
          }}>
            Read post
            </Button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
      <Col md={12} className="mt-4">
        <h2><strong>WHAT</strong>WE DO</h2>
        <h6>AIQRATE is a bespoke global AI advisory and consulting firm. We provide strategic AI advisory services and consulting offerings across multiple business segments to enable clients on their AI powered transformation & innovation journey and accentuate their decision making and business performance.</h6>
      </Col>
      </Row>
      <Row className="mt-5">
       <h4>Within the realm of AI advisory services and consulting offerings, we:</h4>
      </Row>
    </Container>
    <Container className="mb-5">
      <Row>
        <Col md={3} >
          <Card className="hover" 
          style={{ 
            height: '150px', 
            backgroundColor: '#d9dadb' 
            }} 
            >
            <i class="fa fa-users fa-2x text-center mt-3" aria-hidden="true"></i>
            <Card.Body>
              <h5 className="text-center">Demystify & Evangelize AI</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="hover" 
          style={{ 
            height: '150px', 
            backgroundColor: '#d9dadb' 
            }}
            >
            <i class="fa fa-suitcase fa-2x text-center mt-3" aria-hidden="true"></i>
            <Card.Body>
              <h5 className="text-center">Curate AI strategy for businesses
                </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="hover" 
          style={{ 
            height: '150px', 
            backgroundColor: '#d9dadb' 
            }}
            >
            <i class="fa fa-universal-access fa-2x text-center mt-3" aria-hidden="true"></i>
            <Card.Body> <h5 className="text-center">Redefine businesses  AI ecosystem acceleration
                </h5>.</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="hover" 
          style={{ 
            height: '150px', 
            backgroundColor: '#d9dadb' 
            }}
            >
            <i class="fa fa-bug fa-2x text-center mt-3" aria-hidden="true"></i>
            <Card.Body> <h5 className="text-center">Enable AI In-action effectuate AI  totality 
                </h5></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        <Container className="mb-5" >
    <h2 style={{}}><strong>WHY</strong> ENGAGE US</h2>
      <hr 
      style={{
        width:"25%",
        marginTop:'-20px',
        backgroundColor:'blue'
        }}
        >

        </hr>
      <Row style={{backgroundColor:'#f4f4f4',}}>
    
        <Col md={12} className="p-5">
          <Card>
            <Card.Body>
            <Img fluid={data.placeholderImage4.childImageSharp.fluid}  style={{
              width:"30px"
              ,height:"70px"
              }}/>
              <span 
              style={{ fontSize: "16px", 
              fontWeight: 'bold', 
              fontFamily: 'Arial,sans-serif',
              position:'relative',
              top:'-55px',
              left:'70px' 
              }}
              >
                Exhaustive and proven leadership experience of crafting AI strategy roadmaps, 
               </span>
            </Card.Body>
          </Card>
          <Card className="mt-2">
            <Card.Body>
            <Img fluid={data.placeholderImage4.childImageSharp.fluid}  
            style={{
              width:"30px",
              height:"70px"
              }}
              />
              <span style={{ 
                fontSize: "16px", 
                fontWeight: 'bold', 
                fontFamily: 'Arial,sans-serif',
                position:'relative',
                top:'-55px',
                left:'70px' 
                }}
                >
                Exhaustive and proven leadership experience of crafting AI strategy roadmaps, 
               </span>
            </Card.Body>
          </Card>
          <Card className="mt-2 mb-2">
            <Card.Body>
            <Img fluid={data.placeholderImage4.childImageSharp.fluid}  
            style={{
              width:"30px",
              height:"70px"
              }}
              />
              <span 
              style={{ 
                fontSize: "16px", 
                fontWeight: 'bold', 
                fontFamily: 'Arial,sans-serif',
                position:'relative',
                top:'-55px',
                left:'70px' 
                }}
                >
                Exhaustive and proven leadership experience of crafting AI strategy roadmaps, 
               </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
  <Row className="ml-5 mb-5">
    <Col md={7}>
      <h6 className="mt-5">The first book of its kind in its genre, a must have primer for CXOs for curating, 
    developing and executing AI strategies in their enterprises for end-to-end 
    transformative impact.  A valuable guide for executives and aspiring professionals on 
    how AI can transform businesses, with deep focus on key industries and exponential 
    technologies. The book also showcases the immense AI adoption and consumption 
    scenarios in high impact and rapidly changing industries.</h6>
    <Button variant="info" size="sm">Get The Book</Button>
    </Col>
    <Col md={3} >
    <Img fluid={data.placeholderImage5.childImageSharp.fluid} />
    </Col>
  </Row>
</Container>
  </Layout>
  )
}


export default IndexPage
