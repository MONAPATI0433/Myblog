/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
    module.exports.onCreateNode = ({node, actions}) => {
        const {createNoodeField} = actions

        if (node.internal.type ===  'MarkdownRemark') {
        //   console.log(JSON.stringify(Node, undefined, 4))
        const slug = path.basename(node.fileAbsolutePath, 'md')

        createNoodeField({
            node,
            name: 'slug',
            value: slug
        })

        }
    }


    module.exports.createPages = async ({ graphql, actions}) => {
        const {createPage} = actions
        const blogTemplate = path.resolve('./src/templates/blog.js')

        const res = await graphql (`
        query{
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `)


        res.data.allMarkdownReamrk.edges.forEach((edge)=>{
            createPage({
                component: blogTemplate,
                path: `./blog/${edge.node.fields.slug}` , 
                context: {
                    slug: edge.node.fields.slug
                }
            })
        })
    }