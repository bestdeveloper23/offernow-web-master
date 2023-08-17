import React from 'react'
import marker from '../../assets/map-marker.png'
import Icon from 'material-icons-react'
import '../../styles/form.css'
import axios from 'axios'

import Map from './Map'
import { Spinner, Search } from '../../components'

import Modal from 'react-modal'


class Address extends React.Component {
  state = {
    address: null,
    placeId: null,
    location: null,
    modalOpen: false,
    loading: true
  }

  componentDidMount() {
    const { predictions } = this.props.location.state
    predictions ? this.getPlace() : this.setState({ loading: false})
  }

  getPlace = async (modal) => {
    const { place_id } = modal ? modal : this.props.location.state.place
    const { token } = this.props.location.state

    // const URL = 'https://offrnow-server.herokuapp.com/google/getPlace/'
    const URL = 'http://localhost:4001/google/getPlace/'
    const params = { place_id, token }

    try {
      const res = await axios.post(URL, params)

      this.setState({
        location: res.data,
        address: this.props.location.state.place.description,
        modalOpen: false,
        loading: false
      })
    } catch(e) {
      console.log('error', e)
    }
  }

  render () {
    const { location, address, modalOpen, loading } = this.state
    const { predictions, place } = this.props.location.state

    if(loading) {
      return (
        <div className='page-container'>
          <div className='center-spinner'>
            <Spinner />
          </div>
        </div>
      )
    }

    return (
      <div className='page-container'>
        <div className='page-area'>
          {predictions &&
            <div className='address-container'>
              {location &&
                <Map center={location} zoom={16}>
                  <img
                    alt='marker'
                    src={marker}
                    lat={location.lat}
                    lng={location.lng}
                    className='marker'
                    style={{ width: '40px', marginTop: '-40px', marginLeft: '-20px'}}
                  />
                </Map>
              }
            </div>
          }


          <div className='content-area'>
            {!predictions
              ? <h4 className='address-description'>{place}</h4>
              : <h4 className='address-description'>{address && address}</h4>
            }

            <div className='address-status'>Is this the correct address?</div>
            <div className='address-button-container'>
              <button
                onClick={() => this.setState({ modalOpen: true })}
                className='left-button'
              >
                  Edit address
              </button>

              <button
                onClick={() => {
                  this.props.history.push({
                    pathname: '/form/contact-info',
                    state: { address: this.props.location.state.place.description }
                  })
                }}
                className='right-button'
              >
                Yes, that's right
              </button>
            </div>
          </div>
        </div>

        {modalOpen &&
          <Modal
            isOpen={modalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={()=> this.setState({modalOpen: false})}
            contentLabel="Example Modal"
            className='address-modal'
          >
            <div className='input-container no-padding'>
              <Icon
                icon='close'
                size={30} id='modal-close-icon'
                onClick={() => this.setState({ modalOpen: false })}
              />
              <h4 className='address-description modal-content'>We’re excited to get you an offer on your home.</h4>
              <div className='address-status modal-content' >What's your address?</div>

              <Search closeModal={this.getPlace} className='address-input no-padding' />
            </div>
          </Modal>
        }
      </div>
    )
  }
}

export default Address
