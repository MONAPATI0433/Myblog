import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
// import SEO from "../components/seo"

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
    <h1>Blog</h1>
    <ol style={{alignItems:'center'}}>
      {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li>
      <h2>{edge.node.frontmatter.title}</h2>
      <Img fluid={data.placeholderImage1.childImageSharp.fluid} 
       style={{
         width:"30%"
       }}
      />
            <p>{edge.node.frontmatter.date}</p>
          </li>
        )
      })}
    </ol>
  </Layout>
  )
 
}

export default BlogPage