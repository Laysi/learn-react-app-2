import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase,Box,Link as MuiLink } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <AppBar sx={{backgroundColor:'#FFF7CA'}}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '163px',
        justifyContent: 'space-between', // Center content horizontally        
      }}
    >
      <Box sx={{ margin: '40px', fontSize: '50px', fontWeight: 700 }}>
        <Box sx={{  textDecoration: 'none',
            color: 'inherit', }}>
        <MuiLink href='/' sx={{ textDecoration: 'none', color: 'black' }}>
          LOGO
        </MuiLink>
        </Box>
      </Box>
      <InputBase
        placeholder='搜索您最愛的商品'
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          height: '54.51578px',
          width: '60%',
          backgroundColor: '#D9D9D9',
          border: 'transparent',
          borderRadius: '20px',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '54.51578px',
          verticalAlign: 'middle',
          paddingLeft: '21px',
        }}
      />
      <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
        <IconButton  component={Link} to="/shoppingCart">
          <ShoppingCartOutlinedIcon sx={{marginLeft: '35px',height: '80px',width: '80px',color:'black'}}/>
        </IconButton>
        <IconButton  component={Link} to="/personaInformation">
          <AccountCircleIcon sx={{marginLeft: '35px',height: '80px',width: '80px',color:'black'}}/>
        </IconButton>
        <IconButton  component={Link} to="/personaInformation/notify">
          <NotificationsIcon sx={{marginLeft: '35px',height: '80px',width: '80px',color:'black'}}/>
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
