import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, 
  Slider, Slide, ButtonBack, 
  ButtonNext, Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { useChain, useTransition, useSpring, config } from 'react-spring';

import { Container, Item } from '../components/styles'
import image1 from '../img/one.png'
import image2 from '../img/two.png'
import image3 from '../img/three.png'

function Default() {
  const compressIcon = <FontAwesomeIcon icon={faWindowMinimize} size='sm'/> 
  const populate =  [{name: 'About'}, {name: 'Projects'}, {name: 'Blog -ish'}, {name: 'Contact'}, {name: compressIcon}]

  const [slide, setSlide] = useState(0)
  const [animate, setAnimate] = useState(false);
  // below is animation for button menu:
  const [open, set ] = useState(false);
  const springRef = useRef();
  const { width, opacity, height, ...rest } = useSpring({
    ref: springRef,
    config: config.default,
    from: { width: '100px', height: '45px', background: '#212224'},
    to: { width: open ? '400px' : '100px', height: open ? '160px' : '45px'}
  })

  const transRef = useRef()
  const transition = useTransition(open ? populate : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / populate.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

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

  return (
    <div className='content'>
      <div className='content-title'>

          <p>Full Stack Developer <br/> 
            Experimenting with UI & UX </p>
          {/* <Link to='/about'  >
          </Link> */}

              {/* <button className='content-title_button'>
                . . .
                  </button> */}
                {/* <div className='content-title_button'>
                  . . . */}
                  <Container className='content-title_button' style={{ ...rest, width: width, height: height }} onClick={() => set(open => !open)}>
                    {transition.length === 0 ? '. . .' : ''}
                    {transition.map(({ item, key, props }, i) => (
                      <>
                        { i !== 4 ? (
                        <Link to={key} key={key} style={{textDecoration: 'none'}}>
                          <Item key={key} style={{ ...props}}> {item.name} </Item>
                        </Link>) : 
                        <Item key={key} style={{ ...props}}> {item.name} </Item>
                        }
                      </>
                    ))}
                  </Container>
                {/* </div> */}

      </div>

      <div className='content-carousel'>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={9.5}
          isPlaying={false}
          totalSlides={3}
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
                  <Image src={image1} className='image' />
                  {/* <div className='title-carousel'>ARC</div> */}
                 
                {/* </a> */}
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
              {/* <Slide index={3} className='slide'>
      
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

              </Slide> */}
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

        <div className={`content-carousel_line ${animate? 'animate' : ''}`}>
        {/* <div className='content-carousel_line animate'> */}
        </div>
    </div>
  );
}

export default Default;