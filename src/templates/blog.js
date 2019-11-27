import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

export const query = graphql `
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug} }) {
        frontmatter {
            title
            date
        }
        html
    }
}
`

const Blog = (props) => {
    return(
        <Layout>
<h5>{props.data.markdownRemark.frontmatter.title}</h5>
<p>{props.data.markdownRemark.frontmatter.date}</p>
<div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog