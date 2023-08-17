import React from 'react'
import '../styles/about.css'
import '../styles/homepage.css'
import { Link, withRouter } from 'react-router-dom'
import { logo2 } from '../assets/'

import {Search} from '../components'


class Header extends React.Component {
  state = {
    scroll: false,
    isMobile: window.screen.width <= 600
  }

  componentDidlMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isMobile } = this.state

    if(window.scrollY >= (isMobile ? 200 : 500)) this.setState({ scroll: true, loaded: false })
    if(window.scrollY <= (isMobile ? 200 : 500)) this.setState({ scroll: false })
  }

  toggleSection = (e) => {
    const { openArea } = this.state
    const { id } = e.target.closest('div')

    if(openArea.includes(id)){
      this.setState({
        openArea: openArea.filter(x => x !== id)
      })
      return
    }

    this.setState({
      openArea: [ ...openArea, id ]
    })
  }

  setActiveArea = (area) => {
    this.setState({ activeArea: area})
  }

  render() {
    const { isMobile, scroll } = this.props
    const { pathname } = this.props.location

    return (
      <nav className={`header-container ${pathname === '/' ? 'header-container-homepage' : ''}`}>
        <div className={`header-area ${pathname !== '/' ? 'header-area-not-homepage' : 'header-area-homepage'}`}>

          <div className='search-container'>
            {/*/<MaterialIcon icon='menu' size={30} id='menu-icon' />*/}
            <Link to='/' className='home'>
              <img src={logo2} alt='Offernow' className='logo' />
            </Link>
          </div>

          {pathname === '/' && (
            <Search
              className={
                !isMobile
                  ? `address-input-header ${!scroll && 'address-input-fade'}`
                  : `address-input-mobile ${!scroll && 'address-mobile-fade'}`
              }
            />
          )}

          {/*<div className='header-center'>
              <span>Sell</span>
              <span>Buy</span>
            </div>

          <MaterialIcon icon='account_circle' size={30} id='user' />*/}
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
