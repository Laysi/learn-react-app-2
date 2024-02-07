import React, { FC } from 'react';
import './PersonaInformationPage.scss';
import {Box , List, ListItem, ListItemButton, ListItemIcon ,ListItemText, Stack} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { NavLink, Outlet } from 'react-router-dom';
interface PersonaInformationPageProps {}

const PersonaInformationPage: FC<PersonaInformationPageProps> = () => (
  <div className="PersonaInformationPage" data-testid="PersonaInformationPage">
    <Stack direction="row" spacing={2}>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#fffbe5' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem disablePadding component={NavLink} to='notify'>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="通知" />
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding component={NavLink} to='historicalOrders'>
          <ListItemButton>
          <ListItemIcon>
              <BorderColorIcon/>
            </ListItemIcon>
            <ListItemText primary="歷史訂單" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={NavLink} to='accountSettings'>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="帳號設定" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={NavLink} to='/shoppingCart'>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="購物車" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    <Box>
      <Outlet />
    </Box>
    </Stack>
  </div>
);

export default PersonaInformationPage;
