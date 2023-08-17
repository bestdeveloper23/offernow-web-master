import React from 'react'

import ObjectID from 'bson-objectid'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

import '../styles/search.css'
import { Spinner } from '../components'

let timer
class Search extends React.Component {
  state = {
    token: ObjectID().toString(),
    predictions: null,
    address: null,
    loading: false,
    searching: false
  }

  handleInput(address) {
    clearTimeout(timer)

    this.setState({ address })

    if(address.length === 0) {
      this.setState({ predictions: null })

      this.searchPlaces('')

      return
    }

    timer = setTimeout(() => {
      this.searchPlaces(address)
    }, 500)
  }

  handleFocus = () => {
    const { mobile } = this.props
    if(mobile) this.setState({ searching: true })
  }

  // handleBlur = () => {
  //   setTimeout(() => {
  //     this.setState({ searching: false, predictions: null })
  //   }, 500)
  // }

  async searchPlaces(address){
    const { token } = this.state
    this.setState({ loading: true })

    if(address.length === 0) this.setState({ loading: false })

    const URL = 'http://localhost:4001/google/getPredictions/'
    // const URL = 'https://offrnow-server.herokuapp.com/google/getPredictions/'
    const params = { token, address }

    try {
      const res = await axios.post(`${URL}`, params)

      this.setState({
        predictions: res.data,
        loading: false,
        searching: true
      })

    } catch (e) {
      console.log('err', e)
    }
  }

  render() {
    const { closeModal, className, mobile } = this.props
    const { predictions, token, loading, searching, address } = this.state
    const { pathname } = this.props.location

    return(
      <div className={`${className} ${searching ? 'address-on-focus' : ''}`}>
        <div className={`search-inner ${mobile ? 'search-container-mobile' : ''} ${pathname ==='/faq' ? 'search-inner-faq' : ''}`}>
          <input
            placeholder='Enter your home address'
            className='address-area'
            onChange={(e) => this.handleInput(e.target.value)}
            onBlur={this.handleBlur}
          />

        <button
          className={
            loading
              ? 'address-button loading'
              : 'address-button'
          }
          id='long-content'
        >
          {loading
            ? <Spinner dimensions={20} col='white' />
            : <Link
              to={{
                pathname: address &&  address.length >= 3 && '/form/contact-info',
                state: { address, token: token, predictions: false }
              }}
              >
                Get free offer
              </Link>
          }
          </button>

          <button
          className={
            loading
              ? 'address-button loading'
              : 'address-button'
          }
          id='short-content'
          >
            {loading
              ? <Spinner dimensions={20} col='white' />
              : <Link to='/address'>Go</Link>
            }
          </button>

          {predictions &&
            <div className='predictions'>
              {predictions.map((x, i) => (
                <Link
                  key={i}
                  to={{
                    pathname: '/form/address',
                    state: { place: x, token: token, predictions: true }
                  }}
                    onClick={() => closeModal && closeModal(x)}
                >
                  {x.description}
                </Link>
              ))}
            </div>
          }

            <div className={mobile && searching ? 'fade-background' : ''}></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)
