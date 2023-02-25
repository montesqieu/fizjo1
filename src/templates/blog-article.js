import React from 'react'
import kebabCase from "lodash/kebabCase"
import LayoutGlobal from '../components/LayoutGlobal'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from 'gatsby'
import { FaCalendarAlt, FaUserAlt, FaTags, FaCaretRight, FaCaretLeft } from "react-icons/fa"
import '../styles/global.css'

export default function BlogArticle({ data, pageContext }) {
  console.log(data.artDetails.frontmatter)

  const {next, prev} = pageContext
  const {html} = data.artDetails
  const {title, date, author, tags, max} = data.artDetails.frontmatter
  // const group = data.tagHook.group


  return (
    <LayoutGlobal>
      <div className='art_box'>
        <h1 className='art_title'>{title}</h1>
        <div className='art_info'>
          <div className='art_info_item'>
            <span className='art_info_icon'><FaCalendarAlt size={12}/></span>
            <span className='art_info_content'>{date}</span>
          </div>
          <div className='art_info_item'>
            <span className='art_info_icon'><FaUserAlt size={12}/></span>
            <span className='art_info_content'>{author}</span>
          </div>
          <div className='art_info_item'>
            <span className='art_info_icon'><FaTags size={12}/></span>
            <span className='art_info_content'>
              {tags.length &&
                <div className="art_info_tag">
                  {tags.map(tag => (
                    <span className='art_info_tag_item'>
                      <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                    </span>
                  ))} 
                </div>
              }
            </span>
          </div>
        </div>
        <GatsbyImage className='art_max' image={max.childImageSharp.gatsbyImageData} alt={title}/>
        <div className='art_content' dangerouslySetInnerHTML={{ __html: html }} />
        <div className='art_pagination'>
          {prev && 
            <div className='art_pagination_prev'>
              <div className='art_pagination_head'><FaCaretLeft color="#349eff" /> poprzedni artykuł</div>
              <div><Link to={`/blog/${prev.frontmatter.slug}`}>{`${prev.frontmatter.title}`}</Link></div>
            </div>
          }
          <div></div>
          {next &&
            <div className='art_pagination_next'>
              <div className='art_pagination_head'>następny artykuł <FaCaretRight color="#349eff" /></div>
              <div><Link to={`/blog/${next.frontmatter.slug}`}>{`${next.frontmatter.title}`}</Link></div>
            </div>
          }
        </div>

        {/* Wyświetlanie listy wszystkich tagów wraz z ilością artykułów */}
        {/* <div>
          <h1>Tags</h1>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue} ({tag.totalCount})</Link>
              </li>
            ))}
          </ul>
        </div> */}

      </div>
    </LayoutGlobal>
  )
}

export const query = graphql`
  query BlogArticle($slug: String) {
    artDetails: markdownRemark(
      frontmatter: {slug: {eq: $slug}}
      ) {
      html
      frontmatter {
        author
        title
        tags
        date(formatString: "DD MMMM YYYY", locale: "pl")
        max {
          childImageSharp {gatsbyImageData(layout: CONSTRAINED)}
        }
      }
    }
    tagHook: allMarkdownRemark(
      limit: 2000
      ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`