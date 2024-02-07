import React, { FC } from 'react';
import './PersonaInformationPage.scss';
import {Box , List, ListItem, ListItemButton, ListItemIcon ,ListItemText} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
interface PersonaInformationPageProps {}

const PersonaInformationPage: FC<PersonaInformationPageProps> = () => (
  <div className="PersonaInformationPage" data-testid="PersonaInformationPage">
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#fffbe5' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="通知" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
          <ListItemIcon>
              <BorderColorIcon/>
            </ListItemIcon>
            <ListItemText primary="歷史訂單" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="帳號設定" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="購物車" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </div>
);

export default PersonaInformationPage;
