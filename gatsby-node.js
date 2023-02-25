const { createFilePath } = require('gatsby-source-filesystem')
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogArtTemplate = require.resolve('./src/templates/blog-article.js')
  const blogTagTemplate = require.resolve('./src/templates/blog-tag.js')

  const { data } = await graphql(`
    query {
      artLinks: allMarkdownRemark (
        sort: {order: ASC, fields: frontmatter___date}
        filter: {fileAbsolutePath: {regex: "/src/articles/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: {fileAbsolutePath: {regex: "/src/articles/"}}
        ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }  
  `)

  const arts = data.artLinks.edges
  const tags = data.tagsGroup.group

  arts.forEach(({node}, index) => {

    const slug = node.frontmatter.slug
    const next = index === (arts.length - 1) ? null : arts[index + 1].node
    const prev = index === 0 ? null : arts[index - 1].node

    createPage({
      path: '/blog/'+ slug,
      component: blogArtTemplate,
      context: {
        slug: slug,
        next: next,
        prev: prev,
      }
    })
  })

  tags.forEach(tag => {

    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: blogTagTemplate,
      context: {
        tag: tag.fieldValue
      },
    })
  })

}