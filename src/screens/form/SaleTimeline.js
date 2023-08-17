import React from 'react'

import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class SaleTimeline extends React.Component {
  state = {
    options: ['ASAP', '2 - 4 weeks', '4 - 6 weeks', '6 + weeks', 'Just browsing'],
    isDisabled: true,
    timeline: [],
    selectedTime: '',
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed })
  }

  selectTime = (selected) => {
    this.setState({ selectedTime: selected, isDisabled: false, timeline: selected })
  }

  setStorage = () => {
    // set localStorage on next page
    const { timeline } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      timeline
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
      this.props.history.push('/form/home-builder')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isDisabled, options, loading, selectedTime } = this.state

    return(
      <div className='page-container'>
        <ProgressBar percent='50' />
        <div className='form-container'>
          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>What's your sale timeline?</h1>

                  <div className='form-button-container-multiple category-list-rounded'>
                    {options.map((x, i) => (
                      <button
                        key={i}
                        className={`form-button-rounded ${selectedTime === x && 'button-selected'}`}
                        onClick={() => this.selectTime(x)}
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

export default SaleTimeline
