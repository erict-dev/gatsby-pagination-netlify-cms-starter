import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BlogRoll from './BlogRoll'

class FeaturedArticles extends React.Component {
  render() {
    return (
      <BlogRoll data={this.props.data} />
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedArticlesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { 
            frontmatter: { 
              templateKey: { eq: "blog-post" },
              featuredpost: { eq: true } 
            }
          }
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
    `}
    render={(data, count) => <FeaturedArticles data={data} count={count} />}
  />
)
