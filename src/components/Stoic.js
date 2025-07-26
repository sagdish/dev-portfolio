import React, { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';

import './style.css'
import { quotes } from './quotes';
// import { index } from './Carousel';

function Stoic(props) {
  const [quotesList, setQuotesList] = useState([])
  const [random, setRandom] = useState( Math.floor( Math.random() * (quotes.length)) );
  useEffect(()=> {
    setQuotesList(quotes)
  },[])
  const [flipped, setFlip] = useState(false)
  const { rotateX, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    rotateX: flipped ? 180 : 0,
    config: { mass: 2, tension: 500, friction: 110 }
  });
  // let i = 1;
  // const replace = quotes[(quotes.length - 1) - index]

  const randomize = () => {
    setFlip(state => !state);
    setRandom( Math.floor(Math.random() * (quotes.length)) )
    // setQuotesList([...quotesList.slice(0, random -1), replace, ...quotesList.slice(random)  ])
    // quotes[random] = replace
    // index < quotes.length ? setIndex(index + 1) : setIndex(1)
  }
  // console.log(quotes.length, random)
  return (
    <div>
      <div style={{fontSize:'20px', marginTop: '5%', fontWeight: 'lighter'}}>
        Stoic Quote for you:
        <br/>
        <p style={{fontSize: '12px',
                    fontWeight: 'lighter',
                    marginTop: '15px',
                    marginLeft: '50%',
                  }}>
          *click on card to see next one
        </p>
      </div>
      
      <div onClick={randomize}>
        <a.div 
          className='card'
          style= {{ 
            opacity: opacity.to(o => 1 - o), 
            transform: rotateX.to(r => `perspective(600px) rotateX(${r}deg)`)
          }}
          >
          {quotesList[random]}
        </a.div>

        <a.div 
          className='card'
          style= {{ 
            opacity, 
            transform: rotateX.to(r => `perspective(600px) rotateX(${r + 180}deg)`)
          }}
        >
          {quotesList[random]}
        </a.div>
      </div>

    </div>
  );
}

export default Stoic;