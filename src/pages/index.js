import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
// import image from '../components/image'
// import {Container,Row,Col,Button,Card} from 'react-bootstrap'
import "./main.css"
import {
  Container,
  Card,
  CardColumns,
  Button,
  Col,
  Row,
  CardGroup,
  Form
} from "react-bootstrap"
import {
  FaHandshake,
  FaBriefcase,
  FaRegLightbulb,
  FaGlobe,
  FaTools,
  FaUsersCog,
  FaSuitcase,
  FaUniversalAccess,
  FaGalacticRepublic,
  FaSync,
  FaUserFriends,
} from "react-icons/fa"
import { IoMdRibbon } from "react-icons/io"
import { TiGroup } from "react-icons/ti"
import { GiTeamIdea, GiChessKnight } from "react-icons/gi"
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

      placeholderImage1: file(relativePath: { eq: "sameer-book.png" }) {
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

    }
  `)


  return (
    <Layout>
    <SEO title="Home" />
    <div style={{ 
      maxWidth: `100%`, 
      marginBottom: `1.45rem` 
      }}
      >
    </div>
 
    <Container className="text-center">
      <CardColumns bg="light">
        <Card>
          <Card.Body>
            <Card.Text>
              AI for CXO - Redefining the future of Leadership 
            </Card.Text>
            <Button variant="primary">Read Post</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Text>The New Age Enterprise - Enabled by AI</Card.Text>
            <Button variant="primary" className="justify-content-center">
              Read Post
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
              Mapping the AI Transformation Journey in your Organization.
            </Card.Text>
            <Button variant="primary">Read Post</Button>
          </Card.Body>
        </Card>
      </CardColumns>

      <h2 className="align-self-center">
        {/* what-we-do bottom-border */}
        <span>
          <strong>What </strong>
        </span>
        We Do
      </h2>
      <p>
        AIQRATE is a bespoke global AI advisory and consulting firm. We provide
        strategic AI advisory services and consulting offerings across multiple
        business segments to enable clients on their AI powered transformation &
        innovation journey and accentuate their decision making and business
        performance.
      </p>
      <Row className="d-flex">
        <Col lg={4}>
        <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
        </Col>
        <Col lg={8}>
          <ul>
            <li style={{ display: "flex", textAlign: "justify" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <FaHandshake />
              </div>
              <div className="para-icon">
                <span className="text">
                  Partner with you to curate your AI strategy in alignment with
                  your business strategy you
                </span>
              </div>
            </li>

            <li style={{ display: "flex", textAlign: "justify" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <FaBriefcase />
              </div>
              <div className="para-icon">
                <span className="text">
                  Understand your strategic business transformation and
                  innovation initiatives deeply so we can create tailored AI
                  advisory and consulting engagements that are just right for
                  you
                </span>
              </div>
            </li>

            <li style={{ display: "flex", textAlign: "justify" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <FaRegLightbulb />
              </div>
              <div className="para-icon">
                <span className="text">
                  Align the AI strategy with CXOs, business function heads to
                  enable AI@scale adoption pervasively
                </span>
              </div>
            </li>

            <li style={{ display: "flex", textAlign: "justify" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <FaGlobe />
              </div>
              <div className="para-icon">
                <span className="text">
                  Invest in building global AI ecosystem: AI startups, data,
                  talent, investment, academic partners to provide holistic
                  advisory and consulting services to our clients in totality
                </span>
              </div>
            </li>

            <li style={{ display: "flex", textAlign: "justify" }}>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <FaTools />
              </div>
              <div className="para-icon">
                <span className="text">
                  Design top of the line AI tools, frameworks & methodologies
                  wrapped in the form of deployable artifacts which are
                  hand-crafted for a client’s specific requirements
                </span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>

      <h3 className="align-self-center">
        Within the realm of AI advisory services and consulting offerings, we:
      </h3>

      <Row>
        <CardGroup className="w-100">
          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaUsersCog className="b-fa" />
              </Card.Title>
              <Card.Text>Demystify & Evangelize AI</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaSuitcase className="b-fa" />
              </Card.Title>
              <Card.Text>Curate AI strategy for businesses</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaUniversalAccess className="b-fa" />
              </Card.Title>
              <Card.Text>
                Redefine businesses– AI ecosystem acceleration
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Title>
              <FaGalacticRepublic className="b-fa" />
            </Card.Title>
            <Card.Body className="card-para">
              <Card.Text>
                Enable AI In-action – effectuate AI interventions in totality
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row className="border">
        <p className="card-para">
          " Several enterprises look to use AI to optimize decision making. AI
          can unlock opportunities that otherwise overlooked. "
        </p>
      </Row>

      <h2 className="align-self-center">THE AIQRATE ADVANTAGE</h2>

      <Row>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <IoMdRibbon className="b-fa" /> <br />
                FIRST IN ITS GENRE
              </Card.Title>
              <Card.Text>
                Bespoke AI strategy advisory and consulting firm with path
                breaking services and offerings and unique client engagement
                models
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <TiGroup className="b-fa" /> <br />
                REPERTOIRE OF INSIGHTS
              </Card.Title>
              <Card.Text>
                Proven global AI advisory and consulting experience across
                business segments covering Enterprises, GCCs, Start-ups, SMBs,
                VC/PE firms, Academic Institutions and Industry associations
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaRegLightbulb className="b-fa" /> <br />
                REPERTOIRE OF INSIGHTS
              </Card.Title>
              <Card.Text>
                Our proprietary AI playbooks, primers, frameworks,
                methodologies, toolkits enable us advice CXOs and senior leaders
                with artisanal insights and recommendations
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaSync className="b-fa" /> <br />
                END TO END COVERAGE
              </Card.Title>
              <Card.Text>
                Holistic coverage of AI advisory and consulting from AI maturity
                assessment, CoE construct & interventions, partner selection to
                AI business value output
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaUserFriends className="b-fa" /> <br />
                ENHANCED EXTERNAL ORIENTATION
              </Card.Title>
              <Card.Text>
                Our team’s first-hand and deep experience of understanding
                global AI market landscape, ecosystem, topical trends, scenarios
                and approaches
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <GiTeamIdea className="b-fa" /> <br />
                AMPLIFIED THOUGHT LEADERSHIP
              </Card.Title>
              <Card.Text>
                Our demonstrated body of work in AI is featured and covered via
                published books, press, global media publications, social media,
                industry forums
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>

      <h2 className="align-self-center">
        <span>
          <strong>WHY </strong>
        </span>
        ENGAGE US
      </h2>

      <Row className="engage-row">
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Exhaustive and proven leadership experience of crafting AI
                  strategy roadmaps, maturity assessments, readiness frameworks
                  and methodologies for several Fortune 500 clients, GCCs,
                  Indian enterprises, SMBs, New age digital enterprises coupled
                  with defining and showcasing broad exhibit plan for making the
                  enterprise AI ready for CXOs
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Comprehensive, ready to deploy AI CoE and CoC playbooks and
                  toolkits covering strategic and operational impact scenarios
                  and approaches on unleashing transformation, innovation and
                  disruption within enterprises and GCCs
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Incisive consulting coverage on AI led strategic interventions
                  for C-suite stakeholders with redefining business functions
                  artifacts​
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Global AI ecosystem compendium on startups, niche & boutique
                  ventures benchmarked on AIQRATE “Glow Curve” assessment
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Bespoke immersive and engaging AI master class sessions and
                  evangelization workshops rendered with wide array of AI use
                  cases and ensuing business impact
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Broad and expansive repository of AIQRATE proprietary advisory
                  and consulting reports, analysis, insights, toolkits,
                  frameworks, assessments, methodologies, playbooks, toolkits,
                  templates and compendiums
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className="py-5">
        <Col lg={8}>
          <h2 className="align-self-center text-left">
            AI & ANALYTICS
            <span>
              <p>Accelerating Business Decisions (Wiley CXO Series)</p>
            </span>
          </h2>
          <p className="text-primary">
            We are ushering into an AI era – an Algorithm driven economy where
            algorithms sit at the core of every business model, and in the
            organizational DNA.
          </p>
          <p>
            The first book of its kind in its genre, a must have primer for CXOs
            for curating, developing and executing AI strategies in their
            enterprises for end-to-end transformative impact. A valuable guide
            for executives and aspiring professionals on how AI can transform
            businesses, with deep focus on key industries and exponential
            technologies. The book also showcases the immense AI adoption and
            consumption scenarios in high impact and rapidly changing
            industries.
          </p>
          <Button variant="primary">Get The Book</Button>
        </Col>
        <Col lg={4}>
        <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
        </Col>
      </Row>
    </Container>
    <div className="container-fluid " style={{ background: "#2d3047" }}>
      <div className="container">
        <Row className="justify-content-center text-white">
          <h2 className="align-self-center">
            Sign up for our Newsletter AIQRATE
          </h2>
          <p>
            <small>
              Stay ahead in a rapidly changing world led by AI. Subscribe to
              AIQRATE AIism, our incisive take at the AI strategy driving
              transformation, innovation and disruption.
            </small>
          </p>

          <Form className="w-50">
            <Form.Group controlId="formUserName">
              <Form.Control type="text" placeholder="Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Control type="text" placeholder="Company" />
            </Form.Group>
            <Form.Group controlId="formJobTitle">
              <Form.Control type="text" placeholder="Job Title" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        </div>
        </div>
  </Layout>
  )
}


export default IndexPage
