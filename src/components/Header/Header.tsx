import React, { FC } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className="Header" data-testid="Header">
    <div className='container'>

      <div className='logo'>
        <Link to='/'>
          LOGO
        </Link>
      </div>
      <input className='search' type='text' placeholder='搜索您最愛的商品' />
      <div className='icon'>
        <Link to="/shoppingCart">
          <svg className='svg-icon' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M24 64C19.6 64 16.04 67.6 16.04 72C16.04 76.4 19.6 80 24 80C28.4 80 32 76.4 32 72C32 67.6 28.4 64 24 64ZM0 0V8H8L22.4 38.36L17 48.16C16.36 49.28 16 50.6 16 52C16 56.4 19.6 60 24 60H72V52H25.68C25.12 52 24.68 51.56 24.68 51L24.8 50.52L28.4 44H58.2C61.2 44 63.84 42.36 65.2 39.88L79.52 13.92C79.84 13.36 80 12.68 80 12C80 9.8 78.2 8 76 8H16.84L13.08 0H0ZM64 64C59.6 64 56.04 67.6 56.04 72C56.04 76.4 59.6 80 64 80C68.4 80 72 76.4 72 72C72 67.6 68.4 64 64 64Z" fill="black" />
          </svg>
        </Link>
        <Link to="/personaInformation">
          <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
            <defs></defs>
            <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
            </g>
          </svg>
        </Link>
        <Link to="/personaInformation/notify">
          <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180.001-204.616v-59.998h72.308v-298.463q0-80.692 49.807-142.692 49.808-62 127.885-79.307v-24.923q0-20.833 14.57-35.416 14.57-14.584 35.384-14.584t35.429 14.584q14.615 14.583 14.615 35.416v24.923q78.077 17.307 127.885 79.307 49.807 62 49.807 142.692v298.463h72.308v59.998H180.001ZM480-497.692Zm-.068 405.383q-29.855 0-51.047-21.24-21.192-21.24-21.192-51.067h144.614q0 29.923-21.26 51.115-21.26 21.192-51.115 21.192ZM312.307-264.614h335.386v-298.463q0-69.462-49.116-118.577Q549.462-730.77 480-730.77q-69.462 0-118.577 49.116-49.116 49.115-49.116 118.577v298.463Z" /></svg>
        </Link>
      </div>
    </div>

  </div>
);

export default Header;
