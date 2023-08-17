import React from 'react'
import '../styles/about.css'
import { Link, withRouter } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    const { pathname } = this.props.location
    return (
      <div
        className={`
          ${pathname.includes('form')
            ? 'hide-footer'
            : ''
          }
          ${pathname === '/'
            ? 'page-container-white'
            : 'page-footer'
          }`
        }
      >
        <div
          style={pathname === '/' ? { maxWidth: 'unset' } : null}
          className='page-area'
        >
          <footer className='footer'>
            {/*<div className='about-home-icon-container'>
              <MaterialIcon
                icon='home'
                size={34}
                id='about-footer-house-icon'
              />
            </div>*/}
              <span>© 2023 Offernow</span>

            <div>
              <Link to='/'>Homepage</Link>
              <Link to='/faq'>Faq</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer)
