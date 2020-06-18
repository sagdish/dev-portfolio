import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import '../App.css'
import './style.css'

function Blog(props) {

  return (
    <Fade duration={2000} >
      <div className='blog-content'>

          <Link to='/'className='back-btn-blog' >
            <FontAwesomeIcon icon={faChevronLeft} size='3x'/>
          </Link>

        <div className='blog-entry' style={{marginTop: '100px'}}>
          <h2>Quick facts about me</h2>
          <p>I embrace concept of Stoic philosophy. It teaches us how to live virtuously and be better humans.
            No wonder that one of my favorite books is 'Meditations' by Marcus Aurelius.
            <br/> Check out Stoic quote generator I did on the main page (second slide in carousel window).
            <br/> I do intermittent and alternate day fasting. For the last half year my journey into it is uneasy and rewarding at the same time.
            <br/> Music I listen: Chillout/Ambient trance, Deep House, Vocal Trance and Deep Disco. Well you got an idea.
            <br/>Check this playlist for chill and relaxed time: &nbsp;
            <a href='https://www.youtube.com/watch?v=VjAxlcJgKGY&list=RDGMEMYH9CUrFO7CfLJpaD7UR85wVMVjAxlcJgKGY&index=1' 
              target='_blank'
              rel="noopener noreferrer"
              style={{color: 'inherit'}}
            >
             {' '} youtube playlist.
            </a> 
          </p>
        </div>
        
        <div className='blog-entry'>
          <h2>Tools I use</h2>
          <p> <span role="img" aria-label="laptop">💻</span> - MacBook Pro <br/>
            Code editor: &nbsp; Visual Studio Code. <br/>
            UI&UX: I do my wireframes and UI on Sketch. Figma is a big hit now, so I will probably switch to it, 
            since my Sketch license is expired so I stuck in year old buggy version.
            <br/>📸 - Nikon
            </p>
        </div>

        <div className='blog-entry'>
          <h2>Creating this website</h2>
          <p>I posted on Medium how I started doing this website, from sketches to implementation.
            <br/> Check this <a href='https://medium.com/@sagdish/crafting-my-personal-website-e0e0ab220c7f' 
              target='_blank'
              rel="noopener noreferrer"
              style={{color: 'inherit'}}
            >
             {' '} link
            </a>
          </p>
        </div>
        
      </div>
    </Fade>
  );
}

export default Blog;