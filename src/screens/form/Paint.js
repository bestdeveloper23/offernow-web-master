import React from 'react'

import MaterialIcon from 'material-icons-react'
import axios from 'axios'

import { Spinner, ProgressBar } from '../../components'
import FormLeft from './FormLeft'

import paintData  from '../../lib/paintData'

class Paint extends React.Component {
  state = {
    chosenCard: '',
    isDisabled: true,
    paint: [],
    loading: false
  }

  componentDidMount() {
    window.scroll(0, 0)

    const formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    this.setState({ ...parsed })
  }

  selectCard = (number) => {
    this.setState({ chosenCard: number, isDisabled: false, paint: number })
  }

  setStorage = () => {
    // set localStorage on next page
    const { paint } = this.state

    let formData = localStorage.getItem('formData')
    const parsed = JSON.parse(formData)

    formData = {
      ...parsed,
      paint
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

      this.props.history.push('/form/confirmation')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isDisabled, loading, chosenCard } = this.state

    return(
      <div className='page-container'>
        <ProgressBar percent='80' />
        <div className='form-container'>
          <div className='form-wrapper'>

            <FormLeft />

            <div className='form-right'>
              <div className='input-container'>
                <div className='input-col'>
                  <h1>What is the condition of your interior paint?</h1>
                </div>
                <div className='card-area'>
                  {paintData.map((card) => {
                    return (
                      <div
                        className={`card ${chosenCard === card.number && 'active-card'}`}
                        key={card.number}
                        onClick={()=>this.selectCard(card.number)}
                      >
                        <MaterialIcon icon='check_circle' size={45} id='card-check' />
                        <div className='card-image'>
                          <img alt='example' src={card.background} className='example-photo' />
                        </div>
                        <div className='card-text-area'>
                          <span className='card-header'>{card.header}</span>
                          <p className='card-content'>{card.content}</p>
                        </div>
                      </div>
                    )
                  })}
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

export default Paint
