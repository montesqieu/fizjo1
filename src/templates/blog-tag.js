import React from "react"
import LayoutGlobal from '../components/LayoutGlobal'
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa"

export default function BlogTags({ data, pageContext }) {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagCount = `${totalCount}
    post${
      totalCount === 1 ? "" : (totalCount > 1 && totalCount <= 4 ? "y" : "ów")
    }`

  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>kategoria "{tag}"<br />znajdziesz tutaj {tagCount}</h1>
          <div className='blog_grid'>
            {edges.map(({node}) => {
              const {slug, title, date, author, short, min} = node.frontmatter
              return (
                <div className='blog_item'>
                  <div>
                    <GatsbyImage image={min.childImageSharp.gatsbyImageData} />
                  </div>
                  <div className='blog_info'>
                    <div className='blog_details'>
                      <div className='blog_details_date'><FaCalendarAlt size={12}/> {date}</div>
                      <div className='blog_details_category'><FaUserAlt size={12}/> {author}</div>
                    </div>
                    <Link className='blog_link' to={`/blog/${slug}`} key={tag.fieldValue}>
                      <h3 className='blog_title'>{title}</h3>
                      </Link>
                    <p className='blog_short'>{short}</p>
                    <div className='blog_read'>
                      <Link to={`/blog/${slug}`} key={tag.fieldValue}>czytaj dalej</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </LayoutGlobal>
  )
}

export const query = graphql`
  query BlogTags($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {tags: {in: [$tag] }}}
    ) {
      totalCount
      edges {
        node {
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
  }
`