import React from "react"
import {graphql, useStaticQuery, Link} from 'gatsby'
import Img from "gatsby-image"
import {Container,Row} from 'react-bootstrap'
import Layout from "../components/layout"
// import SEO from "../components/seo"
import './Blog.css'
const BlogPage = () => {
  const data = useStaticQuery (graphql `
  query {
  	allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }


    placeholderImage1: file(relativePath: { eq: "card-1-1-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }


}

  `)
  return(
    <Layout>
    <h1></h1>
    <Container style={{paddind:'2px 16px'}}>
      <Row className="mb-5">
    <div className="card1 ml-2">
    <Img className="" fluid={data.placeholderImage1.childImageSharp.fluid}  style={{ width:"100%",marginLeft:'0px'}} />
    {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li style={{listStyleType:'none'}}>
             <p className="ml-5">{edge.node.frontmatter.date}</p>
             <Link to={`/blog/${edge.node.fields.slug}`}>
             <h5 className="p-2">{edge.node.frontmatter.title}</h5>
             </Link>
          </li>
        )
      })}
</div>
<div className="card1 ml-2">
    <Img className="" fluid={data.placeholderImage1.childImageSharp.fluid}  style={{ width:"100%",marginLeft:'0px'}} />
    {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li style={{listStyleType:'none'}}>
             <p className="ml-5">{edge.node.frontmatter.date}</p>
             <Link to={`/blog/${edge.node.fields.slug}`}>
             <h5 className="p-2">{edge.node.frontmatter.title}</h5>
             </Link>
          </li>
        )
      })}
</div>
<div className="card1 ml-2">
    <Img className="" fluid={data.placeholderImage1.childImageSharp.fluid}  style={{ width:"100%",marginLeft:'0px'}} />
    {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li style={{listStyleType:'none'}}>
             <p className="ml-5">{edge.node.frontmatter.date}</p>
             <Link to={`/blog/${edge.node.fields.slug}`}>
             <h5 className="p-2">{edge.node.frontmatter.title}</h5>
             </Link>
          </li>
        )
      })}
</div>
</Row>
    </Container>
  </Layout>
  )
 
}

export default BlogPage