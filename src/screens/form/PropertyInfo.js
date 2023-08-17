import React from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class PropertyInfo extends React.Component {
  state = {
    options: {
      bedrooms: ['1', '2', '3', '4', '5', '6', 'Multi-Unit'],
      bathrooms: ['1', '1.5', '2', '2.5', '3', '4', '5', '6', '6+'],
      partial: ['1', '2', '3', '4'],
      garages: ['No Garage', 'Parking Slab', 'Carport 1', 'Carport 2', '1 Car Attached', '2 Car Attached', '2 Car Detached', '2+ Car Attached', '2+ Car Detached', '3 Car Attached', '3 Car Detached', '3+ Car Attached', '3+ Car Detached']
    },
    isDisabled: true,
    bedrooms: '',
    bathrooms: '',
    garages: '',
    partial: '',
    built: '',
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed }, () => this.validateForm())
  }

  isSelected = (val, state) => {
    if(val === state) return 'category-selected'
    return ''
  }

  selectGarageType = (selected) => {
    if(selected.value === '') {
      this.setState({ isDisabled: true })
    }

    this.setState({ garages: selected.value }, () => {
      this.validateForm()
    })
  }

  handleChange = (val, state) => {
    this.setState({ [state]: val }, () => this.validateForm())
  }

  validateForm = () => {
    const { bedrooms, bathrooms, garages, partial, built } = this.state
    if(bedrooms && bathrooms && garages && partial && built) this.setState({ isDisabled: false })
  }

  setStorage = () => {
    // set localStorage on next page
    const { bedrooms, bathrooms, garages, partial, built } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      bedrooms,
      bathrooms,
      garages,
      partial,
      built
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

      this.props.history.push('/form/property-relation')
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const {
      isDisabled,
      options,
      bedrooms,
      bathrooms,
      partial,
      garages,
      built,
      loading
    } = this.state

    return(
      <div className='page-container'>
        <ProgressBar percent='20' />
        <div className='form-container'>
          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>Property Info</h1>

                  <p>Bedrooms</p>
                  <div className='category-container'>
                    {options.bedrooms.map((x, i) => (
                      <button
                        key={i}
                        className={`category-button ${this.isSelected(x, bedrooms)}`}
                        onClick={() => this.handleChange(x, 'bedrooms')}
                      >
                        {x}
                      </button>
                    ))}
                  </div>

                  <p>Bathrooms</p>
                  <div className='category-container'>
                    {options.bathrooms.map((x, i) => (
                      <button
                        key={i}
                        className={`category-button ${this.isSelected(x, bathrooms)}`}
                        onClick={() => this.handleChange(x, 'bathrooms')}
                      >
                        {x}
                      </button>
                    ))}
                  </div>

                  <p>Partial Bathrooms</p>
                  <div className='category-container'>
                    {options.partial.map((x, i) => (
                      <button
                        key={i}
                        className={`category-button ${this.isSelected(x, partial)}`}
                        onClick={() => this.handleChange(x, 'partial')}
                      >
                        {x}
                      </button>
                    ))}
                  </div>

                  <p>Garages</p>
                  <div className='category-container category-list'>
                    <Dropdown
                      id='garages'
                      className='garages-dropdown'
                      options={options.garages}
                      onChange={this.selectGarageType}
                      value={garages}
                      placeholder='Please select...'
                    />
                  </div>
                </div>

                <p>Year Built</p>
                <input
                  id='built'
                  value={built}
                  onChange={(e) => this.handleChange(e.target.value, 'built')}
                  placeholder='1995'
                />

                <div className='input-row'>
                  <button
                    className='initial-button'
                    onClick={this.prevPage}
                  >
                    Back
                  </button>

                  <button
                    className={`initial-button ${loading ? 'loading' : ''}`}
                    onClick={this.nextPage}
                    disabled={isDisabled}
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

export default PropertyInfo;
