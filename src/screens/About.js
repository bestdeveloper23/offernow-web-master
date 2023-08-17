import React from 'react'
import '../styles/about.css'

class About extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <div className='page-area'>
          <section>
            <div className='about-container'>
              <div>
                <h1>About Us</h1>
              </div>
            </div>
          </section>

          <section className='about-story'>
            <div className='about-content'>
              <div className='about-header'>our story</div>

              <h2>The revolutionary way to buy and sell your home</h2>
              <p>
  							In 2014, we set out to reinvent life’s most important transaction
  							with a new, radically simple way to buy and sell your home. Our
  							mission is to empower everyone with the freedom to move, and we’ve
  							served more than 40,000 customers who have come to Offernow to make
  							that move easier. Whether it’s getting married, starting a family,
  							or taking a new job, we help people get to their next step in one
  							simple, seamless transaction.
  						</p>

              <p>
                Offernow currently operates in twenty cities, including Atlanta,
                Austin, Charlotte, Dallas-Fort Worth, Denver, Houston, Jacksonville,
                Las Vegas, Los Angeles, Minneapolis-St.Paul, Nashville, Orlando, Phoenix, Portland,
                Raleigh-Durham, Riverside, Sacramento, San Antonio, Tampa, and Tucson. We have
                been recognized as the most innovative company in real estate by Inman,
                the industry's leading source of real estate information, for the
                past three years. We are headquartered in San Francisco and have
                over 1300 employees across our markets.
  	          </p>
            </div>
          </section>

          <section>
            <div className='about-team'>
              <h3>Meet the leadership team</h3>

              <div className='about-team-members'>
                <div className="box">
                  <div className='about-infos'>
                    <div className='about-team-member-photo' />
                    <h5>Eric Wu</h5>
                    <h6>CEO / Co Founder</h6>
                  </div>

                  <div className='about-team-member-information'>
                    Eric’s life-obsession is to make moving simple. Prior to founding Offernow, Eric was the founder and CEO of Movity.com, a geo-data analytics company acquired by Trulia.com in 2011. At Trulia, Eric led location, social, and consumer product development. He also co-founded RentAdvisor.com, which was later acquired by Apartment List, and runs a real estate fund that has invested in over 100 multi-family units.
                  </div>
                </div>

                <div className="box">
                  <div className='about-infos'>
                    <div className='about-team-member-photo' />
                    <h5>Gautam Gupta</h5>
                    <h6>COO</h6>
                  </div>

                  <div className='about-team-member-information'>
                    Gautam joins us from Uber where he was Head of Finance. He helped Uber grow from a 200 employee company in early 2013 to a company with more than 13,000 employees today. Gautam led all finance functions within Uber but has also been monumental in incubating and scaling Uber’s leasing operation and managing pricing and analytics, and fundraising.
                  </div>
                </div>

                <div className="box">
                  <div className='about-infos'>
                    <div className='about-team-member-photo' />
                    <h5>Ian Wong</h5>
                    <h6>CTO / Co Founder</h6>
                  </div>

                  <div className='about-team-member-information'>
                    Ian is a co-founder and leads Offernow’s team of engineers and data scientists in modernizing the real-estate industry. Previously, he built machine learning applications at Square and Prismatic. He earned degrees in Electrical Engineering and Statistics from Stanford University.
                  </div>
                </div>

                <div className="box">
                  <div className='about-infos'>
                    <div className='about-team-member-photo' />
                    <h5>Erica Galos Alioto</h5>
                    <h6>Head of people</h6>
                  </div>

                  <div className='about-team-member-information'>
                    Prior to Offernow, Erica spent eleven years at Yelp, where she helped grow the company from a team of 13 in 2006 to over 5500. Throughout her tenure, she led the sales team of over 2200 team members and at various points led sales training and recruiting. From 2013 to 2017, she served as the Chairperson of the Board for the Yelp Foundation where she focused on bringing community involvement into the markets where Yelp operated. Prior to Yelp, she spent over 4 years as a litigation associate at Latham & Watkins.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About
