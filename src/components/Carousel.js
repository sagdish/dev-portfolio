import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Stoic from './Stoic';
import Clock from './Clock';
import {ReactComponent as Logo} from '../img/logoSvgLg.svg'
import image1 from '../img/project1j.jpg'
import image2 from '../img/project2j.jpg'
import '../App.css'

function Carousel() {
  const [animate, setAnimate] = useState(false)

  const addAndRemove = () => {
    setAnimate(true)
    // console.log('here',animate)
    
    setTimeout(() => {
      setAnimate(false)
      // console.log(animate)
    }, 1000);
  }

  // for mobile touch event
  const touchEvent = ev => {
    addAndRemove();
  }

  return(
    <>
    <div className='content-carousel'>
          <div className='carousel'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.slider-buttons_l',
                nextEl: '.slider-buttons_r',
              }}
              onSlideChange={() => {
                addAndRemove();
              }}
              onTouchEnd={touchEvent}
              className='slider'
            >
              <SwiperSlide className='slide'>
                <div className='carousel-text' style={{
                  alignItems: 'center', 
                  width: '280px',
                  height: '90%',
                  border: '1px solid white',
                  // border: '1px solid #DF740C'
                }}>
                  <Logo />
                </div>
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <Stoic />
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}>
                  <h1 style={{
                    fontWeight: 'lighter',
                    marginBottom: "20px"
                  }}>What time is it?</h1>
                  <Clock />
                </div>
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <img src={image1} className='image' alt="Project 1" />
              </SwiperSlide>

              <SwiperSlide className='slide'>
                <img src={image2} className='image' alt="Project 2" />
              </SwiperSlide>

            </Swiper>
            <button className='slider-buttons_l' 
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faAngleLeft} size='sm' />
            </button>
            <button className='slider-buttons_r'
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faAngleRight} size='sm' />
            </button>
          </div>
      </div>
      <div className={`content-carousel_line ${animate? 'animate' : ''}`} ></div>
      {/* <div className={`content-carousel_line-l ${animate? 'animate' : ''}`} ></div>
      <div className={`content-carousel_line-m ${animate? 'animate' : ''}`} ></div>
      <div className={`content-carousel_line-r ${animate? 'animate' : ''}`} ></div> */}
      </>
  )
}

export default Carousel;