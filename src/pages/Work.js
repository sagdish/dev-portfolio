import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import arc from '../img/arc-logo.png'
import graphql from '../img/graphql-logo.png'
import lifeLogger from '../img/logo.png'
import sfspot from '../img/SF.png'
import './style.css'
import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
      <div className='pages-content'>

        <div className='back-btn-blog'>
          <Link to='/' style={{
            color: '#DADADA',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>

        <div className='box'>
          <div className='box-in'>
            <img src={graphql} alt='' style={{
              height: 'auto',
              width: '50%',
              alignSelf: 'center',
              marginBottom: '2%',
              // border: '1px solid blue'
            }}/>
            GraphQL server
            <div className='box-text'>
              GraphQL-Yoga, JSONwebtokens, Bcrypt, Prisma ...
              <div className='btn-overText'>
                <Link to='#' style={{
                  // color: '#DADADA',
                }}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' />
                </Link> 
              </div>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='box-in'>
            <img src={lifeLogger} alt='' style={{
              height: 'auto',
              width: '36%',
              alignSelf: 'center',
              marginBottom: '2%'
            }}/>
            Life Logger
            <div className='box-text'>
                PostgreSQL, React, Redux, Express, Node ...
              <div className='btn-overText'>
                <Link to='#' style={{
                  // color: '#DADADA',
                }}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' />
                </Link> 
              </div>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='box-in'>
            <img src={sfspot} alt='' style={{
                height: 'auto',
                width: '83%',
                // border: '1px solid white',
                // borderRadius: '5%',
                // boxShadow: '7px 13px 29px -8px rgba(0,0,0,0.75)',
                alignSelf: 'center'
            }}/>
            <div className='box-text'>
              MongoDB, React, Express, Node ...
              <div className='btn-overText' style={{
                bottom: '40%'
              }}>
                <Link to='#' style={{
                  // color: '#DADADA',
                }}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' />
                </Link> 
              </div>
            </div>

          </div>
        </div>

        <div className='box'>
          <div className='box-in'>
            <img src={arc} alt='' style={{
              height: 'auto',
              width: '60%',
              alignSelf: 'center',
              // marginBottom: '5%'
            }}/>
            <div className='box-text'>
              React, Bootstrap4 UI ...
              <div className='btn-overText'>
                <Link to='#' style={{
                  // color: '#DADADA',
                }}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' />
                </Link> 
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Fade>
  );
}

export default Work;