import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {  Link, Toolbar, Box ,Link as MuiLink} from '@mui/material';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    
    <Toolbar
      component="footer"
      sx={{
        position: 'absolute',
        display: 'flex',
        left: 0,
        bottom: 0,
        textAlign: 'center',
        backgroundColor: 'gray',
        width: '100%',
        height: '20px',
        
      }}
  
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 5,
        }}
      >
     
          <Link href="#"   
          sx={{
            color: 'black',
            textDecoration: 'none',
            margin: '0 10px',
            ':hover': {
              textDecoration: 'underline',
            },
          }}>
            2023 copyright
          </Link>
     
       |
          <Link component={RouterLink} to="/connection"   
          sx={{
            color: 'black',
            textDecoration: 'none',
            margin: '0 10px',
            ':hover': {
              textDecoration: 'underline',
            },
          }}>
            聯絡我們
          </Link>
  
       |
          <Link href="#"  
           sx={{
            color: 'black',
            textDecoration: 'none',
            margin: '0 10px',
            ':hover': {
              textDecoration: 'underline',
            },
          }}>
          Facebook
          </Link>
        
      </Box>
    </Toolbar>
  );
};

export default Footer;
