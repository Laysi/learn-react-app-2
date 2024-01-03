import React, { FC } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer" data-testid="Footer">
   <div className='footerall'>
      <Link to="#" className='footer-link' >2023 copyright</Link> | 
      <Link to="/connection" className='footer-link' >聯絡我們</Link> | 
      <Link to="#" className='footer-link' >Facebook</Link>
    </div>
  </div>
);

export default Footer;
