import React, { FC, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase,Box,Link as MuiLink } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
interface HeaderProps {}



const Header: FC<HeaderProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/productBrowsing/${searchTerm}`);
    }
  };
  return(
  <AppBar sx={{backgroundColor:'#FFF7CA'}} position="static" >
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '163px',
        justifyContent: 'space-between',  
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
      placeholder='搜索您最爱的商品'
      inputProps={{ 'aria-label': 'search' }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
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
      endAdornment={
        <IconButton  aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      }
    />
      <Box sx={{ marginLeft: 'auto', display: 'flex' ,alignItems:'center'}}>
        <IconButton  component={Link} to="/shoppingCart" sx={{ml:'35px'}}>
          <ShoppingCartOutlinedIcon sx={{color:'black'}} fontSize='large'/>
        </IconButton>
        <IconButton  component={Link} to="/personaInformation" sx={{ml:'35px'}}>
          <AccountCircleIcon sx={{color:'black'}} fontSize='large'/>
        </IconButton>
        <IconButton  component={Link} to="/personaInformation/notify" sx={{ml:'35px'}}>
          <NotificationsIcon sx={{color:'black'}} fontSize='large'/>
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);}

export default Header;
