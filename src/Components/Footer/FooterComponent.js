import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(props) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4  col-sm-2'>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/home' className='link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/topratedmovies' className='link'>
                  Top Rated Movies
                </Link>
              </li>
              <li>
                <Link to='/popular' className='link'>
                  Popular Movies
                </Link>
              </li>
              <li>
                <Link to='/search' className='link'>
                  Search
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-7 offset-1 col-sm-5'>
            <h5>Send me your feedbacks</h5>
            <address>
              <i className='fa fa-envelope fa-lg'></i>:{' '}
              <a href='mailto:ikuldeepyadavky@gmail.com' className='link'>
                ikuldeepyadavky@gmail.com
              </a>
            </address>
          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div className='text-center'>
              <a
                className='btn btn-social-icon btn-github'
                href='http://github.com/kuldeepyadavky'
              >
                <i className='fa fa-github'> </i>
              </a>
              <a
                className='btn btn-social-icon btn-instagram'
                href='http://instagram.com/amiinasimulation/'
              >
                <i className='fa fa-instagram'> </i>
              </a>
              <a
                className='btn btn-social-icon btn-linkedin'
                href='http://www.linkedin.com/in/kuldeepyadavky/'
              >
                <i className='fa fa-linkedin'> </i>
              </a>
              <a
                className='btn btn-social-icon btn-facebook'
                href='https://www.facebook.com/amiinasimulation/'
              >
                <i className='fa fa-facebook'> </i>
              </a>
              <a
                className='btn btn-social-icon btn-twitter'
                href='http://twitter.com/_kuldeeeeep_/'
              >
                <i className='fa fa-twitter'> </i>
              </a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <p>© Copyright 2020 Kuldeep Yadav</p>
          </div>
        </div>
      </div>
    </div>
  );
}
