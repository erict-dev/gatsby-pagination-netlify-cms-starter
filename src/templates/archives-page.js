import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PaginatedBlogRoll from '../components/PaginatedBlogRoll'

export default class ArchivesPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Archives
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PaginatedBlogRoll data={data} pageContext={this.props.pageContext} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const paginatedBlogQuery = graphql`
  query PaginatedBlogRollQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
