import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, 
  Slider, Slide, ButtonBack, 
  ButtonNext, Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// import {ReactComponent as Logo} from '../img/logoSvg.svg'
import image1 from '../img/one.png'
import image2 from '../img/two.png'
import image3 from '../img/three.png'
import '../App.css'

function Carousel() {
  const [slide, setSlide] = useState(0)
  const [animate, setAnimate] = useState(false)

  const addAndRemove = () => {
    setAnimate(true)
    console.log(animate)
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
          // infinite
        >
          {/* <h1 className="projectsName">Project name: {slide === 0 ? 
          ' Arc Registry' : ' SFspots'}</h1> */}
          <div className='carousel'>
            <Slider className='slider'
              trayProps={{
                onTouchEnd: touchEvent,
                // onTouchEnd: touchEvent,
              }}
            >
              <Slide index={0} className='slide' >
                {/* <a href="https://arcregistry.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > */}
                <div className='title-carousel'>My Objective:</div>
                <div className='carousel-text'>
                  Engaging with projects that require me to work outside my comfort zone.
                  I put great emphasis on UI and UX, I believe all functionality of the app is useless without proper real user engagement
                </div>
                  {/* <Image src={image1} className='image' /> */}

                 
                {/* </a> */}
                  {/* <Logo /> */}
              </Slide>
              <Slide index={1} className='slide'>
                {/* <a href="https://sf-spots.sagdi.now.sh/" 
                  target="_blank" 
                  rel="noopener noreferrer"  */}
                
                  <Image src={image2} className='image' />
                  {/* <div className='title-carousel'>San Francisco Study Spots</div> */}
                {/* </a> */}
              </Slide>
              <Slide index={2} className='slide'>
                {/* <a href="https://lyfe-logger-fe.herokuapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > */}
                  <Image src={image3} className='image' />

                {/* </a> */}
              </Slide>
              <Slide index={3} className='slide'>
      
                  <div>
                    Open:
                    <br/>
                    <button>
                      Projects
                    </button>
                    <br/>
                    <Link to='/about'>
                      <button>
                        About
                      </button>
                    </Link>
                  </div>

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