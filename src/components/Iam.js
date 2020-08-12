import React, { useState } from 'react';

function Iam() {
  const [technically, showTechnically] = useState(false);
  const [pojizni, showPojizni] = useState(false);
  // const [technically, showTechnically] = useState(false);
  // commment to trigger git
  


  return(
    <div className='content-carousel'>
      <p>JavaScript - React, Redux, Node.js, Express, Vanila.js
SketchUI, HTML, CSS
Version Control / Git
Databases: PostgreSQL, MongoDB Team Player, Positive Attitude</p>
    </div>
  )
}

export default Iam;