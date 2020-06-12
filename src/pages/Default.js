import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { useChain, useTransition, useSpring, config } from 'react-spring';
import { useHistory } from 'react-router-dom';


// import {ReactComponent as Logo} from '../img/logoSvg.svg';
import Iam from '../components/Iam'
import Carousel from '../components/Carousel'
import { Container, Item } from '../components/styles'

function Default() {
  const history = useHistory()
  const compressIcon = <FontAwesomeIcon icon={faWindowMinimize} size='sm'/> 
  const populate =  [
    {name: 'Bio', url: 'about'},
    {name: 'Projects', url: 'projects'},
    {name: 'Blog-ish', url: 'blog'},
    {name: 'Contact', url: 'contact'},
    {name: 'Playground', url: 'play'},
    {name: compressIcon}
  ]

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

  return (
    <div className='content'>
      
      {/* <Logo className='logo' style={{
        display: history.location.pathname === '/' ? '?' : 'none'
      }}/> */}

      <div className='content-title'>
        <p>Full Stack Developer <br/> Experimenting with UI & UX </p>
        <Container className='content-title_button' style={{ ...rest, width: width, height: height }} onClick={() => set(open => !open)}>
          {transition.length === 0 ? '. . .' : ''}
          {transition.map(({ item, key, props }, i) => (
            <>
              { i !== 5 ? (
              <Link to={item.url} key={key} style={{textDecoration: 'none'}}>
                <Item key={key} style={{ ...props}}> {item.name} </Item>
              </Link>) : 
              <Item key={key} style={{ ...props}}> {item.name} </Item>
              }
            </>
          ))}
        </Container>
      </div>
      {/* <Iam /> */}
      <Carousel />
    </div>
  );
}

export default Default;