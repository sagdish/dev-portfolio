import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { useTransition, useSpring, config } from 'react-spring';
import { useMediaPredicate } from 'react-media-hook';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Carousel from '../components/Carousel'
import { Container, Item } from '../components/styles'
import './style.css';

// toast.configure()

function Default() {
  const compressIcon = <FontAwesomeIcon icon={faWindowMinimize} size='sm'/> 
  const populate =  [
    {name: 'Bio', url: 'about'},
    {name: 'Projects', url: 'projects'},
    {name: 'Blog-ish', url: 'blog'},
    {name: 'Contact', url: 'contact'},
    {name: 'Playground', url: 'play'},
    {name: 'close', icon: compressIcon}
  ]

  

//   useEffect(() => {
//     setTimeout(() => {
//       toast.dark(`Hey, I'm open for new opportunities. You can get in touch with me on the Contact page.`,
//         {
//           style: {
//             fontSize: '13px', 
//             backgroundColor: '#252526',
//             borderRadius: '7px'
//           },
//           autoClose: 8000,
//           position: toast.POSITION.BOTTOM_LEFT,
//           toastId: 'myCustomId',
//           pauseOnFocusLoss: false,
//         }
//       )
//     }, 6000)
//   }, [])

  //listener to change multi-function button:
  const smallScreen = useMediaPredicate('(max-width: 1149px)')
  // console.log(smallScreen)

  // below is animation for button menu:
  const [open, set ] = useState(false);
  
  const { width, height, ...rest } = useSpring({
    config: config.default,
    from: { width: '100px', height: '45px', background: '#212224'},
    to: { 
          width: open ? (smallScreen ? '250px' : '400px') : '100px',
          height: open ? (smallScreen ? '250px' : '160px') : '45px',
        }
  })

  const transitions = useTransition(open ? populate : [], {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    trail: 400 / populate.length,
    config: config.default
  })

  return (
    <div className='content'>

      <div className='content-title'>
        <p>Product Manager <br/> Transitioned from a Design & Development </p>
        <Container className={`content-title_button ${open ? '' : 'glow'}`} style={{ ...rest, width: width, height: height }} onClick={() => set(open => !open)}>
          {transitions.length === 0 ? '. . .' : ''}
          {transitions((style, item, t, index) => (
            item.url ? (
              <Link to={item.url} key={`item-${index}`} style={{textDecoration: 'none'}}>
                <Item style={style}> {item.name} </Item>
              </Link>
            ) : (
              <Item key={`item-${index}`} style={style}> {item.icon || item.name} </Item>
            )
          ))}
        </Container>
      </div>

      <Carousel />
    </div>
  );
}

export default Default;
