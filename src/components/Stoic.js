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
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 110 }
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
  console.log(quotes.length, random)
  return (
    <div onClick={randomize}>
      <a.div 
        className='card'
        style= {{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {quotesList[random]}
      </a.div>

      <a.div 
        className='card'
        style= {{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
      >
         {quotesList[random] }
      </a.div>
    </div>
  );
}

export default Stoic;