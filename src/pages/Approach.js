    import React from "react"
    import Layout from "../components/layout"
    import { Container } from "react-bootstrap"
    import Img from "gatsby-image"
    import { useStaticQuery, graphql } from "gatsby"
    const ApproachPage = () => {

        const data = useStaticQuery(graphql`
        query {
          Image: file(relativePath: { eq: "IOCN-HORSE.png" }) {
            childImageSharp {
              fluid(maxWidth:20) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `)

        return(
            <Layout>
                <Container>
                <h4 className="mt-5 text-blue" style={{borderLeft:'5px solid blue',}}>&nbsp;Enabling clients reimagine their decision making with AI strategy in a transformation, innovation and disruption driven 
                &nbsp;world</h4>
                <p className="mt-5" style={{fontFamily:'"Open Sans", Sans-serif',color:'#777676',fontWeight:'100px',fontSize:'15px'}}>In today’s fast paced VUCA world, leaders face unprecedented challenges. They need to navigate through volatility while staying focused on strategy, 
                    business performance and culture.  <strong>Artificial Intelligence</strong> is fast becoming a game changing catalyst and a strategic differentiator and almost a panacea to 
                    solve large, complex and unresolved problems.  To be an <strong>AI powered organization,</strong> leaders not only need to have a broad understanding of <strong>AI strategy, </strong>
                    they need to know how and where to use it.  AIQRATE advisory services and consulting offerings are designed to enable leaders and decision makers 
                    from <strong>Enterprises, GCCs, Startups, SMBs, VC/PE firms, Public Institutions and Academic Institutions</strong> </p>
                </Container>
                <Container className="mt-5 ">
                    <h2 className="mb-5" style={{borderBottom:'3px solid yellow',width:'22%',}}><strong>WE DO </strong>THIS BY</h2>
                    <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} />
                    <span style={{position:'relative',top:'-35px',left:"40px"}}>
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables to evangelize and demystify AI 
                   strategy, scenarios and adoption
                   </span>
                   <hr></hr>
                   <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} />
                    <span style={{position:'relative',top:'-35px',left:"40px"}}>
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables to evangelize and demystify AI 
                   strategy, scenarios and adoption
                   </span>
                   <hr></hr>
                   <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} />
                    <span style={{position:'relative',top:'-35px',left:"40px"}}>
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables to evangelize and demystify AI 
                   strategy, scenarios and adoption
                   </span>
                   <hr></hr>
                   <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} />
                    <span style={{position:'relative',top:'-35px',left:"40px"}}>
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables to evangelize and demystify AI 
                   strategy, scenarios and adoption
                   </span>
                </Container>
            </Layout>
        )
    }

    export default ApproachPage