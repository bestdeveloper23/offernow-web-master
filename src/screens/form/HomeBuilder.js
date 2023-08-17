import React from 'react'

import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

class HomeBuilder extends React.Component {
  state = {
    options: ['Yes', 'No'],
    isDisabled: true,
    homeBuilder: '',
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed })
  }

  handleSelect = (val) => {
    this.setState({ homeBuilder: val, isDisabled: false })
  }

  setStorage = () => {
    // set localStorage on next page
    const { homeBuilder } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      homeBuilder
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

      this.props.history.push('/form/back-yard')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isDisabled, options, loading, homeBuilder } = this.state
    console.log(this.state)
    return(
      <div className='page-container'>
        <ProgressBar percent='60' />
        <div className='form-container'>
          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>Are you currently working with a home builder?</h1>

                  <div className='form-button-container category-list'>
                    {options.map((x, i) => (
                      <button
                        key={i}
                        className={`form-button-rounded ${homeBuilder === x && 'button-selected' }`}
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

export default HomeBuilder
