import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import BlogRoll from './BlogRoll'

class PaginatedBlogRoll extends React.Component {

  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll data={this.props.data} />
                {!isFirst && (
                  <Link className="button" to={"/archives/" + prevPage} rel="prev">
                    ← Previous Page
                  </Link>
                )}
                {!isLast && (
                  <Link className="button" to={"/archives/" + nextPage} rel="next">
                    Next Page →
                  </Link>
                )}
              </div>
            </div>
          </section>

    )
  }
}

PaginatedBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default PaginatedBlogRoll
