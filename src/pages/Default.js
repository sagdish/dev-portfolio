import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import image1 from '../img/one.png'
import image2 from '../img/two.png'
import image3 from '../img/three.png'

function Default(props) {
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
          naturalSlideHeight={9}
          isPlaying={true}
          totalSlides={3}
        >
          <div className='carousel'>
            <Slider className='slider'>
              <Slide index={0}>
                <Image src={image1}/>
              </Slide>
              <Slide index={1}>
                <Image src={image2}/>
              </Slide>
              <Slide index={2}>
                <Image src={image3}/>
              </Slide>
            </Slider>

            <div className='buttons'>
              <ButtonBack style={{fontSize:20}}>&lt;</ButtonBack>
              <ButtonNext style={{fontSize:20}}>&gt;</ButtonNext>
            </div>
          </div>

        </CarouselProvider>

        {/* <div>
          carousel
        </div> */}
      </div>

        <div className='content-carousel_line'>
        </div>
    </div>
  );
}

export default Default;