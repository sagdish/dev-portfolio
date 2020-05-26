import React, { useState } from 'react';
import { CarouselProvider, 
  Slider, Slide, ButtonBack, 
  ButtonNext, Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

import image1 from '../img/one.png'
import image2 from '../img/two.png'
import image3 from '../img/three.png'

function Default() {

  const [animate, setAnimate] = useState(false);
  // console.log(animate)

  const addAndRemove = () =>{
    setAnimate(true)
    console.log(animate)
    setTimeout(() => {
      setAnimate(false)
      console.log(animate)
    }, 1000);
  }

  return (
    <div className='content'>
      <div className='content-title'>

          <p>Full Stack Developer <br/> 
            Experimenting with UI & UX </p>
          <button className='content-title_button'>
            . . .
          </button>

      </div>

      <div className='content-carousel'>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={9.5}
          isPlaying={true}
          totalSlides={3}
        >
          {/* <h1 className="projectsName">Projects:</h1> */}
          <div className='carousel'>
            <Slider className='slider'>
              <Slide index={0}>
                <a href="https://arcregistry.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <Image src={image1}/>
                </a>
              </Slide>
              <Slide index={1}>
                <a href="https://sf-spots.sagdi.now.sh/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <Image src={image2}/>
                </a>
              </Slide>
              <Slide index={2}>
                <a href="https://lyfe-logger-fe.herokuapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <Image src={image3}/>
                </a>
              </Slide>
            </Slider>
            <ButtonBack className='slider-buttons_l' 
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size='lg' />
            </ButtonBack>
            <ButtonNext className='slider-buttons_r'
              onClick={addAndRemove}
            >
              <FontAwesomeIcon icon={faArrowAltCircleRight} size='lg' />
            </ButtonNext>
          </div>

        </CarouselProvider>
      </div>

        <div className={`content-carousel_line ${animate? 'animate' : ''}`}>
        {/* <div className='content-carousel_line animate'> */}
        </div>
    </div>
  );
}

export default Default;