import React from 'react'
// import logo from './logo.png';
// import './App.css';
import './styles/spinner.css'

import {
  Homepage,
  Faq,
  About,
  Contact,
  Address,
  ContactInfo,
  PropertyInfo,
  PropertyRelation,
  Motivation,
  Confirmation,
  SaleTimeline,
  HomeBuilder,
  BackYard,
  Paint
 } from './screens'
 import { Header, Footer } from './components'

import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {
  state = {
    scroll: false,
    isMobile: window.screen.width <= 600,
    animate: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isMobile, animate } = this.state

    if(window.scrollY >= (isMobile ? 200 : 500)) this.setState({ scroll: true })
    if(window.scrollY <= (isMobile ? 200 : 500)) this.setState({ scroll: false })

    if(window.scrollY > (isMobile ? 700 : 1200) && !animate) this.setState({ animate: true })
  }

  render() {
    const { scroll, isMobile, animate } = this.state

    return (
      <div className="App">

        <Router>
          <Header scroll={scroll} isMobile={isMobile} />
          <Route exact path="/" render={() => (
              <Homepage scroll={scroll} isMobile={isMobile} animate={animate} />
            )}
          />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/form/address" component={Address} />
          <Route exact path="/form/contact-info" component={ContactInfo} />
          <Route exact path="/form/property-info" component={PropertyInfo} />
          <Route exact path="/form/property-relation" component={PropertyRelation} />
          <Route exact path="/form/motivation" component={Motivation} />
          <Route exact path="/form/confirmation" component={Confirmation} />
          <Route exact path="/form/sale-timeline" component={SaleTimeline} />
          <Route exact path="/form/home-builder" component={HomeBuilder} />
          <Route exact path="/form/back-yard" component={BackYard} />
          <Route exact path="/form/interior-paint" component={Paint} />
          <Footer />
        </Router>

      {/*
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1>
           <span style={{ color: '#13235E' }}>Coming </span>
           <span style={{ color: '#EFB144' }}>Soon...</span>
         </h1>
        </header>
         */}
      </div>
    )
  }
}

export default App
