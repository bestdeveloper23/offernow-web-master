import React from 'react'
import '../../styles/form.css'

import MaterialIcon from 'material-icons-react'
import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class ContactInfo extends React.Component {
  state = {
    isDisabled: true,
    name: '',
    email: '',
    phone: '',
    address: this.props.location.state.address,
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const { isDisabled } = this.state
    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({
      isDisabled,
      ...parsed
    }, () => this.validateForm())
  }

  handleChange = (e) => {
    const val = e.target.value
    const id = e.target.id

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    const newData = {
      ...parsed,
      [id]: val
    }

    localStorage.setItem('formData', JSON.stringify(newData))

    this.setState({ [id]: val }, () => this.validateForm())
  }

  // check only for valid phone number
  validateForm = (id, val) => {
    const { email, phone } = this.state
    const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    const mailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(id === 'name') return
    // not Valid
    if(email.length > 0 && !mailReg.test(email)) {
      this.setState({ isDisabled: true })
      return
    }

    // not Valid
    if(!phoneReg.test(phone)) {
      this.setState({ isDisabled: true })
      return
    }

    // is valid
    this.setState({ isDisabled: false })
  }

  nextPage = async () => {
    const { address } = this.state
    const formData = localStorage.getItem('formData')
    let parsed = JSON.parse(formData)
    parsed = {
      ...parsed,
      address
    }

    this.setState({ loading: true })

    localStorage.setItem('formData', JSON.stringify(parsed))

    try {
      // const res = await axios.post('https://offrnow-server.herokuapp.com/leads/website', parsed)
      const res = await axios.post('https://localhost:4001/leads/website', parsed)

      console.log(res.data, parsed.itemId);
      // set item Id to send with next requests to update created podio item
      // guard for going back and forth
      parsed = {
        ...parsed,
        itemId: parsed.itemId ? parsed.itemId : res.data.itemId
      }

      localStorage.setItem('formData', JSON.stringify(parsed))
      this.props.history.push({ pathname: '/form/property-info' })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isDisabled, name, email, phone, loading } = this.state

    return (
      <div className='page-container'>
        <div className='form-container'>
          <ProgressBar percent='10' />

          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>Your contact info</h1>

                  <p>Name</p>
                  <input
                    id='name'
                    value={name}
                    onChange={this.handleChange}
                    placeholder='Full name...'
                  />

                  <p>Email</p>
                  <input
                    id='email'
                    value={email}
                    type='email'
                    onChange={this.handleChange}
                    placeholder='Email...'
                  />

                  <p>Phone</p>
                  <input
                    id='phone'
                    value={phone}
                    onChange={this.handleChange}
                    placeholder='Phone number...'
                    required
                  />
                </div>
                <div className='form-privacy-area'>
                  <div className='form-privacy-first-paragraph'>
                    <MaterialIcon icon='lock' size={18} />
                    <p>Your contact information will be protected by our <a href='/form'>Privacy Policy</a>.</p>
                  </div>
                  <br />
                  <p>By pressing "Get my offer", you consent to receive marketing calls and texts from Offernow,
                  including by automated means. You may opt-out at any time and consent is not a condition of purchase.</p>
                </div>

                <div className='input-row'>
                  <button
                    onClick={() => this.props.history.goBack()}
                  >
                    Back
                  </button>

                  <button
                    className={loading ? 'loading' : ''}
                    onClick={this.nextPage}
                    disabled={isDisabled}
                  >
                  {loading
                    ? <Spinner dimensions={20} col='white' />
                  : 'Get my offer'}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactInfo
