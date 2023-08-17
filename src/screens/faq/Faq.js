import React from 'react'
import '../../styles/faq.css'
import SearchArea  from './SearchArea'
import { Search } from '../../components'


class Faq extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='page-container'>
        <div className='page-area'>

          <div className='faq-container'>
            <div className='faq-second-header'>
              <div>
                <div id='fake-logo' />
                Get a competitive offer on your home in 24 hours.
              </div>
              <Search className='page-search' />
            </div>

            <div className='faq-top-title-container'>
              <div className='faq-outer'>
                <div className='faq-top-title'>
                  <h1>Frequently Asked Questions</h1>
                  {/* <div className='faq-search'>
                    <input placeholder='What are you looking for?' />
                    <button>
                      Search
                      <MaterialIcon
                        icon='search'
                        color='white'
                        size={30}
                        id='faq-search'
                      />
                    </button>
                  </div> */}
                </div>
              </div>

              <SearchArea />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq
