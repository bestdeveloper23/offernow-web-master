import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../styles/carousel.css'

import Icon from 'material-icons-react'

import { testimonials } from '../lib'

class Carousel extends React.Component {
  state = {
    active: 0
  }

  handleChange = (current, next) => {
    this.setState({ active: next })
  }

  render() {
    const { active } = this.state

    const settings = {
      className: 'slider-container',
      autoplay: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:(
        <div>
          <Icon icon='keyboard_arrow_right' size={70} id='slider-next' />
        </div>
      ),
      prevArrow:(
        <div>
          <Icon icon='keyboard_arrow_left' size={70} id='slider-prev' />
        </div>
      )
    }

    return(
      <div>
        <Slider
          beforeChange={this.handleChange}
          ref={c => (this.slider = c)}
          {...settings}
        >
          {testimonials.map((x, i) => (
            <div className='slider-inner' key={i}>
              <h1>{x.text}</h1>
              <p className='slider-text-1'>{x.name}</p>
              <p className='slider-text-2'>{x.description}</p>
            </div>
          ))}
        </Slider>

        <div className='carousel-images'>
          <div className='image-container'>
            <div
              style={{backgroundImage: `url(${testimonials[0].image})`}}
              className={`testimonial-image ${active === 0 ? 'active' : ''}`}
            />
          </div>

          <div className='image-container'>
            <div
              style={{backgroundImage: `url(${testimonials[1].image})`}}
              className={`testimonial-image ${active === 1 ? 'active' : ''}`}
            />
          </div>

          <div className='image-container'>
            <div
              style={{backgroundImage: `url(${testimonials[2].image})`}}
              className={`testimonial-image ${active === 2 ? 'active' : ''}`}
            />
          </div>

          <div className='image-container'>
            <div
              style={{backgroundImage: `url(${testimonials[3].image})`}}
              className={`testimonial-image ${active === 3 ? 'active' : ''}`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
