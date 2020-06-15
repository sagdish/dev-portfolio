import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, 
  Slider, Slide, ButtonBack, 
  ButtonNext, Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Stoic from './Stoic';
import {ReactComponent as Logo} from '../img/logoSvgLg.svg'
import image1 from '../img/project1j.jpg'
import image2 from '../img/project2j.jpg'
import '../App.css'

function Carousel() {
  const [slide, setSlide] = useState(0)
  const [animate, setAnimate] = useState(false)

  const addAndRemove = () => {
    setAnimate(true)
    console.log('here',animate)
    
    setTimeout(() => {
      setAnimate(false)
      console.log(animate)
    }, 1000);
  }

  // for mobile touch event
  const touchEvent = ev => {
    addAndRemove();
  }

  return(
    <>
    <div className='content-carousel'>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={9.5}
          isPlaying={false}
          totalSlides={4}
          currentSlide={slide}
          hasMasterSpinner={false}
          infinite={true}
        >
          <div className='carousel'>
            <Slider className='slider'
              trayProps={{
                onTouchEnd: touchEvent,
                // onTouchEnd: touchEvent,
              }}
            >
              <Slide index={0} className='slide' >
                <div className='carousel-text' style={{
                  alignItems: 'center', 
                  width: '280px',
                  height: '90%',
                  border: '1px solid white'
                }}>
                  <Logo />
                </div>
              </Slide>

              <Slide index={1} className='slide' >
                <Stoic />
              </Slide>

              <Slide index={2} className='slide'>
                  <Image src={image1} className='image' />
              </Slide>

              <Slide index={3} className='slide'>
                  <Image src={image2} className='image' />
              </Slide>

            </Slider>
            <ButtonBack className='slider-buttons_l' 
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faAngleLeft} size='sm' />
            </ButtonBack>
            <ButtonNext className='slider-buttons_r'
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faAngleRight} size='sm' />
            </ButtonNext>
          </div>

        </CarouselProvider>
      </div>
      <div className={`content-carousel_line ${animate? 'animate' : ''}`} ></div>
      </>
  )
}

export default Carousel;