import React from 'react'

import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class Motivation extends React.Component {
  state = {
    options: ['Death In Family', 'Distressed Home', 'Divorce', 'Downsizing', 'Elderly', 'Expired Listing', 'Financial Problems', 'Fire Damage', 'Inheritance', 'Investment Property', 'Medical Reasons', 'Relocating', 'Tired Landlord', 'Vacant'],
    motivation: [],
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed })
  }

  handleSelect = val => {
    let { motivation } = this.state

    if(motivation.includes(val)) {
      motivation = motivation.filter(x => x !== val)
    } else {
      motivation.push(val)
    }

    this.setState({ motivation })
  }

  isSelected = val => {
    // onsole.log(val)
    const { motivation } = this.state
    if(motivation.includes(val)) return 'button-selected'
    return ''
  }

  setStorage = () => {
    // set localStorage on next page
    const { motivation } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      motivation
    }

    localStorage.setItem('formData', JSON.stringify(formData))
  }

  prevPage = () => {
    this.setStorage()

    this.props.history.goBack()
  }

  nextPage = async () => {
    this.setStorage()
    this.setState({ loading: true })

    const body = localStorage.getItem('formData')

    try {
      // await axios.post('https://offrnow-server.herokuapp.com/leads/website', JSON.parse(body))
      await axios.post('https://localhost:4001/leads/website', JSON.parse(body))

      this.props.history.push('/form/sale-timeline')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { motivation, options, loading } = this.state

    return(
      <div className='page-container'>
        <ProgressBar percent='40' />
        <div className='form-container'>
          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>What's the reason for selling the house?</h1>

                  <div className='form-button-container-multiple'>
                    {options.map((x, i) => (
                      <button
                        key={i}
                        className={`form-button-rounded ${this.isSelected(x)}`}
                        onClick={() => this.handleSelect(x)}
                      >
                        {x}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='input-row'>
                  <button
                    onClick={this.prevPage}
                  >
                    Back
                  </button>

                  <button
                    className={loading && 'loading'}
                    onClick={this.nextPage}
                    disabled={motivation.length ? false : true}
                  >
                    {loading
                      ? <Spinner dimensions={20} col='white' />
                      : 'Next'}
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

export default Motivation
