import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { MdComputer, MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
   
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdComputer className='navbar-icon' />
              Arevik Mkrtchyan
            </Link>
          </div>
          <small className='website-rights'>Arevik Mkrtchyan © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='Youtube'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
