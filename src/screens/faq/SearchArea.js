import React from 'react'
import '../../styles/searchArea.css'
import questions  from '../../lib/faqQuestions'
import MaterialIcon from 'material-icons-react'


class SearchArea extends React.Component {
  state = {
    activeQuestion: ''
  }

  handleQuestionArea = (questionNumber) => {
    const { activeQuestion } = this.state

    questionNumber === activeQuestion
      ? this.setState({ activeQuestion: '' })
      : this.setState({ activeQuestion: questionNumber })
  }

  render() {
    const { activeQuestion } = this.state

    return (
      <div className='search-container'>
        <div className='search-contents'>

          <div className='faq-questions-area'>
            {questions.map((x, i) => (
              <div className='faq-inner' key={i}>
                <div
                  className='faq-question'
                  key={x.number}
                  onClick={() => this.handleQuestionArea(x.number)}
                >
                  {x.question}

                  <MaterialIcon
                    key={
                      activeQuestion === x.number
                        ? 'keyboard_arrow_up'
                        : 'keyboard_arrow_down'
                    }
                    icon={
                      activeQuestion === x.number
                        ? 'keyboard_arrow_up'
                        : 'keyboard_arrow_down'
                    }
                    color='gray'
                    size={18}
                    id='faq-description-dropdown'
                  />
                </div>

                {activeQuestion === x.number &&
                  <p className='faq-answer'>{x.answer}</p>
                }

              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchArea
