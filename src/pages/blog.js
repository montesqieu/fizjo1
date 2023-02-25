import { graphql, Link } from 'gatsby'
import React from 'react'
import LayoutGlobal from '../components/LayoutGlobal'
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa"
import '../styles/global.css'

export default function Blog({ data }) {
  console.log(data.article.nodes)

  const articles = data.article.nodes
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Blog</h1>
        <div className='blog_grid'>
          {articles.map((article, index) => (
            <div className='blog_item'>
              <div>
                <GatsbyImage image={article.frontmatter.min.childImageSharp.gatsbyImageData} />
              </div>
              <div className='blog_info'>
                <div className='blog_details'>
                  <div className='blog_details_date'><FaCalendarAlt size={12}/> {article.frontmatter.date}</div>
                  <div className='blog_details_category'><FaUserAlt size={12}/> {article.frontmatter.author}</div>
                </div>
                <Link className='blog_link' to={"/blog/" + article.frontmatter.slug} key={index}>
                  <h3 className='blog_title'>{article.frontmatter.title}</h3>
                </Link>
                <p className='blog_short'>{article.frontmatter.short}</p>
                <div className='blog_read'>
                 <Link to={"/blog/" + article.frontmatter.slug} key={index}>czytaj dalej</Link>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutGlobal>
  )
}

export const query = graphql`
query Articles {
  article: allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/src/articles/"}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pl")
        slug
        title
        author
        short
        min {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`