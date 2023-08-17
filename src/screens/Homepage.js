import React from 'react'

import '../styles/homepage.css'

import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'

import { Carousel, Search } from '../components'

import {
  dealStep1,
  dealStep2,
  dealStep3,
  dealStep4,
  closingCosts,
  repairs,
  serviceCharge,
  reviewComparable,
  uniqueFeatures,
  marketTrends,
  homeImage
} from '../assets/'

class Homepage extends React.Component {
  state = {
    openArea: [],
    loaded: true,
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    localStorage.removeItem('formData')
  }

  toggleSection = (e) => {
     const { openArea } = this.state
     const { id } = e.target.closest('div')

     if(openArea.includes(id)){
       this.setState({
         openArea: openArea.filter(x => x !== id)
       })
       return
     }

     this.setState({
       openArea: [ ...openArea, id ]
     })
   }

  render() {
    const { openArea, loaded } = this.state
    const { isMobile, scroll } = this.props

    return (
      <React.Fragment>
        <section className='banner-area'>
          <div className='backdrop'></div>
          <div className='banner-content'>
            <h1 className='banner-text'>
              Get an offer on your home instantly
            </h1>

            <Search className='address-input'/>

            <h3 className='banner-area-text'>Join over 450,000 homeowners who have requested an offer</h3>
          </div>
        </section>

        <div className='second-header'>
          <h2 id='first-header'>Skip the stress and hassle - Sell to Offernow</h2>
        </div>

        <section className='step-container'>
          <div className='step'>
            <img alt='example' src={dealStep1} className='example-photo' />
            <div className='example-photo-divider' />
            <h5>step 1</h5>
            <p className='steps-content'>Request your offer on our website.</p>
            <p className='steps-content thin'>Give us a few more details on your home’s features and upgrades—it would take only a couple minutes.</p>
          </div>

          <div className='step'>
            <img alt='example' src={dealStep2} className='example-photo' />
            <div className='example-photo-divider' />
            <h5>step 2</h5>
            <p className='steps-content'>In 24 hours, get a fair cash offer.</p>
            <p className='steps-content thin'>We take the financial risk away so that you can comfortably buy your next home.</p>
          </div>

          <div className='step'>
            <img alt='example' src={dealStep3} className='example-photo' />
            <div className='example-photo-divider' />
            <h5>step 3</h5>
            <p className='steps-content'>
              Perform a free home assessment in person.
            </p>
            <p className='steps-content thin'>
              Skip the trouble if repairs are needed and let us handle the job.
            </p>
          </div>

          <div className='step'>
            <img alt='example' src={dealStep4} className='example-photo' />
            <div className='example-photo-divider' />
            <h5>step 4</h5>
            <p className='steps-content'>
              Choose your own closing date and move according to your plan.
            </p>
            <p className='steps-content thin'>
             Avoid double-moves and double-mortgages by lining up your close dates.
            </p>
          </div>
        </section>

        <section>
          <div className='offers-requested'>
            <div className='backdrop mobile-intense-backdrop'></div>
            <div className='request-background'></div>
              <div className='request-container'>
                <span className='request-amount'>452,643+</span>
                <div className='request-text'>OFFERS RECEIVED</div>
                <p class='request-bigger-text'>Each day thousands of homeowners get their offers on Offernow</p>
            </div>
          </div>
        </section>

        <section className='comparison-area'>
          <div className='second-header'>
            <h2>Why Offernow is better</h2>
          </div>

          <div className='comparison-container'>
            <div className='comparison comparison-left'>
              <h5 id='property-guys-sale'>Selling to Offernow</h5>

              <div>
                <MaterialIcon icon='check' size={17} id='checkmark-mobile' />
                <div className='comparison-item-left'>
                  <span className='comparison-text'>
                    Fair cash offer in 24 hours
                  </span>
                  <MaterialIcon icon='check' size={18} id='checkmark-left' />
                </div>
              </div>

              <div>
                <MaterialIcon icon='check' size={17} id='checkmark-mobile' />
                <div className='comparison-item-left'>
                  <span className='comparison-text'>
                    No prep work, listing hassle, or showings
                  </span>
                  <MaterialIcon icon='check' size={18} id='checkmark-left' />
                </div>
              </div>

              <div>
                <MaterialIcon icon='check' size={17} id='checkmark-mobile' />
                <div className='comparison-item-left'>
                  <span className='comparison-text'>
                    Skip repair and additional maintaining costs
                  </span>
                  <MaterialIcon icon='check' size={18} id='checkmark-left' />
                </div>
              </div>

              <div>
                <MaterialIcon icon='check' size={17} id='checkmark-mobile' />
                <div className='comparison-item-left'>
                  <span className='comparison-text'>
                    Decide the closing dates within 10-60 days
                  </span>
                  <MaterialIcon icon='check' size={18} id='checkmark-left' />
                </div>
              </div>
            </div>

            <span className='versus'>
              VS
              <div className='line' />
            </span>

            <div className='comparison comparison-right'>
              <h5 id='traditional-sale'>Traditional home sale</h5>
              <div>
                <MaterialIcon icon='clear'
                  size={17}
                  id='checkmark-mobile-bottom'
                />
                <div className='comparison-item-right'>
                  <MaterialIcon icon='clear'
                    color='gray'
                    size={18}
                    id='checkmark-right'
                  />
                  <span className='comparison-text'>
                    Risk of purchaser financing flop
                  </span>
                </div>
              </div>

              <div>
                <MaterialIcon icon='clear'
                  size={17}
                  id='checkmark-mobile-bottom'
                />
                <div className='comparison-item-right'>
                  <MaterialIcon icon='clear'
                    color='gray'
                    size={18}
                    id='checkmark-right'
                  />
                  <span className='comparison-text'>
                    Timeconsuming prep work and home showings
                  </span>
                </div>
              </div>

              <div>
                <MaterialIcon icon='clear'
                  size={17}
                  id='checkmark-mobile-bottom'
                />
                <div className='comparison-item-right'>
                  <MaterialIcon icon='clear'
                    color='gray'
                    size={18}
                    id='checkmark-right'
                  />
                  <span className='comparison-text'>
                    Handle repairs on your own
                  </span>
                </div>
              </div>

              <div>
                <MaterialIcon icon='clear'
                  size={17}
                  id='checkmark-mobile-bottom'
                />
                <div className='comparison-item-right'>
                  <MaterialIcon icon='clear'
                    color='gray'
                    size={18}
                    id='checkmark-right'
                  />
                  <span className='comparison-text'>
                    No control under closing dates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='description-offer'>
            <div className='description description-left'>
              <h5 className='description-header'>
                How we provide you with a fair offer
              </h5>

              <div
                onClick={this.toggleSection}
                id='1'
                className='description-left-areas'
              >
                <span>1.</span>
                <img alt='description' src={reviewComparable} />
                <span>
                  Examine similar homes
                </span>
                <MaterialIcon
                  icon='keyboard_arrow_down'
                  color='gray'
                  size={30}
                  id='description-dropdown'
                />
              </div>

              <div className='accordion-text'>
                {openArea.includes('1') &&
                  <p>We analyze the prices of similar homes and will share them in your offer.</p>
                }
              </div>

              <div
                onClick={this.toggleSection}
                id='2'
                className='description-left-areas'
              >
                <span>2.</span>
                <img alt='description' src={uniqueFeatures} />
                <span>
                  Consider unique features
                </span>
                <MaterialIcon
                  icon='keyboard_arrow_down'
                  color='gray'
                  size={30}
                  id='description-dropdown'
                />
              </div>

              <div className='accordion-text'>
                {openArea.includes('2') &&
                  <p>We adjust the price for differences in condition, size, and upgrades.</p>
                }
              </div>

              <div
                onClick={this.toggleSection}
                id='3'
                className='description-left-areas'
              >
                <span>3.</span>
                <img alt='description' src={marketTrends} />
                <span>
                  Adapt the price to market trends
                </span>
                <MaterialIcon
                  icon='keyboard_arrow_down'
                  color='gray' size={30}
                  id='description-dropdown'
                />
              </div>

              <div className='accordion-text'>
                {openArea.includes('3') &&
                  <p>We bought thousands of homes which gave us a profound understanding of regional trends.</p>
                }
              </div>
            </div>

            <div className='description description-right'>
              <h5 className='description-header'>
                Transparent pricing, <br/> no hidden fees.
              </h5>
              <div className='description-icons'>
                <div>
                  <img alt='description' src={serviceCharge} />
                  <p>Service charge</p>
                </div>

                <MaterialIcon
                  icon='add'
                  color='gray'
                  size={30}
                  id='description-dropdown'
                />

                <div>
                  <img alt='description' src={repairs} />
                  <p>Repairs</p>
                </div>

                <MaterialIcon
                  icon='add'
                  color='gray'
                  size={30}
                  id='description-dropdown'
                />

                <div>
                  <img alt='description' src={closingCosts} />
                  <p>Closing cost</p>
                </div>
              </div>

              <p className='description-text'>
                Our service fee helps us to provide you a stress-free sale and best support. Renovations and closing costs are equivalent to what you’d pay in a traditional sale. The three expenses are discounted at close so you don't pay out of your pocket.
              </p>
            </div>
          </div>
        </section>

        <section className='testimonials'>
          <h2>9 out of 10 Offernow sellers recommend us</h2>
          <Carousel />
        </section>

        <section className='learn-more-container'>
          <div className='learn-more'>
            <div className='learn-more-content'>
              <h2>Buy or sell your perfect home with Offernow</h2>
              <p>Start with tours without the pressure. We will help you to buy the best one for a better price.</p>
            </div>
            <div className='learn-more-image'>
              <img alt='home-img' src={homeImage} />
            </div>
          </div>
        </section>

        <section className='prefooter'>
          <div className='contact'>
            <div>
              <h6>Contact us</h6>
              <a className='links' href='mailto:info@offernow.com'>
                info@offernow.com
              </a>

              <a className='links' href='tel:4805305992'>480-530-5992</a>
              <p className='customer-service'>Customer service — (6am-7pm PT)</p>

              {/*<h6 className='contact-locations'>
                <span role='img' aria-label="flag">🇺🇸 </span>
                Locations
              </h6>

              <div className='locations'>
                <a href='https://www.offrnow.com/w/sell/phoenix'>Phoenix, AZ</a>
                <a href='https://www.offrnow.com/w/sell/los-angeles'>Los Angeles, CA</a>
                <a href='https://www.offrnow.com/w/sell/tucson'>Tucson, AZ</a>
                <a href='https://www.offrnow.com/w/sell/san-antonio'>San Antonio, TX</a>
                <a href='https://www.offrnow.com/w/sell/houston'>Houston, TX</a>
                <a href='https://www.offrnow.com/w/sell/charlotte'>Charlotte, NC</a>
                <a href='https://www.offrnow.com/w/sell/tampa'>Tampa, FL</a>
                <a href='https://www.offrnow.com/w/sell/sacramento'>Sacramento, CA</a>
                <a href='https://www.offrnow.com/w/sell/nashville'>Nashville, TN</a>
                <a href='https://www.offrnow.com/w/sell/raleigh-durham'>Raleigh-Durham, NC</a>
                <a href='https://www.offrnow.com/w/sell/orlando'>Orlando FL</a>
                <a href='https://www.offrnow.com/w/sell/dallas-fort-worth'>Dallas Fort-Worth, TX</a>
                <a href='https://www.offrnow.com/w/sell/atlanta'>Atlanta, GA</a>
                <a href='https://www.offrnow.com/w/sell/jacksonville'>Jacksonville, FL</a>
                <a href='https://www.offrnow.com/w/sell/portland'>Portland, OR</a>
                <a href='https://www.offrnow.com/w/sell/denver'>Denver, CO</a>
                <a href='https://www.offrnow.com/w/sell/riverside'>Riverside, CA</a>
                <a href='https://www.offrnow.com/w/sell/las-vegas'>Las Vegas, NV</a>
                <a href='https://www.offrnow.com/w/sell/minneapolis-saint-paul'>Minneapolis-Saint Paul, MN</a>
                <a href='https://www.offrnow.com/w/sell/austin'>Austin, TX</a>
              </div>*/}
            </div>
          </div>
        </section>

        <section className='faq'>
          <div className='faq-content'>
            <h6>FAQs</h6>

            <div onClick={this.toggleSection} id='4' className='faq-question-area'>
              <p
                style={{
                  fontWeight: openArea.includes('4') ? '400' : '300'
                }}
              >
                When I request an offer, are there any costs or obligations?
                <MaterialIcon
                  key={
                    openArea.includes('4')
                      ? 'keyboard_arrow_up'
                      : 'keyboard_arrow_down'
                  }
                  icon={
                    openArea.includes('4')
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down'
                  }
                  color='gray'
                  size={30}
                  id='faq-description-dropdown'
                />
              </p>
            </div>

            {openArea.includes('4') &&
              <p>It is free to receive an offer from Offernow on your home and comes with no obligation to sell at all. To get started, enter your email at the top of this page and we're going to walk you through some quick questions about the state, features, and upgrades of your home.</p>
            }

            <div onClick={this.toggleSection} id='5' className='faq-question-area'>
              <p
                style={{
                  fontWeight: openArea.includes('5') ? '400' : '300'
                }}
              >
                Why it sounds too good to be true — what's the catch?
                <MaterialIcon
                  key={
                    openArea.includes('5')
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down'
                  }
                  icon={
                    openArea.includes('5')
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down'
                  }
                  color='gray'
                  size={30}
                  id='faq-description-dropdown'
                />
              </p>

              {openArea.includes('5') &&
                <p>
                  This question is often asked by people who are unfamiliar with the iBuyer business model, and it’s a natural concern: “How can you provide me with a good deal at my home and still make enough money to run the business?” Unlike flippers our business model is fee-based. If you decide to take our offer we will take a fee which is similar to how an agent takes a commission in a traditional sale. We buy hundreds of homes each month to help homeowners across the country start their next page in life.</p>
              }

              <div onClick={this.toggleSection} id='6' className='faq-question-area'>
                <p
                  style={{
                    fontWeight: openArea.includes('6') ? '400' : '300'
                  }}
                >
                  Which kinds of homes are purchased by Offernow?
                  <MaterialIcon
                    key={
                      openArea.includes('6')
                      ? 'keyboard_arrow_up'
                      : 'keyboard_arrow_down'
                    }
                    icon={
                      openArea.includes('6')
                      ? 'keyboard_arrow_up'
                      : 'keyboard_arrow_down'
                    }
                    color='gray'
                    size={30}
                    id='faq-description-dropdown'
                  />
                </p>

                {openArea.includes('6') &&
                  <p>
                    Visit our
                    <Link to='/faq'>
                      {` FAQ page `}
                    </Link>
                     page to learn more about the types of homes Offernow purchases.
                  </p>
                }
              </div>
            </div>
            <Link to='/faq' className='faq-bottom'>
              See All FAQs
            </Link>
          </div>
        </section>

        {!loaded && isMobile && (
          <div className='offer-container'>
            <Search
              className={`address-input-mobile ${!scroll ? 'address-mobile-fade' : ''}`}
              mobile={true}
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Homepage
