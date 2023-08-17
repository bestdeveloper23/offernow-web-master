  import React from 'react'

import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class PropertyRelation extends React.Component {
  state = {
    options: ['I am the owner', 'I am a realtor or agent', 'Other'],
    relationship: '',
    sqft: '',
    worth: '',
    other: false,
    loading: false,
    isDisabled: true
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed })
  }

  handleChange = (x) => {
    this.setState({ relationship: x })

    // if option is other, other is true
    if(x === 'Other') this.setState({ other: true, relationship: '' })
    if(x !== 'Other') this.setState({ other: false })
  }

  isSelected = (val, state) => {
    const { other } = this.state
    if(val === 'Other' && other === true) return 'category-selected'
    if(val === state) return 'category-selected'
    return ''
  }

  setStorage = () => {
    // set localStorage on page change
    const { relationship, sqft, worth, other } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      relationship,
      sqft,
      worth,
      other
    }

    localStorage.setItem('formData', JSON.stringify(formData))
  }

  prevPage = () => {
    this.setStorage()
    this.props.history.goBack()
  }

  nextPage = async () => {
    this.setStorage()
    this.setState({ loading : true })

    const body = localStorage.getItem('formData')

    try {
      // await axios.post('https://offrnow-server.herokuapp.com/leads/website', JSON.parse(body))
      await axios.post('https://localhost:4001/leads/website', JSON.parse(body))

      this.props.history.push('/form/motivation')
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const {
      options,
      relationship,
      sqft,
      worth,
      other,
      loading,
      isDisabled
    } = this.state

    return (
      <div className='page-container'>
        <ProgressBar percent='30' />
        <div className='form-container'>
          <div className='form-wrapper'>

          <FormLeft />

          <div className='form-right'>
            <div className='input-container'>
              <div className='input-col'>
                <h1>Property Info</h1>

                <p>Sqft</p>
                <input
                  id='sqft'
                  value={sqft}
                  onChange={(e) => this.setState({ sqft: e.target.value })}
                  placeholder='Total sqft'
                />

                <p>What is your relationship to this home?</p>
                <div className='category-container'>
                  {options.map((x, i) => (
                    <button
                      key={i}
                      className={`category-button ${this.isSelected(x, relationship)}`}
                      onClick={() => this.handleChange(x)}
                    >
                      {x}
                    </button>
                  ))}
                </div>

                {other
                  && <textarea
                      className='other-box'
                      value={relationship}
                      placeholder='Could you briefly explain your relationship with the house?'
                      onChange={(e) => this.setState({ relationship: e.target.value })}
                    />
                }

                <p>How much do you think your home is worth today?</p>
                <input
                  id='worth'
                  value={worth}
                  type='number'
                  onChange={(e) => this.setState({ worth: e.target.value })}
                  placeholder='$'
                />

                <div className='input-row'>
                  <button
                    onClick={this.prevPage}
                  >
                    Back
                  </button>

                  <button
                    className={loading ? 'loading' : ''}
                    onClick={this.nextPage}
                    disabled={(!sqft || !worth || !relationship) && isDisabled}
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
    </div>
    )
  }
}

export default PropertyRelation
