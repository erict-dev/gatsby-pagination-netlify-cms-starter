import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ height: 'auto', maxHeight: 'none', width: '80px', margin: '10px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/articles">
                Articles
              </Link>
              <Link className="navbar-item" to="/topics">
                Topics
              </Link>
              <Link className="navbar-item" to="/resources">
                Resources
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/donate">
                <span style={{backgroundColor: '#73d64f', padding: '4px 20px', borderRadius: '22px', color: 'white' }}>Donate</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
