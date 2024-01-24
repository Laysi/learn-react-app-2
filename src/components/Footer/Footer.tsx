import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {  Link, Box ,Link as MuiLink} from '@mui/material';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    
    <Box
      
      sx={{
        position: 'relative',
        display: 'flex',
        
        bottom: 0,
        textAlign: 'center',
        backgroundColor: 'gray',
        width: '100%',
        height: '50px',
        alignItems: 'end',
      }}
  
    >
      <Box
        sx={{
          
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
    </Box>
  );
};

export default Footer;
