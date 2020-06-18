import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  const location = useLocation();
  return (
    <div className='footer'>
      <div className='footer-social'>
        <a href="https://github.com/sagdish" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={faGithub} size='2x' className='icon'/>
        </a>

        <a href="https://linkedin.com/in/sagdi-formanov/" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon'/>
        </a>

        <a href="https://twitter.com/FormanovSagdi" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={faTwitter} size='2x' className='icon' />
        </a>

        <a href="https://instagram.com/forsi_ph" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={faInstagram} size='2x' className='icon'/>
        </a>

      </div>

      {location.pathname === '/' ? (<div className='footer-name'>
          SAGDI FORMANOV
        </div>) :
        (<div className='pages-title'>
          <Link style={{textDecoration: 'none'}} to='/about'><h3>Bio</h3></Link>
          <Link style={{textDecoration: 'none'}} to='/projects'><h3>Projects</h3></Link>
          <Link style={{textDecoration: 'none'}} to='/blog'><h3>Blog</h3></Link>
          <Link style={{textDecoration: 'none'}} to='/contact'><h3>Contact</h3></Link>
        </div>)
      }

      
      
    </div>
  );
}

export default Footer;