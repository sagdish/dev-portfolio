import React, { useRef, useEffect } from 'react';

// import bg from '../img/clock/clockBg.png'
import second from '../img/clock/secondH.png'
import minute from '../img/clock/minuteH.png'
import hour from '../img/clock/hourH.png'

function Clock(props) {

  const hourRef = useRef('');
  const minuteRef = useRef('');
  const secondRef = useRef('');

  useEffect(() => {

    function setClock() {
      const currentDate = new Date();
      const secondsRatio = currentDate.getSeconds() / 60;
      const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  
      setRotation(secondRef.current, secondsRatio)
      setRotation(minuteRef.current, minutesRatio)
      setRotation(hourRef.current, hoursRatio)
    }

    function setRotation(element, rotationRatio) {
      if (element) {
        element.style.setProperty('--rotation', rotationRatio * 360)
      }
    }

    setInterval(setClock, 1000);
    setClock();
  },
  [hourRef, minuteRef, secondRef,])
 

  return (
    <div className='container'>
      <div className='clock'>
        <img className='hand hour' src={hour} alt='' 
          style={{height: '30%'}}
          ref={hourRef}
        />
        <img className='hand minute' src={minute} alt=''
         style={{height: '37%'}}
         ref={minuteRef}
        />
        <img className='hand second' src={second} alt='' 
          style={{height: '47%'}}
          ref={secondRef}
        />
      </div>
      
    </div>
  );
}

export default Clock;