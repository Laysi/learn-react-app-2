import React, { FC } from 'react';
import './NotifyPage.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField, Divider, TableBody, Table, TableCell, TableRow } from '@mui/material';

import { generateNotificationData, NotificationItem } from '../../data/Notification';

interface NotifyPageProps { }

const NotifyPage: FC<NotifyPageProps> = () => {


  let data = generateNotificationData(10);
  console.log(data);
  return (
    <Container >
      <Stack direction='column' bgcolor={'#FFF27B'} >
        {data.map((item) => (
          <NotifyList item={item} />
        ))}
      </Stack>
    </Container>
  )
};
const NotifyList: FC<{ item: NotificationItem }> = (props) => {
  return (
    <Stack direction='row' sx={{ mb: 2 }} bgcolor={'#FFF27B'} alignItems="center">

      <img src={props.item.image} alt="Product" style={{ width: 100, height: 'auto' }} />


      <Stack direction='column' sx={{ ml: 2 }}>

        <Typography variant="h6" sx={{ mb: 1 }}>{props.item.title}</Typography>


        <Typography variant="body1" sx={{ mb: 1 }}>{props.item.description}</Typography>


        <Typography variant="body2" color="textSecondary">{props.item.timestamp.toString()}</Typography>
      </Stack>
      <Button variant="outlined" color="primary" size="small">
        查看詳情
      </Button>
    </Stack>

  )
}
export default NotifyPage;
