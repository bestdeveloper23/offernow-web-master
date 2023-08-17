import React from 'react'
import '../styles/contact.css'
import offices from '../lib/offices'

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='page-container'>
        <div className='page-area'>
          <div className='contact-container'>
            <section>
              <div className='contact-inner-container'>
                <div className='contact-top'>
                  <h1>How can we help?</h1>

                  <div>
                    <h5>Customer Service</h5>
                    <p className='text-mobile'>For questions, feedback</p>
                    <a href='mailto:contact@offernow.com'>info@offernow.com</a>
                    <a href='tel:8883527075'>866-365-9156</a>
                    <p>(6am-7pm PT)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className='contact-addresses-container'>
                <div className='contact-addresses'>
                  <p id='contact-header'>Offices</p>

                  <div className='contact-address-area'>
                    {offices.map(office => (
                      <div key={office.officeName}>
                        <h6>{office.officeName}</h6>
                        <p>{office.address}</p>
                      </div>
                    ))}

                    <div className='contact-section first-contact-section'>
                      <h6>Press</h6>
                      <p>For press inquiries</p>
                      <a href='mailto:pr@offernow.com'>pr@offernow.com</a>
                    </div>

                    <div className='contact-section'>
                      <h6>Careers</h6>
                      <p>For job opportunities</p>
                      <a href='mailto:jobs@offernow.com'>jobs@offernow.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
